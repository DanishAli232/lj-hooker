"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PaymentInfoDialog } from "./payment-info-dialog";
import { useState } from "react";
import { PropertyInfoDialog } from "./property-info-dialog";

export default function PaymentSearchInfo() {
  const [open, setOpen] = useState(false);
  const [propertyInfoDialog, setPropertyInfoDialog] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      {/* Property Info */}
      <div className="border rounded-lg">
        <div className="p-4 pt-5 relative">
          <h2 className="text-xl font-semibold mb-6 absolute top-[-16px] left-[11px] bg-[white] w-max  ">
            Property Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-14 pb-4 ">
            <div>
              <div className="text-sm  font-medium">Address</div>
              <div className="mt-1 text-muted-foreground">
                $31Unit 6, Kohl Street, UK6.00
              </div>
            </div>
            <div>
              <div className="text-sm  font-medium">Total Commission</div>
              <div className="mt-1 text-muted-foreground">$316.00</div>
            </div>
            <div>
              <div className="text-sm  font-medium">Outstanding Amount</div>
              <div className="mt-1 text-muted-foreground">$23.00</div>
            </div>
            <div>
              <div className="text-sm font-medium">Expected Settled Date</div>
              <div className="mt-1 text-muted-foreground">24/12/2024</div>
            </div>
            <div className="text-end">
              <Button
                onClick={() => setPropertyInfoDialog(true)}
                size="sm"
                className="h-8 px-3 mt-4  text-white"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Agents */}
      <div className="border rounded-lg">
        <div className="p-4 pt-5 relative">
          <h2 className="text-xl font-semibold mb-4 absolute top-[-16px] left-[11px] bg-[white] w-max  ">
            Agents
          </h2>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent  border-none">
                <TableHead className="font-medium">Staff Name</TableHead>
                <TableHead className="font-medium">Agent Type</TableHead>
                <TableHead className="font-medium">Award</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-transparent  border-none">
                <TableCell>Abdul Kutcher</TableCell>
                <TableCell>Listing Agent</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow className="hover:bg-transparent border-0  border-none">
                <TableCell>Abdul Kutcher</TableCell>
                <TableCell>Listing Agent</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="">
        <div className="">
          <div className="flex items-center justify-between mb-4">
            <h2 className=" text-xl font-medium">Payment Schedule</h2>
            <Button
              onClick={() => setOpen(true)}
              size="sm"
              className="h-8 px-3  text-white"
            >
              Add
            </Button>
          </div>
          <div className="overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-medium">Paid</TableHead>
                  <TableHead className="font-medium">Date Paid</TableHead>
                  <TableHead className="font-medium">Due Date</TableHead>
                  <TableHead className="font-medium">
                    Commission Amount
                  </TableHead>
                  <TableHead className="font-medium">
                    Outstanding Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-transparent">
                  <TableCell>
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                      Paid
                    </span>
                  </TableCell>
                  <TableCell>24/12/2024</TableCell>
                  <TableCell>24/12/2024</TableCell>
                  <TableCell>$316.00</TableCell>
                  <TableCell>$316.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-red-500">
            All values must be exclusive of GST
          </div>
        </div>
      </div>
      <PaymentInfoDialog open={open} onOpenChange={setOpen} />
      <PropertyInfoDialog
        open={propertyInfoDialog}
        onOpenChange={setPropertyInfoDialog}
      />
    </div>
  );
}
