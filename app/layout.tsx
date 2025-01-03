import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserProvider } from "@auth0/nextjs-auth0/client";

// Import the monospace font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LJ Hooker",
  description: "LJ Hooker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
    <TooltipProvider>
      <html lang="en">
        <body className={cn("bg-background", inter.className)}>
          {children}
        </body>
      </html>
    </TooltipProvider>
    </UserProvider>
  );
}
