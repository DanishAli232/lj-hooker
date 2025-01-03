"use client";

import Link from "next/link";
import { ChevronDown, Eye, LogOut, Menu, User, Users } from "lucide-react";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { AccessUserPopup } from "./access-user-popup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  // console.log(user);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAccessUser = () => {
    setOpen(true);
  };

  const handleLogout = async () => {
    window.location.href = "/api/auth/logout";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className=" flex h-16 items-center px-6">
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
          <Image
            src={logo}
            alt=""
            className="h-full w-full "
            width={200}
            height={200}
            priority
            unoptimized={true}
          />{" "}
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
          <Button
            onClick={handleAccessUser}
            variant="default"
            className="hidden md:inline-flex bg-[#5F94F8] hover:bg-[#5F94F8]/85 gap-2"
          >
            <Eye className="w-4 h-4" />
            Access User
          </Button>

          {/* Location Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="hidden md:inline-flex ">
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
          <div className="inline-flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full p-2">
            <Users className="h-5 w-5" onClick={()=>router.push('/users')}/>
          </div>

          {/* User Avatar */}
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={
                        user.picture ||
                        `https://avatar.vercel.sh/${user.name}.png`
                      }
                    />
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer w-fit"
                  >
                    <LogOut />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Avatar
              onClick={() => router.push("/sign-in")}
              className="cursor-pointer"
            >
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
      <AccessUserPopup open={open} onOpenChange={setOpen} />
    </header>
  );
}
