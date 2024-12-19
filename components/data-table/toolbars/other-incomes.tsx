"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function OtherIncomesToolbar() {
  return (
    <div className="flex items-center justify-between ">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        Other Incomes
      </h1>
      <Button className="bg-[#3D9D6F] hover:bg-[#3D9D6F]/85 gap-2">
        <Plus className="h-4 w-4" /> Add New
      </Button>
    </div>
  );
}
