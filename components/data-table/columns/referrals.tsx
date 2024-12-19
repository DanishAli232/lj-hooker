import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { Referrals } from "@/types/referrals";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
            variant={
              row.getValue("type") === "Seller" ? "destructive" : "outline"
            }
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
      cell: ({}) => (
        <div className="text-left whitespace-nowrap">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];
}
