import Navbar from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex flex-col"}>
      <Navbar />
      <main className="flex flex-col gap-4 p-6 ">{children}</main>
    </div>
  );
}
