import { type Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
  pageIndex: number;
  pageSize: number;
  onPageChange: (pageIndex: number) => void;
  onPageSizeChange?: (size: number) => void;
  rowCount: number;
}

export function DataTablePagination<TData>({
  pageIndex,
  pageSize,
  onPageChange,
  rowCount,
}: DataTablePaginationProps<TData>) {
  const totalRows = rowCount;
  const pageCount = Math.ceil(totalRows / pageSize);

  return (
    <div className="flex items-center justify-between ">
      <div className="text-sm text-gray-500">
        {" "}
        Page {pageIndex + 1} of {pageCount} row(s) selected.
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            onPageChange(pageIndex - 1);
          }}
          disabled={pageIndex === 0}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            onPageChange(pageCount + 1);
          }}
          disabled={pageIndex >= pageCount - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
