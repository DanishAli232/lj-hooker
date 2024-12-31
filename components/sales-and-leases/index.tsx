"use client";

import React, { useEffect, useState } from "react";
import { TabsPages } from "../tabs";
import { DataTable } from "../data-table";
import { salesAndLeasesColumns } from "../data-table/columns/sales-and-leases";
import { SalesAndLeases } from "@/types/sales-and-leases";

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
      type: "For Purchase",
      settlement: "24/12/2024",
      status: "Unconditional",
      address: "Unit 6, Kohl Street, UK",
      progressivePayment: 0,
      amount: 316.0,
      date: "24/12/2024",
    },
    {
      id: "3",
      type: "For Purchase",
      settlement: "24/12/2024",
      status: "Unconditional",
      address: "Unit 6, Kohl Street, UK",
      progressivePayment: 0,
      amount: 316.0,
      date: "24/12/2024",
    },
    // Add more rows as needed
  ];

  const [selectedData, setSelectedData] = useState<SalesAndLeases[]>([]);

  const [notSelectedData, setNotSelectedData] =
    useState<SalesAndLeases[]>(propertyData);
  const [error] = useState<any>(null);
  const [isLoading] = useState(false);
  const [edit] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };
  useEffect(() => {
    console.log("🚀 ~ SalesAndLeasesPage ~ selectedData:", selectedData);
  }, [selectedData]);

  const handleCheckboxChange = (record: SalesAndLeases) => {
    if (selectedData.find((item) => item.id === record.id)) {
      // If already selected, remove it from selectedData and add to notSelectedData
      setSelectedData((prevSelected) =>
        prevSelected.filter((item) => item.id !== record.id)
      );
      setNotSelectedData((prevNotSelected) => [...prevNotSelected, record]);
    } else {
      // If not selected, add it to selectedData and remove from notSelectedData
      setSelectedData((prevSelected) => [...prevSelected, record]);
      setNotSelectedData((prevNotSelected) =>
        prevNotSelected.filter((item) => item.id !== record.id)
      );
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <TabsPages type={"salesAndLeases"} />

      <DataTable
        data={selectedData || []}
        columns={salesAndLeasesColumns(
          edit,
          handleCheckboxChange,
          selectedData
        )}
        loading={isLoading}
        error={error}
        rowCount={selectedData?.length || 0}
        type="sales"
        onGlobalFilterChange={() => {}}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
        pageSize={pageSize}
        currentPage={currentPage}
        pagination={false}
        edit={edit}
      />

      <h2 className="text-lg font-semibold">
        Listings Below Are Not Part of Any Franchise
      </h2>

      <DataTable
        data={notSelectedData || []}
        columns={salesAndLeasesColumns(
          edit,
          handleCheckboxChange,
          selectedData
        )}
        loading={isLoading}
        error={error}
        rowCount={notSelectedData?.length || 0}
        type="sales"
        onGlobalFilterChange={() => {}}
        onPageChange={handlePageChange}
        onPageSizeChange={() => {}}
        pageSize={pageSize}
        currentPage={currentPage}
        pagination={true}
        edit={edit}
      />
      <div className="text-center text-[#ED5E63] text-lg font-semibold">
        <p>All values must be exclusive of GST</p>
      </div>
    </div>
  );
};

export default SalesAndLeasesPage;
