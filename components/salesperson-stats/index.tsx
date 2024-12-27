"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { TabsPages } from "../tabs";
import { SalesPerson } from "@/types/salesperson";
import { salespersonColumns } from "../data-table/columns/salesperson";
import { ListingInfoDialog } from "./listing-info-dialog";

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
    vim: "$5.00",
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
    vim: "$5.00",
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
    vim: "$5.00",
  },
];

export const SalesPersonStats = () => {
  const [data] = useState<SalesPerson[]>(salesPersonData);
  const [error] = useState<any>(null);
  const [isLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit] = useState(true);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handleAppraisel = (value: string) => {
    console.log("🚀 ~ handleAppraisel ~ value:", value);
    setOpen(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <TabsPages type={"salesPersonStats"} />
      <h2 className="text-2xl font-bold flex items-center gap-2">
        Salesperson Stats
      </h2>{" "}
      <div className="">
        <Card className="border-none p-0 shadow-none">
          <CardContent className="p-0">
            <DataTable
              data={data || []}
              columns={salespersonColumns(handleAppraisel)}
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
              edit={edit}
            />
          </CardContent>
        </Card>
      </div>
      <ListingInfoDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};
