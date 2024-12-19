"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Card, CardContent } from "@/components/ui/card";
import CommonToolbar from "../data-table/toolbars/common-toolbar";
import Stats from "../stats";
import { TabsPages } from "../tabs";

import { otherIncomesColumns } from "../data-table/columns/other-incomes";
import { OtherIncomesToolbar } from "../data-table/toolbars/other-incomes";
import { OtherIncomes } from "@/types/other-incomes";

const otherIncomesData: OtherIncomes[] = [
  {
    id: "1",
    date: "20/20/2025",
    fee: 1000,
    salesperson: "John Doe",
    description:
      "Commission from the sale of a residential property located at 123 Main Street, Anytown, CA 91234.  Sale price was $500,000. Commission rate was 2%.",
  },
  {
    id: "2",
    date: "20/20/2025",
    fee: 500,
    salesperson: "Jane Smith",
    description:
      "Rental income received from a property located at 456 Oak Avenue, Anytown, CA 91234.  Monthly rent is $1000.",
  },
  {
    id: "3",
    date: "20/20/2025",
    fee: 2000,
    salesperson: "Bob Johnson",
    description:
      "Commission from property management services provided for a commercial property located at 789 Pine Lane, Anytown, CA 91234.  Management fee is 10% of annual gross income.",
  },
];

export const OtherIncomesPage = () => {
  const [data] = useState<OtherIncomes[]>(otherIncomesData);
  const [error] = useState<any>(null);
  const [isLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="flex flex-col gap-5">
      <CommonToolbar />
      <Stats />
      <TabsPages type={"otherIncomes"} />
      <div className="">
        <Card className="border-none p-0 shadow-none">
          <CardContent className="p-0">
            <DataTable
              data={data || []}
              columns={otherIncomesColumns()}
              toolbar={<OtherIncomesToolbar />}
              loading={isLoading}
              error={error}
              rowCount={data?.length || 0}
              type="otherIncomes"
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
