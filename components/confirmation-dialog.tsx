"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmationDialog({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[400px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Confirmation
          </DialogTitle>
        </DialogHeader>
        <div className="pb-3">
          <p className="text-sm w-max font-medium">
            Are You Sure You Want To Make Adjustments?
          </p>
        </div>
        <div className="flex gap-4 ">
          <Button variant="outline" className="w-1/2" onClick={onCancel}>
            No
          </Button>
          <Button
            className="w-1/2 bg-[#3CB179] hover:bg-[#2f8b5f]"
            onClick={onConfirm}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
