"use client";

import Link from "next/link";
import { ChevronDown, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className=" flex h-16 items-center px-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-sm font-medium">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium">
                Properties
              </Link>
              <Link href="#" className="text-sm font-medium">
                About
              </Link>
              <Link href="#" className="text-sm font-medium">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="flex items-center">
            <div className="h-6 w-6 bg-orange-500" />
            <span className="ml-2 text-xl font-bold">LJ Hooker</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex md:flex-1">
          <Link
            href="#"
            className="mr-6 text-sm font-medium hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="#"
            className="mr-6 text-sm font-medium hover:text-primary"
          >
            Properties
          </Link>
          <Link
            href="#"
            className="mr-6 text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav> */}

        {/* Access User Button */}
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="default" className="hidden md:inline-flex">
            Access User
          </Button>

          {/* Location Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hidden md:inline-flex">
                LJ Hooker Coomera
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>LJ Hooker Coomera</DropdownMenuItem>
              <DropdownMenuItem>LJ Hooker Brisbane</DropdownMenuItem>
              <DropdownMenuItem>LJ Hooker Gold Coast</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Avatar */}
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
