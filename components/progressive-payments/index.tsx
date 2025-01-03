"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { TabsPages } from "../tabs";

import { ProgressivePaymentsSchema } from "@/types/progressive-payments";
import { progressivePaymentsColumns } from "../data-table/columns/progressive-payments";
import { ProgressivePaymentToolbar } from "../data-table/toolbars/progressive-payments";
import PaymentSearchInfo from "./payment-search-info";

const progressivePaymentsData: ProgressivePaymentsSchema[] = [
  {
    id: "1",
    address: "13123 Main Street, Anytown, CA 91234",
    expectedSettlmentDate: "1/2/2024",
    total_commission: "1000",
  },
  {
    id: "2",
    address: "23123 Main Street, Anytown, CA 91234",
    expectedSettlmentDate: "1/2/2024",
    total_commission: "500",
  },
  {
    id: "3",
    address: "1244 Main Street, Anytown, CA 91234",
    expectedSettlmentDate: "1/2/2024",
    total_commission: "2000",
  },
];

export const ProgressivePaymentsPage = () => {
  const [data] = useState<ProgressivePaymentsSchema[]>(progressivePaymentsData);
  const [error] = useState<any>(null);
  const [isLoading] = useState(false);
  const [addPayment, setAddPayment] = useState(false);
  const [edit] = useState(true);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="flex flex-col gap-5">
      <TabsPages type={"progressivePayments"} />
      <ProgressivePaymentToolbar setAddPayment={setAddPayment} />
      {addPayment ? (
        <PaymentSearchInfo />
      ) : (
        <div className="">
          <Card className="border-none p-0 shadow-none">
            <CardContent className="p-0">
              <DataTable
                data={data || []}
                columns={progressivePaymentsColumns()}
                loading={isLoading}
                error={error}
                rowCount={data?.length || 0}
                type="progressivePayments"
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
      )}
    </div>
  );
};
