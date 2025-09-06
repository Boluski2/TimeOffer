import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Paperclip, Menu } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role === "ADMIN") {
    redirect("/admin");
  } else if (sessionClaims?.metadata?.role === "EMPLOYEE") {
    redirect("/employee");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold">TimeOffer</span>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Desktop navigation - moved to the end */}
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link
              href="/features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="/tutorial"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Menu className="h-6 w-6" />
          </div>
          
          {/* Auth buttons */}
          <div className="flex gap-2 md:gap-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-24 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                    Effortless Time Off Management
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-sm md:text-base">
                    Streamline your company&apos;s time off requests, approvals,
                    and tracking all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="sm" className="md:size-default">
                    <Link href="/sign-up">Get Started</Link>
                  </Button>
                  <Button variant={"outline"} asChild size="sm" className="md:size-default">
                    <Link href="/features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/dashboard-screenshot.webp"
                    alt="Dashboard screenshot"
                    width={600}
                    height={400}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/20 to-transparent h-8">
                    <div className="flex items-center gap-2 px-4 py-2">
                      <div className="bg-red-500 w-2 h-2 rounded-full" />
                      <div className="bg-yellow-500 w-2 h-2 rounded-full" />
                      <div className="bg-green-500 w-2 h-2 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm md:text-base">
                  Everything you need to manage your time off requests,
                  approvals, and tracking all in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 grid-cols-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <Paperclip className="w-8 h-8 md:w-10 md:h-10 text-black" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Easy Request Submission
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Employees can submit time off requests directly through
                        the platform.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <Paperclip className="w-8 h-8 md:w-10 md:h-10 text-black" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Easy Request Submission
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Employees can submit time off requests directly through
                        the platform.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <Paperclip className="w-8 h-8 md:w-10 md:h-10 text-black" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Easy Request Submission
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Employees can submit time off requests directly through
                        the platform.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}