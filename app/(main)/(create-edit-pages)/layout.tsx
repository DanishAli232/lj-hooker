import CommonToolbar from "@/components/data-table/toolbars/common-toolbar";
import Stats from "@/components/stats";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    
  return (
    <div className={"flex flex-col gap-5"}>
      <CommonToolbar />
      <Stats /> {children}
    </div>
  );
}
