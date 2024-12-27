"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function ProgressivePaymentToolbar({
  setAddPayment,
}: {
  setAddPayment: (open: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold flex items-center">
        Progressive Payments
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              className="w-[400px] pl-8"
            />
          </div>
          <Button
            className=" gap-2"
            onClick={() => {
              setAddPayment(true);
            }}
          >
            Search
          </Button>
        </div>
        <Button
          className=" gap-2"
          onClick={() => {
            setAddPayment(true);
          }}
        >
          <Plus className="h-4 w-4" /> Add Payment
        </Button>
      </div>
    </div>
  );
}
