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
  DialogDescription,
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
import { AlertCircle } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const referralFormSchema = z.object({
  date: z.string().min(1, "Date is required"),
  type: z.string().min(1, "Type is required"),
  propertyAddress: z.string().min(1, "Property address is required"),
  salePrice: z.string()
    .min(1, "Sale price is required")
    .regex(/^\d+(\.\d{1,4})?$/, "Invalid price format"),
  referralRate: z.string()
    .min(1, "Referral rate is required")
    .regex(/^\d+(\.\d{1,4})?$/, "Invalid rate format")
    .refine((val) => parseFloat(val) > 0 && parseFloat(val) <= 100, {
      message: "Rate must be between 0 and 100",
    }),
  salespeople: z.array(z.object({
    id: z.number(),
    person: z.string().min(1, "Salesperson is required"),
    percentage: z.string(),
  })).refine((data) => {
    const total = data.reduce((sum, item) => sum + parseFloat(item.percentage), 0);
    return Math.abs(total - 100) < 0.01;
  }, {
    message: "Total percentage must equal 100%",
  }),
});

type ReferralFormValues = z.infer<typeof referralFormSchema>;

export function ReferralDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const form = useForm<ReferralFormValues>({
    resolver: zodResolver(referralFormSchema),
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      type: "",
      propertyAddress: "",
      salePrice: "",
      referralRate: "",
      salespeople: [
        { id: 1, person: "", percentage: "60" },
        { id: 2, person: "", percentage: "20" },
        { id: 3, person: "", percentage: "10" },
        { id: 4, person: "", percentage: "10" },
      ],
    },
  });

  function onSubmit(data: ReferralFormValues) {
    console.log(data);
    // Handle form submission
    toast.success("Referral details submitted successfully.");
    onOpenChange(false);
  }

  const calculateReferralAmount = () => {
    const salePrice = parseFloat(form.watch("salePrice") || "0");
    const referralRate = parseFloat(form.watch("referralRate") || "0");
    return isNaN(salePrice) || isNaN(referralRate) 
      ? "$ 0.00" 
      : `$ ${((salePrice * referralRate) / 100).toFixed(2)}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-background">
        <DialogHeader className=" top-0 z-50 pb-4">
          <DialogTitle>Referral Details</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            All the referral details here
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="type" className="text-foreground">Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="type1">Type 1</SelectItem>
                        <SelectItem value="type2">Type 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="propertyAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Property Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="salePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Sale Price ($)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter Amount" 
                        {...field} 
                        type="text" 
                        onInput={(e) => {
                          const value = e.currentTarget.value;
                          if (!/^\d*\.?\d{0,4}$/.test(value)) {
                            e.currentTarget.value = value.slice(0, -1);
                          }
                        }} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel className="text-foreground">Referral Amount ($)</FormLabel>
                <FormControl>
                  <Input value={calculateReferralAmount()} readOnly />
                </FormControl>
              </FormItem>
            </div>

            <FormField
              control={form.control}
              name="referralRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Referral Rate (%)</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="text" 
                      onInput={(e) => {
                        const value = e.currentTarget.value;
                        if (!/^\d*\.?\d{0,4}$/.test(value)) {
                          e.currentTarget.value = value.slice(0, -1);
                        }
                      }} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Salesperson Split</h3>
                <p className="text-sm text-muted-foreground">
                  Percentage of amount split
                </p>
              </div>

              <div className="space-y-2">
                {form.watch("salespeople").map((person, index) => (
                  <div
                    key={person.id}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
                  >
                    <span className="text-sm font-medium">{person.id}</span>
                    <FormField
                      control={form.control}
                      name={`salespeople.${index}.person`}
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="person1">Person 1</SelectItem>
                              <SelectItem value="person2">Person 2</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Input
                      value={person.percentage + "%"}
                      className="w-20"
                      readOnly
                    />
                  </div>
                ))}
              </div>
            </div>

            {form.formState.errors.salespeople?.root && (
              <div className="flex items-center gap-2 text-xs text-red-500" role="alert">
                <AlertCircle className="h-4 w-4" />
                <p>{form.formState.errors.salespeople.root.message}</p>
              </div>
            )}

            <div className="sticky bottom-0 bg-background flex justify-end gap-4">
              <Button variant="outline" onClick={() => onOpenChange(false)} type="button">
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

