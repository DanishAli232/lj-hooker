import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { OtherIncomes } from "@/types/other-incomes"; // Updated import

export function otherIncomesColumns(): ColumnDef<OtherIncomes>[] {
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
      accessorKey: "description",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Description" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-wrap w-[300px] ">
          {row.getValue("description")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "fee", // Updated accessorKey
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Fee ($)" /> // Updated title
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap w-[150px]">
          ${row.getValue("fee")} {/* Added $ */}
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
      cell: (
        { row } // Added row to access data
      ) => (
        <div className="text-left whitespace-nowrap w-[150px]">
          {row.getValue("salesperson")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];
}
