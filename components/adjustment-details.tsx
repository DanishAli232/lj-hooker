"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

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

const adjustmentSchema = z.object({
  reason: z.string().min(1, "Please select a reason for adjustment"),
  details: z.string(),
  totalIncome: z.string().optional(),
  franchise: z.string().optional(),
});

type AdjustmentFormValues = z.infer<typeof adjustmentSchema>;

export function AdjustmentDetails({
  open,
  onOpenChange,
  onSubmit: propOnSubmit,
  onCancel,
}: AdjustmentDetailsProps) {
  const form = useForm<AdjustmentFormValues>({
    resolver: zodResolver(adjustmentSchema),
    defaultValues: {
      reason: "",
      details: "",
      totalIncome: "",
      franchise: "",
    },
  });

  const selectedReason = form.watch("reason");

  function onSubmit(data: AdjustmentFormValues) {
    console.log(data);
    propOnSubmit({ reason: data.reason, details: data.details });
    toast.success("Adjustment details submitted successfully.");
    form.reset();
    onOpenChange(false);
  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-foreground">Reason for Adjustment</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {adjustmentValues.map((item, i) => (
                        <SelectItem value={item.value} key={i}>
                          {item.content}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedReason === "AddProperty" ? (
              <FormField
                control={form.control}
                name="franchise"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground">Franchises</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Franchise" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent></SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              (selectedReason === "CategoryOneRemoval" ||
                selectedReason === "CategoryOneAddition" ||
                selectedReason === "CategoryTwoAddition" ||
                selectedReason === "CategorytwoRemoval") && (
                <FormField
                  control={form.control}
                  name="totalIncome"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">Total Income</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="$-23,000"
                          className="resize-none"
                          disabled={
                            selectedReason === "CategoryOneRemoval" ||
                            selectedReason === "CategoryOneAddition"
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            )}

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-foreground">Additional Details</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter Details"
                      className="min-h-[120px] resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 justify-end pt-2">
              <Button type="button" variant="outline" onClick={() => { onCancel(); onOpenChange(false); }}>
                Cancel
              </Button>
              <Button type="submit" className="bg-[#3CB179] hover:bg-[#2f8b5f]">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
