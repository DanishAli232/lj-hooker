"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { Type1 } from "@/types/type1";
import { Badge } from "@/components/ui/badge";
import { Table1Actions } from "../actions/table1";

export function type1Columns(): ColumnDef<Type1>[] {
  return [
    {
      accessorKey: "date",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
      cell: ({ row }) => (
        <div className="text-ellipsis text-left overflow-hidden whitespace-nowrap">
          {row.getValue("date")}
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
          <Badge
            variant={
              row.getValue("status") === "Pending" ? "destructive" : "outline"
            }
            className={
              row.getValue("status") === "Pending"
                ? "bg-red-100 text-red-800 hover:bg-red-100"
                : "bg-green-100 text-green-800 hover:bg-green-100"
            }
          >
            {row.getValue("status")}
          </Badge>
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: "income",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Income" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("income")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "lateFee",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Late Fee" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {typeof row.getValue("lateFee") === "number"
            ? `$${row.getValue("lateFee")}`
            : row.getValue("lateFee")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "office",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Office" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("office")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "submitted",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Submitted" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("submitted")}
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
          <Table1Actions row={row} />
        </div>
      ),
    },
  ];
}
