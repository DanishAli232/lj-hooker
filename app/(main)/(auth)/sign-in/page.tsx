"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import loginImage from "@/public/login-image.jpg";
import logo from "@/public/logo.png";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function LoginPage() {
  const { user } = useUser();
  console.log("user was", user);
  return (
    <div className="flex min-h-screen">
      {/* Left side with image */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src={loginImage}
          alt="Modern house with palm trees"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Logo */}
        <div className="absolute left-8 top-8">
          <Link href="/">
            <Image
              src={logo}
              alt=""
              className="h-full w-full"
              width={200}
              height={200}
              priority
              unoptimized={true}
            />{" "}
          </Link>
        </div>

        {/* Testimonial */}
        <div className="absolute bottom-12 left-8 right-8 text-white">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &quot;This library has saved me countless hours of work and helped
              me deliver stunning designs to my clients faster than ever
              before.&quot;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="mx-auto w-full max-w-sm space-y-6 px-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to login
            </p>
          </div>

          {
            user ? (
              <Link href={`/api/auth/logout`}>
                <Button className="w-full">Logout</Button>
              </Link>
            ) : (
              <Link href={`/api/auth/login`}>
                <Button className="w-full">Login with SSO</Button>
              </Link>
            )
          }

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
