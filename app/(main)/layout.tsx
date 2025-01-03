import Navbar from "@/components/header";
import { Toaster } from "sonner";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <div className={"flex flex-col"}>
        <Toaster
          position="top-center"
          richColors
          duration={3000}
      />
      <Navbar />
        <main className="flex flex-col gap-4 p-6 ">{children}</main>
      </div>
    </UserProvider>
  );
}
