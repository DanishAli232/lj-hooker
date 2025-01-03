"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { Referrals } from "@/types/referrals";
import { TabsPages } from "../tabs";
import { referralsColumns } from "../data-table/columns/referrals";
import { ReferralToolbar } from "../data-table/toolbars/referrals";
import { ReferralDialog } from "./referral-detail";

const referralsData: Referrals[] = [
  {
    date: "2023-01-01",
    type: "Seller",
    property_address: "123 Main St",
    sale_price: 500000,
    amount: 250000,
    rate: 5,
    salesperson: "John Doe",
  },
  {
    date: "2023-02-01",
    type: "Seller",
    property_address: "456 Elm St",
    sale_price: 1000000,
    amount: 500000,
    rate: 5,
    salesperson: "Jane Smith",
  },
  {
    date: "2023-03-01",
    type: "Buyer",
    property_address: "789 Oak St",
    sale_price: 750000,
    amount: 375000,
    rate: 5,
    salesperson: "Bob Johnson",
  },
];

export const ReferralsPage = () => {
  const [data] = useState<Referrals[]>(referralsData);
  const [error] = useState<any>(null);
  const [isLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);
  const [open, setOpen] = useState(false);
  const [edit] = useState(true);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handleAddNew = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <TabsPages type={"referrals"} />
      <div className="">
        <Card className="border-none p-0 shadow-none">
          <CardContent className="p-0">
            <DataTable
              data={data || []}
              columns={referralsColumns()}
              toolbar={<ReferralToolbar handleAddNew={handleAddNew} />}
              loading={isLoading}
              error={error}
              rowCount={data?.length || 0}
              type="referrals"
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
      <ReferralDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};
