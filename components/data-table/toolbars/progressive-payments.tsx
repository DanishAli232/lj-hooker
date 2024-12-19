"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export function ProgressivePaymentToolbar() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold flex items-center">
        Progressive Payments
      </h1>
      <div className="flex flex-row items-center gap-2">
        <Input type="text" placeholder="🔎 Search..." className="w-[400px]" />
        <Button className="bg-[#3D9D6F] hover:bg-[#3D9D6F]/85 gap-2">
          <Plus className="h-4 w-4" /> Add Payment
        </Button>
      </div>
    </div>
  );
}
