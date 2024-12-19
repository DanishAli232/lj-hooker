"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export function Table1Toolbar() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        LJ Hooker Coomera
      </h1>
      <Link href="/sales-and-leases">
        <Button className="bg-[#3D9D6F] hover:bg-[#3D9D6F]/85 gap-2">
          <Plus className=" h-4 w-4" /> Create New
        </Button>
      </Link>
    </div>
  );
}
