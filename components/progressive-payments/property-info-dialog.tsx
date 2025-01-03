"use client";

import * as React from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const schema = z.object({
  totalCommission: z.string().min(1, "Total Commission is required"),
  expectedSettledDate: z.string().optional(),
});

export function PropertyInfoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [formData, setFormData] = useState({ totalCommission: "", expectedSettledDate: "2024-12-16" });
  const [errors, setErrors] = useState<{ totalCommission?: string }>({});

  const handleSave = () => {
    try {
      schema.parse(formData);
      toast.success("Property info saved");
      onOpenChange(false);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.flatten().fieldErrors;
        setErrors({ totalCommission: fieldErrors.totalCommission?.[0] });
      }
    }
  };

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
            <Input
              type="text"
              value={formData.totalCommission}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only numeric values in the format 12345.12
                // Prevent the input from being cleared completely
                if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
                  setFormData({ ...formData, totalCommission: value });
                }
              }}
              placeholder="$"
            />
            {errors.totalCommission && <p className="text-red-500">{errors.totalCommission}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Expected Settled Date</label>
            <Input
              type="date"
              value={formData.expectedSettledDate}
              onChange={(e) => setFormData({ ...formData, expectedSettledDate: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
