"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PropertyInfoDialog({
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
          <DialogTitle>Property Info</DialogTitle>
          <p className="text-sm text-muted-foreground">
            All the other income details here
          </p>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Total Commission (exc GST)
            </label>
            <Input type="date" defaultValue="2024-12-16" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Expected Settled Date</label>
            <Input type="date" defaultValue="2024-12-16" />
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
