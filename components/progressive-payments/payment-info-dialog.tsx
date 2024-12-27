"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function PaymentInfoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Payment Info</DialogTitle>
          <p className="text-sm text-muted-foreground">
            All the other income details here
          </p>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Date Paid</label>
            <Input type="date" defaultValue="2024-12-16" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Due Date</label>
            <Input type="date" defaultValue="2024-12-16" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Paid</label>
              <div className="flex items-center space-x-2 py-1 px-2 h-9 border">
                <Checkbox id="paid" />
                <label
                  htmlFor="paid"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Paid
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount ($)</label>
              <Input placeholder="Enter Amount" />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button className="">Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
