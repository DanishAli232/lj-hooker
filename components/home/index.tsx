"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { Type1 } from "@/types/type1";
import { type1Columns } from "../data-table/columns/table1";
import { Table1Toolbar } from "../data-table/toolbars/table1";

const transactions = [
  {
    id: 1,
    date: "24/12/2024",
    status: "Pending",
    income: 316.0,
    lateFee: 0.0,
    office: "LJ Hooker Coomera",
    submitted: "24/12/2024",
  },
  {
    id: 2,
    date: "24/12/2024",
    status: "Pending",
    income: 316.0,
    lateFee: 0.0,
    office: "LJ Hooker Coomera",
    submitted: "24/12/2024",
  },
  {
    id: 3,
    date: "24/12/2024",
    status: "Sent",
    income: 316.0,
    lateFee: 0.0,
    office: "LJ Hooker Coomera",
    submitted: "24/12/2024",
  },
];

export const HomePage = () => {
  const [data] = useState<Type1[]>(transactions);
  const [error] = useState<any>(null);
  const [isLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="w-full">
      <div className="">
        <Card className="border-none p-0 shadow-none">
          <CardContent className="p-0">
            <DataTable
              data={data || []}
              columns={type1Columns()}
              toolbar={<Table1Toolbar />}
              loading={isLoading}
              error={error}
              rowCount={data?.length || 0}
              type="analysis"
              onGlobalFilterChange={() => {}}
              onPageChange={handlePageChange}
              onPageSizeChange={() => {}}
              pageSize={pageSize}
              currentPage={currentPage}
              pagination={true}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
