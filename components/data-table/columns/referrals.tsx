import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { Referrals } from "@/types/referrals";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function referralsColumns(): ColumnDef<Referrals>[] {
  return [
    {
      accessorKey: "date",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("date")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "type",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Type" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          <Badge
            variant={row.getValue("type") === "Seller" ? "destructive" : "outline"}
            className={
              row.getValue("type") === "Seller"
                ? "bg-[#9EE2FF] text-black hover:bg-[#9EE2FF]/85"
                : "bg-[#FC9EFF] text-black hover:bg-[#FC9EFF]/85"
            }
          >
            {row.getValue("type")}
          </Badge>{" "}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "property_address",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Property Address" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("property_address")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "sale_price",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Sale Price" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          ${row.getValue("sale_price")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          ${row.getValue("amount")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "rate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Rate" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("rate")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "salesperson",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Salesperson" />
      ),
      cell: ({ row }) => {
        const salesperson = row.getValue("salesperson") as { name: string; image: string };
        return (
          <div className="text-left whitespace-nowrap">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={salesperson.image || "https://github.com/shadcn.png"} alt={salesperson.name} />
                  <AvatarFallback>{salesperson.name?.slice(0, 2).toUpperCase() || "UN"}</AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit" side="right">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={salesperson.image || "https://github.com/shadcn.png"} alt={salesperson.name} />
                    <AvatarFallback>{salesperson.name?.slice(0, 2).toUpperCase() || "UN"}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium">{salesperson.name}</span>
                    <span className="left-0 rounded px-2 py-0.5 text-xs font-medium text-primary">
                      60%
                    </span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
  ];
}
