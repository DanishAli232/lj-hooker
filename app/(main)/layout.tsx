import Navbar from "@/components/header";
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex flex-col"}>
      <Toaster
        position="top-center"
        richColors
        duration={3000}
      />
      <Navbar />
      <main className="flex flex-col gap-4 p-6 ">{children}</main>
    </div>
  );
}
