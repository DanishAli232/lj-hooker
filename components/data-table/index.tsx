import * as React from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./data-table-pagination";
import DataTableSkeleton from "@/components/ui/data-table-skelton";
import { DataTableProps } from "@/hooks/schema/data-table";
import { CommonDataTableToolbar } from "./toolbars/common-data-table-toolbar";

export function DataTable<TData, TValue>({
  columns,
  data,
  onGlobalFilterChange,
  onPageChange,
  onPageSizeChange,
  pageSize,
  currentPage,
  loading,
  error,
  rowCount,
  pagination,
  toolbar,
  handleRowClick,
  edit,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  React.useEffect(() => {
    table.setPageSize(pageSize);
  }, [pageSize, table]);

  React.useEffect(() => {
    table.setPageIndex(currentPage);
  }, [currentPage, table]);

  const handleRefresh = () => {
    onGlobalFilterChange("");
  };

  return (
    <div className="space-y-4 overflow-y-auto">
      {pagination &&
        toolbar &&
        React.cloneElement(toolbar, {
          table,
          handleGlobalFilterChange: onGlobalFilterChange,
          onRefresh: handleRefresh,
        })}
      {!pagination && toolbar && (
        <CommonDataTableToolbar
          table={table}
          onRefresh={handleRefresh}
          handleGlobalFilterChange={onGlobalFilterChange}
        />
      )}

      {error && <div className="text-red-500">{error}</div>}
      <div className="rounded-md border p-2">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={`text-md font-medium ${
                      edit ? "text-[#B7B7B7]" : "text-muted-foreground"
                    }`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <DataTableSkeleton />
              </TableRow>
            ) : table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-4"
                >
                  <h1 className="text-[18px] font-medium my-[20px]">
                    {"No records found"}
                  </h1>
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  onClick={() => {
                    handleRowClick?.(row?.original);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`py-3 text-xs ${edit ? "text-[#B7B7B7]" : ""}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && (
        <DataTablePagination
          table={table}
          pageSizeOptions={[10, 20, 30, 40, 50, 100]}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          pageIndex={currentPage}
          pageSize={pageSize}
          rowCount={rowCount}
        />
      )}
    </div>
  );
}
