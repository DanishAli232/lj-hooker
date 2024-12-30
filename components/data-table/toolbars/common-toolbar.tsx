"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { AdjustmentDetails } from "@/components/adjustment-details";
import { useState } from "react";

const CommonToolbar = () => {
  const [date] = React.useState<Date>(new Date());
  const edit = false;
  const [open, setOpen] = React.useState(false);
  const [adjustmentDetail, setAdjustmentDetail] = useState(false);

  const handleSubmit = (data: { reason: string; details: string }) => {
    console.log("Submitted:", data);
    setAdjustmentDetail(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed!");
    setOpen(false);
    setAdjustmentDetail(true);
  };

  const handleCancel = () => {
    console.log("Cancelled!");
    setOpen(false);
    setAdjustmentDetail(false);
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          LJ Hooker Coomera
        </h1>
      </div>
      <div className="flex flex-row items-center gap-2">
        {edit && (
          <div className="inline-flex items-center gap-2 rounded-sm bg-white px-3 py-2 text-sm shadow-sm border">
            <Checkbox checked={true} className="h-4 w-4 text-green-500 " />
            <span>
              Return Submitted on{" "}
              <span className="font-medium">03/12/2024</span>
            </span>
          </div>
        )}

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-max justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? (
                format(new Date(date), "MMM dd, yyyy")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
        </Popover>

        <Button className="" disabled={edit}>
          Save & Exit
        </Button>
        {edit && (
          <Button className="" onClick={() => setOpen(true)}>
            Request Adjustment
          </Button>
        )}
      </div>
      <ConfirmationDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <AdjustmentDetails
        open={adjustmentDetail}
        onOpenChange={setAdjustmentDetail}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CommonToolbar;
