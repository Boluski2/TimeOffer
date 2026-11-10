"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../prisma";
import { TimeOffType } from "@prisma/client";
import { isValid } from "date-fns";

export async function createTimeOffRequest(formData: FormData) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!dbUser) {
      throw new Error("User not found");
    }

    const startDateValue = formData.get("startDate");
    const endDateValue = formData.get("endDate");
    const type = formData.get("type") as string;
    const reason = formData.get("reason");

    if (typeof startDateValue !== "string" || typeof endDateValue !== "string") {
      throw new Error("Start and end dates are required");
    }
    if (!(Object.values(TimeOffType) as string[]).includes(type)) {
      throw new Error("Invalid time off type");
    }
    const startDate = new Date(startDateValue);
    const endDate = new Date(endDateValue);
    if (!isValid(startDate) || !isValid(endDate) || startDate > endDate) {
      throw new Error("Choose a valid date range");
    }
    const today = new Date();
    const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    if (startDate.toISOString().slice(0, 10) < todayKey) throw new Error("Requests cannot start in the past");
    const startDay = Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate());
    const endDay = Date.UTC(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate());
    if ((endDay - startDay) / 86_400_000 > 366) throw new Error("A request cannot exceed 367 calendar days");

    // The browser's duration is presentation only. Recompute it here so a
    // modified request cannot claim a smaller deduction than its date range.
    const excludeWeekends = formData.get("excludeWeekends") === "true";
    const excludeHolidays = formData.get("excludeHolidays") === "true";
    const customDatesValue = formData.get("customExcludedDates");
    let customDates: Set<string> = new Set();
    if (typeof customDatesValue === "string") {
      try {
        const dates: unknown = JSON.parse(customDatesValue);
        if (!Array.isArray(dates) || dates.some((date) => typeof date !== "string" || !isValid(new Date(date)))) {
          throw new Error("Invalid excluded dates");
        }
        customDates = new Set(dates.map((date: string) => new Date(date).toISOString().slice(0, 10)));
      } catch {
        throw new Error("Invalid excluded dates");
      }
    }

    const company = await prisma.company.findUnique({
      where: { id: dbUser.companyId },
      include: { holidays: true },
    });
    if (!company) throw new Error("Company not found");
    const holidayDates = new Set(company.holidays.map((holiday) => {
      const date = new Date(holiday.date);
      return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
    }));
    const recurringHolidayDates = new Set(company.holidays.filter((holiday) => holiday.isRecurring).map((holiday) => {
      const date = new Date(holiday.date);
      return `${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
    }));
    let workingDays = 0;
    const cursor = new Date(Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate()));
    const end = Date.UTC(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate());
    while (cursor.getTime() <= end) {
      const dayKey = cursor.toISOString().slice(0, 10);
      const recurringKey = dayKey.slice(5);
      const weekend = cursor.getUTCDay() === 0 || cursor.getUTCDay() === 6;
      const holiday = holidayDates.has(dayKey) || recurringHolidayDates.has(recurringKey);
      if (!(excludeWeekends && weekend) && !(excludeHolidays && holiday) && !customDates.has(dayKey)) workingDays++;
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
    if (workingDays < 1) throw new Error("The selected dates contain no chargeable days");

    const overlappingRequest = await prisma.timeOffRequest.findFirst({
      where: {
        employeeId: dbUser.id,
        status: { in: ["PENDING", "APPROVED"] },
        startDate: { lte: endDate },
        endDate: { gte: startDate },
      },
      select: { id: true },
    });
    if (overlappingRequest) throw new Error("This request overlaps an existing pending or approved request");

    const timeOffRequest = await prisma.timeOffRequest.create({
      data: {
        startDate,
        endDate,
        type: type as TimeOffType,
        reason: typeof reason === "string" ? reason.trim().slice(0, 1000) || null : null,
        employeeId: dbUser.id,
        workingDaysCount: workingDays,
      },
    });

    return timeOffRequest;
  } catch (error) {
    console.error("Error creating time off request:", error);
    throw new Error("An error occurred while creating the request");
  }
}
