"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/features"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/tutorial"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
                  <div className="flex gap-2 md:gap-4">
            <SignedOut>
              <div className="md:block">
                <SignInButton>
                  <Button variant="ghost" className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-700 shadow-md transition-all duration-200 hover:scale-105">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          </nav>
     
        </div>
      )}
    </div>
  );
}