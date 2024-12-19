"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ReferralToolbar() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        Referrals
      </h1>
      <Button className="bg-green-600 hover:bg-green-700">
        <Plus className="mr-2 h-4 w-4" /> Add New
      </Button>
    </div>
  );
}
