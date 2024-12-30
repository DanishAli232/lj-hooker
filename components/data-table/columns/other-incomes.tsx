import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { OtherIncomes } from "@/types/other-incomes"; // Updated import
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      cell: ({ row }) => {
        const salesperson = row.getValue("salesperson") as string
        return (
          <div className="flex items-center gap-2 w-[200px]">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={`https://avatar.vercel.sh/${salesperson}.png`}
                alt={salesperson}
              />
              <AvatarFallback>{salesperson.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="truncate">{salesperson}</span>
          </div>
        )
      },
      enableSorting: false,
      enableHiding: false,
    }
  ];
}
