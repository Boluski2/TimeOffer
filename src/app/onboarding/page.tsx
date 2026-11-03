import OnboardingForm from "@/components/OnboardingForm";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

const page = async () => {

    const user = await currentUser();

    if (!user) {
        return <div>Loading...</div>
    }
    // A local install may not have a database configured yet. Clerk metadata
    // routing in middleware still handles completed accounts in that case.
    if (process.env.DATABASE_URL) {
        const existingUser = await prisma.user.findUnique({
            where: { clerkId: user.id },
            select: { role: true },
        });

        if (existingUser?.role === "ADMIN") redirect("/admin");
        if (existingUser?.role === "EMPLOYEE") redirect("/employee");
    }


  return (
    <div className="container max-w-md mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Complete your profile</h1>
        <OnboardingForm 
            userEmail={user.emailAddresses[0].emailAddress}
            firstName={user.firstName || ""}
            lastName={user.lastName || ""}
        />
    </div>
  )
}

export default page
