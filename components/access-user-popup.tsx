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

export function AccessUserPopup({
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
          <DialogTitle>Access User</DialogTitle>
          <p className="text-sm text-muted-foreground">
            You can access user account here
          </p>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">User ID</label>
            <Input type="text" placeholder="Enter User ID" />
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button className="">Access</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
