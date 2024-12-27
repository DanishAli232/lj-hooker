"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";

export function ListingInfoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const addresses = Array(8).fill("11 Quigan Terrace, highland Park");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Listing Info</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            {addresses.map((address, index) => (
              <Card key={index} className="text-sm rounded-sm p-2">
                {address}
              </Card>
            ))}
          </div>
          <div className="flex justify-end">
            <Button onClick={() => onOpenChange(false)} className="">
              Okay
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
