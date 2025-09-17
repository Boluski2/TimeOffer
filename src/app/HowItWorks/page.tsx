"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  CheckCircle, 
  Users, 
  BarChart, 
  UserCheck,
  Settings,
  Play,
  Download,
  Mail,
  Smartphone
} from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Sign Up & Set Up",
      description: "Create your account and configure your company's time off policies",
      icon: Settings,
      details: [
        "Register your company account",
        "Set up time off policies (vacation, sick leave, etc.)",
        "Configure approval workflows",
        "Import your team members"
      ],
      image: "/Signin.png"
    },
    {
      step: 2,
      title: "Request Time Off",
      description: "Employees easily submit time off requests through the platform",
      icon: Calendar,
      details: [
        "Select dates on an intuitive calendar",
        "Choose time off type (vacation, sick, personal)",
        "Add notes or comments if needed",
        "Submit with a single click"
      ],
      image: "/request.png"
    },
    {
      step: 3,
      title: "Manager Approval",
      description: "Managers receive notifications and review requests",
      icon: UserCheck,
      details: [
        "Get instant notifications for new requests",
        "View team calendar to check availability",
        "Approve or deny with a single click",
        "Add comments for context"
      ],
      image: "/Approved.png"
    },
    {
      step: 4,
      title: "Automated Tracking",
      description: "The system automatically tracks balances and updates records",
      icon: BarChart,
      details: [
        "Automatic balance calculations",
        "Real-time updates across the platform",
        "Historical record keeping",
        "Exportable reports"
      ],
      image: "/tracking.png"
    }
  ];

  const features = [
    {
      title: "Mobile Access",
      description: "Manage time off requests from anywhere with our mobile app",
      icon: Smartphone
    },
    {
      title: "Email Notifications",
      description: "Stay informed with automatic email updates for requests and approvals",
      icon: Mail
    },
    {
      title: "Export Reports",
      description: "Download time off reports for payroll and accounting purposes",
      icon: Download
    },
    {
      title: "Customizable Policies",
      description: "Tailor time off policies to match your company's specific needs",
      icon: Settings
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
              className="text-sm font-medium hover:underline underline-offset-4 text-blue-600"
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
                  How TimeOffer Works
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  A simple, streamlined process for managing time off requests from start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Simple 4-Step Process
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                From request to approval, our platform makes time off management effortless for everyone.
              </p>
            </div>

            <div className="space-y-20">
              {steps.map((step, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                    <div className="w-full max-w-md h-64 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden relative">
                      {/* Fallback icon if image doesn't load */}
                      <step.icon className="h-24 w-24 text-blue-200 absolute" />
                      
                      {/* Image that fits the container */}
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover p-4"
                        onError={(e) => {
                          // Hide the image if it fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section id="video-demo" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                See It in Action
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                Watch our short demo to see how easy time off management can be.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-600">Product demo video</p>
                  <p className="text-sm text-gray-500 mt-2">2:34 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Benefits for Everyone
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                TimeOffer simplifies time off management for employees, managers, and HR teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    For Employees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Easy request submission from any device</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Real-time status updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Always know your balance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>View team calendar to plan time off</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCheck className="h-6 w-6 text-blue-600" />
                    For Managers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Instant notification of requests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>One-click approvals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Team visibility and planning tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>No more spreadsheet tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-6 w-6 text-blue-600" />
                    For HR Teams
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Automated policy enforcement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Comprehensive reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reduced administrative workload</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Audit trail for compliance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Additional Features
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                Everything you need for complete time off management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
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
              <li><Link href="/how-it-works" className="hover:text-white">How it works</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/tutorial" className="hover:text-white">Tutorials</Link></li>
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