import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { ProgressivePaymentsSchema } from "@/types/progressive-payments";
import { ProgressivePaymentActions } from "../actions/progressive-payments";

export function progressivePaymentsColumns(): ColumnDef<ProgressivePaymentsSchema>[] {
  return [
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
      accessorKey: "expectedSettlmentDate",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Expected Settlement Date"
        />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("expectedSettlmentDate")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "total_commission",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Total Commission (Ex GST)"
        />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          ${row.getValue("total_commission")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Actions" />
      ),
      cell: ({ row }) => (
        <div className="text-left">
          <ProgressivePaymentActions row={row} />
        </div>
      ),
    },
  ];
}
