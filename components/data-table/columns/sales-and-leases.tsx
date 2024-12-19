import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { SalesAndLeases } from "@/types/sales-and-leases";
import { Checkbox } from "@/components/ui/checkbox";

export function salesAndLeasesColumns(): ColumnDef<SalesAndLeases>[] {
  return [
    {
      accessorKey: "checkbox",
      header: ({}) => (
        <div className="text-center">
          <Checkbox />
        </div>
      ),
      cell: ({}) => (
        <div className="text-center">
          <Checkbox />
        </div>
      ),
      enableSorting: false,
      enableHiding: true,
    },
    {
      accessorKey: "type",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Type" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("type")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "settlement",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Settlement" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("settlement")}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("status")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Address" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("address")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "progressivePayment",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Progressive Payment" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          ${row.getValue("progressivePayment")}
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
  ];
}
