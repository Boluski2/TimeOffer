// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Paperclip, Menu } from "lucide-react";
// import { SignInButton } from "@clerk/nextjs";
// import { UserButton } from "@clerk/nextjs";
// import { SignedIn } from "@clerk/nextjs";
// import { SignedOut } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// export default async function Home() {
//   const { sessionClaims } = await auth();

//   if (sessionClaims?.metadata?.role === "ADMIN") {
//     redirect("/admin");
//   } else if (sessionClaims?.metadata?.role === "EMPLOYEE") {
//     redirect("/employee");
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
//         <Link href="/" className="flex items-center">
//           <span className="text-xl md:text-2xl font-bold">TimeOffer</span>
//         </Link>
        
//         <div className="flex items-center gap-4">
//           {/* Desktop navigation - moved to the end */}
//           <nav className="hidden md:flex gap-4 sm:gap-6">
//             <Link
//               href="/features"
//               className="text-sm font-medium hover:underline underline-offset-4"
//             >
//               Features
//             </Link>
//             <Link
//               href="/tutorial"
//               className="text-sm font-medium hover:underline underline-offset-4"
//             >
//               How it works
//             </Link>
//             <Link
//               href="/pricing"
//               className="text-sm font-medium hover:underline underline-offset-4"
//             >
//               Pricing
//             </Link>
//           </nav>
          
//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Menu className="h-6 w-6" />
//           </div>
          
//           {/* Auth buttons */}
//           <div className="flex gap-2 md:gap-4">
//             <SignedOut>
//               <SignInButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </div>
//         </div>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-8 md:py-12 lg:py-24 xl:py-48">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
//               <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
//                 <div className="space-y-2">
//                   <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
//                     Effortless Time Off Management
//                   </h1>
//                   <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-sm ">
//                     Streamline your company&apos;s time off requests, approvals,
//                     and tracking all in one place.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Button asChild size="sm" className="md:size-default">
//                     <Link href="/sign-up">Get Started</Link>
//                   </Button>
//                   <Button variant={"outline"} asChild size="sm" className="md:size-default">
//                     <Link href="/features">Learn More</Link>
//                   </Button>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center order-1 lg:order-2">
//                 <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
//                   <Image
//                     src="/dashboard-screenshot.webp"
//                     alt="Dashboard screenshot"
//                     width={600}
//                     height={400}
//                     priority
//                     className="w-full h-auto object-cover"
//                   />
//                   <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/20 to-transparent h-8">
//                     <div className="flex items-center gap-2 px-4 py-2">
//                       <div className="bg-red-500 w-2 h-2 rounded-full" />
//                       <div className="bg-yellow-500 w-2 h-2 rounded-full" />
//                       <div className="bg-green-500 w-2 h-2 rounded-full" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
//                   Key Features
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm ">
//                   Everything you need to manage your time off requests,
//                   approvals, and tracking all in one place.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 grid-cols-1">
//               <Card>
//                 <CardContent className="pt-6">
//                   <div className="flex flex-col justify-center space-y-4">
//                     <Paperclip className="w-8 h-8 md:w-10 md:h-10 text-black" />
//                     <div className="space-y-2">
//                       <h3 className="text-lg md:text-xl font-bold">
//                         Easy Request Submission
//                       </h3>
//                       <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
//                         Employees can submit time off requests directly through
//                         the platform.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="pt-6">
//                   <div className="flex flex-col justify-center space-y-4">
//                     <Paperclip className="w-8 h-8 md:w-10 md:h-10 text-black" />
//                     <div className="space-y-2">
//                       <h3 className="text-lg md:text-xl font-bold">
//                         Easy Request Submission
//                       </h3>
//                       <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
//                         Employees can submit time off requests directly through
//                         the platform.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="pt-6">
//                   <div className="flex flex-col justify-center space-y-4">
//                     <Paperclip className="w-8 h-8 md:w-10 md:h-10 text-black" />
//                     <div className="space-y-2">
//                       <h3 className="text-lg md:text-xl font-bold">
//                         Easy Request Submission
//                       </h3>
//                       <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
//                         Employees can submit time off requests directly through
//                         the platform.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// } 


import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Users, BarChart, Clock, Shield, Bell } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import MobileMenu from "@/components/mobile-menu";

export default async function Home() {


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
              href="/HowItWorks"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              How it works
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <MobileMenu />
          
          {/* Auth buttons */}
          <div className="flex gap-2 md:gap-4">
            <SignedOut>
              <div className="hidden md:block">
                <SignInButton>
                  <Button variant="ghost" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-700 shadow-md transition-all duration-200 hover:scale-105">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
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
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-sm ">
                    Streamline your company&apos;s time off requests, approvals,
                    and tracking all in one place. Save time, reduce errors, and 
                    keep your team happy with our intuitive platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button 
                    asChild 
                    size="sm" 
                    className="md:size-default bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-700 shadow-md cursor-pointer transition-all duration-200 hover:scale-105"
                  >
                    <Link href="/sign-up">Get Started</Link>
                  </Button>
                  {/* <Button 
                    variant={"outline"} 
                    asChild 
                    size="sm" 
                    className="md:size-default border-gray-300 cursor-pointer"
                  >
                    <Link href="/features">Learn More</Link>
                  </Button> */}
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Set up in minutes</span>
                  </div>
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
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm ">
                  Everything you need to manage your time off requests,
                  approvals, and tracking all in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 grid-cols-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <Calendar className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Easy Request Submission
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Employees can submit time off requests in seconds with our intuitive interface.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Quick Approvals
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Managers receive instant notifications and can approve requests with one click.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <BarChart className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Dashboard Analytics
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Visualize team availability, track time off trends, and plan resources effectively.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Team Visibility
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        See who's out and when with the shared team calendar.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <Shield className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Custom Policies
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Configure time off policies that match your company's specific requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <Bell className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        Smart Reminders
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Automated reminders for pending requests and upcoming time off.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-sm ">
                  Hear from companies that have transformed their time off management.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8 grid-cols-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-semibold">Sarah Johnson</h4>
                        <p className="text-sm text-gray-500">HR Director, TechCorp</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "TimeOffer has reduced our administrative workload by 70%. The team loves how easy it is to request time off."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-semibold">Michael Chen</h4>
                        <p className="text-sm text-gray-500">CEO, StartupXYZ</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "The analytics dashboard helps us plan resources effectively. We've eliminated scheduling conflicts entirely."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-semibold">Emily Rodriguez</h4>
                        <p className="text-sm text-gray-500">Team Lead, DesignCo</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "Approving time off requests used to take hours each week. Now it takes minutes. The mobile access is fantastic!"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Ready to simplify time off management?
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Join thousands of companies that use TimeOffer to streamline their time off processes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-700 shadow-md cursor-pointer transition-all duration-200 hover:scale-105"
                >
                  <Link href="/sign-up">Get Started Free</Link>
                </Button>
                {/* <Button 
                  variant={"outline"} 
                  asChild 
                  size="lg"
                  className="border-gray-300 cursor-pointer"
                >
                  <Link href="/demo">Schedule a Demo</Link>
                </Button> */}
              </div>
              <p className="text-sm text-gray-500">No credit card required. Free trial for 14 days.</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TimeOffer</h3>
            <p className="text-gray-400 text-sm">
              Simplifying time off management for teams of all sizes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              {/* <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li> */}
              <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/tutorial" className="hover:text-white">How it works</Link></li>
              <li><Link href="/support" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} TimeOffer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}