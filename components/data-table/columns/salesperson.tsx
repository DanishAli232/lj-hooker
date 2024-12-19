"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { SalesPerson } from "@/types/salesperson";

export function salespersonColumns(): ColumnDef<SalesPerson>[] {
  return [
    {
      accessorKey: "salesperson",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Sales Person" />
      ),
      cell: ({ row }) => (
        <div className="text-ellipsis text-left overflow-hidden whitespace-nowrap ">
          {row.getValue("salesperson")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "units",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Units" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("units")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "commission",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Commission" />
      ),
      cell: ({ row }) => (
        <div className="text-left">{row.getValue("commission")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "appr",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Appraisal" />
      ),
      cell: ({ row }) => (
        <div className="text-left">{row.getValue("appr")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "auction",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Auction" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("auction") ? "Yes" : "No"}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "excl",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Exclusive" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("excl") ? "Yes" : "No"}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "sole",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Sole" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("sole") ? "Yes" : "No"}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "open",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Open" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("open") ? "Yes" : "No"}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "multi",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Multi" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("multi") ? "Yes" : "No"}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "other",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Other" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">
          {row.getValue("other")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "vim",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="VIM" />
      ),
      cell: ({ row }) => (
        <div className="text-left whitespace-nowrap">{row.getValue("vim")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];
}
