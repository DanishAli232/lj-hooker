"use client";

import React, { useState } from "react";
import Stats from "../stats";
import { TabsPages } from "../tabs";
import { DataTable } from "../data-table";
import { salesAndLeasesColumns } from "../data-table/columns/sales-and-leases";
import { SalesAndLeases } from "@/types/sales-and-leases";
import CommonToolbar from "../data-table/toolbars/common-toolbar";

const SalesAndLeasesPage = () => {
  const propertyData = [
    {
      id: "1",
      type: "For Sale",
      settlement: "24/12/2024",
      status: "Settled",
      address: "Unit 6, Kohl Street, UK",
      progressivePayment: 0,
      amount: 316.0,
      date: "24/12/2024",
    },
    {
      id: "2",
      type: "For Sale",
      settlement: "24/12/2024",
      status: "Unconditional",
      address: "Unit 6, Kohl Street, UK",
      progressivePayment: 0,
      amount: 316.0,
      date: "24/12/2024",
    },
    // Add more rows as needed
  ];
  const [selectedData] = useState<SalesAndLeases[]>(propertyData);
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
      <TabsPages type={"salesAndLeases"} />
      <DataTable
        data={selectedData || []}
        columns={salesAndLeasesColumns()}
        loading={isLoading}
        error={error}
        rowCount={selectedData?.length || 0}
        type="sales"
        onGlobalFilterChange={() => {}}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
        pageSize={0}
        currentPage={0}
        pagination={false}
      />
      <h2 className="text-lg font-semibold">
        Listings Below Are Not Part of Any Franchise
      </h2>{" "}
      <DataTable
        data={selectedData || []}
        columns={salesAndLeasesColumns()}
        loading={isLoading}
        error={error}
        rowCount={selectedData?.length || 0}
        type="sales"
        onGlobalFilterChange={() => {}}
        onPageChange={handlePageChange}
        onPageSizeChange={() => {}}
        pageSize={pageSize}
        currentPage={currentPage}
        pagination={true}
      />
    </div>
  );
};

export default SalesAndLeasesPage;
