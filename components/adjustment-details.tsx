"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

interface AdjustmentDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { reason: string; details: string }) => void;
  onCancel: () => void;
}

const adjustmentValues = [
  { value: "AddProperty", content: "Add a Property" },
  { value: "CategoryOneRemoval", content: "Adjustment - Category One Removal" },
  {
    value: "CategoryOneAddition",
    content: "Adjustment - Category One Addition",
  },
  {
    value: "CategoryTwoAddition",
    content: "Adjustment - Category Two Addition",
  },
  { value: "CategoryTwoRemoval", content: "Adjustment - Category Two Removal" },
];

export function AdjustmentDetails({
  open,
  onOpenChange,
  onSubmit,
  onCancel,
}: AdjustmentDetailsProps) {
  const [reason, setReason] = React.useState("");
  const [details, setDetails] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ reason, details });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Details of Adjustments
          </DialogTitle>
          <p className="text-base text-muted-foreground">
            All the other income details here
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Reason for Adjustment</label>
            <Select value={reason} onValueChange={setReason}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {adjustmentValues.map((item, i) => (
                  <SelectItem value={item.value} key={i}>
                    {item.content}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {reason === "AddProperty" ? (
            <div className="space-y-2">
              <label className="text-sm font-medium">Franchises</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Franchise" />
                </SelectTrigger>
                <SelectContent></SelectContent>
              </Select>
            </div>
          ) : (
            (reason === "CategoryOneRemoval" ||
              reason === "CategoryOneAddition" ||
              reason === "CategoryTwoAddition" ||
              reason === "CategorytwoRemoval") && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Total Income</label>
                <Input
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="$-23,000"
                  className="resize-none"
                  disabled={
                    reason === "CategoryOneRemoval" ||
                    reason === "CategoryOneAddition"
                  }
                />
              </div>
            )
          )}
          <div className="space-y-2">
            <label className="text-sm font-medium">Additional Details</label>
            <Textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter Details"
              className="min-h-[120px] resize-none"
            />
          </div>
          <div className="flex gap-4 justify-end pt-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" className="bg-[#3CB179] hover:bg-[#2f8b5f]">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
