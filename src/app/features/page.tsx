import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  CheckCircle, 
  Users, 
  BarChart, 
  Shield, 
  Bell, 
  Clock,
  Zap,
  Eye,
  FileText,
  Download,
  Mail,
  Server
} from "lucide-react";

import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";




export default function Features() {
  const features = [
    {
      title: "Easy Request Submission",
      description: "Employees can submit time off requests in seconds with our intuitive interface.",
      icon: Calendar,
      details: [
        "Simple one-click request form",
        "Visual calendar selection",
        "Automatic conflict detection",
        "Mobile-friendly design"
      ]
    },
    {
      title: "Quick Approvals",
      description: "Managers receive instant notifications and can approve requests with one click.",
      icon: CheckCircle,
      details: [
        "Real-time notifications",
        "One-click approval/rejection",
        "Custom approval workflows",
        "Delegation options"
      ]
    },
    {
      title: "Dashboard Analytics",
      description: "Visualize team availability, track time off trends, and plan resources effectively.",
      icon: BarChart,
      details: [
        "Team availability overview",
        "Usage trends and reports",
        "Customizable dashboards",
        "Export to PDF/Excel"
      ]
    },
    {
      title: "Team Visibility",
      description: "See who's out and when with the shared team calendar.",
      icon: Users,
      details: [
        "Shared team calendar",
        "Department-level views",
        "Out-of-office indicators",
        "Privacy controls"
      ]
    },
    {
      title: "Custom Policies",
      description: "Configure time off policies that match your company's specific requirements.",
      icon: Shield,
      details: [
        "Flexible policy creation",
        "Accrual rate configuration",
        "Carry-over rules",
        "Multi-location support"
      ]
    },
    {
      title: "Smart Reminders",
      description: "Automated reminders for pending requests and upcoming time off.",
      icon: Bell,
      details: [
        "Custom reminder schedules",
        "Email and push notifications",
        "Approval deadline alerts",
        "Return-to-work notices"
      ]
    },
    {
      title: "Real-time Sync",
      description: "All changes sync across devices instantly, keeping everyone up to date.",
      icon: Zap,
      details: [
        "Instant updates across platform",
        "No manual refresh needed",
        "Conflict resolution",
        "Change history tracking"
      ]
    },
    {
      title: "Manager Oversight",
      description: "Comprehensive tools for managers to oversee team availability and requests.",
      icon: Eye,
      details: [
        "Team capacity planning",
        "Request history review",
        "Balance adjustments",
        "Reporting tools"
      ]
    },
    {
      title: "Reporting",
      description: "Generate detailed reports on time off usage, trends, and balances.",
      icon: FileText,
      details: [
        "Custom report builder",
        "Scheduled report delivery",
        "Export capabilities",
        "Visual data representation"
      ]
    }
  ];

  const integrations = [
    {
      name: "Google Calendar",
      description: "Sync time off events directly to Google Calendar",
      icon: Calendar
    },
    {
      name: "Outlook",
      description: "Integrate with Microsoft Outlook calendar",
      icon: Mail
    },
    {
      name: "Slack",
      description: "Receive notifications and approve requests in Slack",
      icon: Bell
    },
    {
      name: "HR Systems",
      description: "Connect with popular HR platforms",
      icon: Server
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold">TimeOffer</span>
        </Link>
        
        <div className="flex items-center gap-4">
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
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Powerful Features for Modern Teams
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  Everything you need to manage time off requests, approvals, and tracking in one seamless platform.
                </p>
              </div>
              {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-700 shadow-md cursor-pointer">
                  <Link href="/sign-up">Get Started Free</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Everything You Need in One Platform
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                Our comprehensive feature set is designed to streamline time off management for teams of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Works With Your Favorite Tools
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                TimeOffer integrates seamlessly with the tools your team already uses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <integration.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{integration.name}</h3>
                    <p className="text-gray-600 text-sm">{integration.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Why Companies Choose TimeOffer
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                Discover how our platform transforms time off management for organizations of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Save Time</h3>
                <p className="text-gray-600">
                  Reduce administrative work by up to 70% with automated processes and streamlined workflows.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Download className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Increase Productivity</h3>
                <p className="text-gray-600">
                  Eliminate scheduling conflicts and ensure proper team coverage at all times.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Improve Satisfaction</h3>
                <p className="text-gray-600">
                  Empower employees with self-service tools and transparent approval processes.
                </p>
              </div>
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
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
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