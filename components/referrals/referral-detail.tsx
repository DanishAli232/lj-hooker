"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function ReferralDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [salespeople] = React.useState([
    { id: 1, percentage: "60%" },
    { id: 2, percentage: "20%" },
    { id: 3, percentage: "10%" },
    { id: 4, percentage: "10%" },
  ]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Referral Details</DialogTitle>
          <p className="text-sm text-muted-foreground">
            All the referral details here
          </p>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <Input type="date" defaultValue="2024-12-16" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type1">Type 1</SelectItem>
                  <SelectItem value="type2">Type 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Property Address</label>
            <Input placeholder="Enter Address" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Sale Price ($)</label>
              <Input placeholder="Enter Amount" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Referral Amount ($)</label>
              <Input defaultValue="$ 0.00" readOnly />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Referral Rate (%)</label>
            <Input defaultValue="$ 0.00" />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Salesperson Split</h3>
              <p className="text-sm text-muted-foreground">
                Percentage of amount split
              </p>
            </div>

            <div className="space-y-2">
              {salespeople.map((person) => (
                <div
                  key={person.id}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
                >
                  <span className="text-sm font-medium">{person.id}</span>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="person1">Person 1</SelectItem>
                      <SelectItem value="person2">Person 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input value={person.percentage} className="w-20" readOnly />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-red-500">
            <AlertCircle className="h-4 w-4" />
            <p>Referral cannot be saved unless salesperson split is 100%</p>
          </div>

          <div className="flex justify-end gap-4">
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
