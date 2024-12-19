import React, { useState } from "react";
import { Ellipsis, Trash2, Loader2, Edit } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Type1 } from "@/types/type1";

interface table1 {
  row: Row<Type1>;
}

export function Table1Actions({ row }: table1) {
  const [loading] = useState(false);

  if (row.original.status === "Sent") {
    return (
      <Button
        variant="outline"
        size="sm"
        className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      >
        Print
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {loading ? (
          <Button variant="ghost" className="flex h-8 w-8 p-0">
            <Loader2 className="h-4 w-4 animate-spin" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <Ellipsis className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem className="items-center cursor-pointer">
          <Edit className="mr-2 h-4 w-4 -mt-[1px]" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center cursor-pointer">
          <Trash2 className="mr-2 h-4 w-4 -mt-[1px]" />
          Remove
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
