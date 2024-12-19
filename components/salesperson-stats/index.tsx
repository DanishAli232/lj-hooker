"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Card, CardContent } from "@/components/ui/card";
import CommonToolbar from "../data-table/toolbars/common-toolbar";
import Stats from "../stats";
import { TabsPages } from "../tabs";
import { SalesPerson } from "@/types/salesperson";
import { salespersonColumns } from "../data-table/columns/salesperson";

const salesPersonData: SalesPerson[] = [
  {
    salesperson: "John Doe",
    units: 0,
    commission: 0,
    appr: 0,
    auction: false,
    excl: false,
    sole: false,
    open: false,
    multi: false,
    other: "",
    vim: "",
  },
  {
    salesperson: "Jane Smith",
    units: 0,
    commission: 0,
    appr: 0,
    auction: false,
    excl: false,
    sole: false,
    open: false,
    multi: false,
    other: "",
    vim: "",
  },
  {
    salesperson: "Bob Johnson",
    units: 0,
    commission: 0,
    appr: 0,
    auction: false,
    excl: false,
    sole: false,
    open: false,
    multi: false,
    other: "",
    vim: "",
  },
];

export const SalesPersonStats = () => {
  const [data] = useState<SalesPerson[]>(salesPersonData);
  const [error] = useState<any>(null);
  const [isLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="w-full">
      <CommonToolbar />
      <Stats />
      <TabsPages type={"salesPersonStats"} />
      <h2 className="text-lg font-semibold mb-4 mt-6">
        Salesperson Stats
      </h2>{" "}
      <div className="">
        <Card className="border-none p-0 shadow-none">
          <CardContent className="p-0">
            <DataTable
              data={data || []}
              columns={salespersonColumns()}
              loading={isLoading}
              error={error}
              rowCount={data?.length || 0}
              type="salesperson"
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
