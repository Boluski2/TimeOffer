"use server";
import { clerkClient } from "@clerk/nextjs/server";
// import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
export async function createEmployee(
  firstName: string,
  lastName: string,
  department: string | undefined,
  clerkId: string,
  invitationCode: string
) {
  try {
    const client = await clerkClient();
    const user = await client.users.getUser(clerkId);
    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();
    if (!user || !cleanFirstName || !cleanLastName) {
      throw new Error("User not found");
    }

    const code = await prisma.code.findFirst({
      where: {
        code: invitationCode,
        used: false,
      },
    });

    if (!code) {
      throw new Error("Invalid invitation code");
    }

    await client.users.updateUser(user.id, {
      firstName: cleanFirstName,
      lastName: cleanLastName,
    });

    await (
      await clerkClient()
    ).users.updateUserMetadata(user.id, {
      publicMetadata: {
        onboardingCompleted: true,
        role: "EMPLOYEE",
        companyId: code.companyId,
      },
    });

    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstName: cleanFirstName,
        lastName: cleanLastName,
        role: "EMPLOYEE",
        department: department || null,
        companyId: code.companyId,
      },
    });

    await prisma.code.update({
      where: {
        id: code.id,
      },
      data: {
        used: true,
      },
    });

    revalidatePath("/onboarding");

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}

export async function createAdmin(
  firstName: string,
  lastName: string,
  companyName: string,
  companyWebsite: string,
  companyLogo: string,
  clerkId: string
) {
  try {
    const client = await clerkClient();
    const user = await client.users.getUser(clerkId);
    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();

    if (!user || !cleanFirstName || !cleanLastName) {
      throw new Error("User not found");
    }

    await client.users.updateUser(user.id, {
      firstName: cleanFirstName,
      lastName: cleanLastName,
    });

    const company = await prisma.company.create({
      data: {
        name: companyName,
        website: companyWebsite,
        logo: companyLogo,
      },
    });

    await (
      await clerkClient()
    ).users.updateUserMetadata(user.id, {
      publicMetadata: {
        onboardingCompleted: true,
        role: "ADMIN",
        companyId: company.id,
      },
    });

    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstName: cleanFirstName,
        lastName: cleanLastName,
        role: "ADMIN",
        companyId: company.id,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}
