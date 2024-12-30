"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

const dummyPayments = [
  { id: 1, label: "Payment #1234 - John Doe", value: "payment-1234" },
  { id: 2, label: "Payment #5678 - Jane Smith", value: "payment-5678" },
  { id: 3, label: "Payment #9012 - Bob Johnson", value: "payment-9012" },
  { id: 4, label: "Payment #3456 - Alice Brown", value: "payment-3456" },
  { id: 5, label: "Payment #7890 - Charlie Davis", value: "payment-7890" },
];

export function ProgressivePaymentToolbar({
  setAddPayment,
}: {
  setAddPayment: (open: boolean) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredPayments = dummyPayments.filter((payment) =>
    payment.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFocus = () => {
    setShowSuggestions(true);
    setAddPayment(true);
    
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold flex items-center">
        Progressive Payments
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              className="w-[400px] pl-8"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={handleFocus} 
            />
            {showSuggestions && searchQuery && (
              <div className="absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1">
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((payment) => (
                    <div
                      key={payment.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(payment.label);
                        setShowSuggestions(false);
                      }}
                    >
                      {payment.label}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">No payments found</div>
                )}
              </div>
            )}
          </div>
          {/* <Button
            className="gap-2"
            onClick={() => {
              setAddPayment(true);
            }}
          >
            Search
          </Button> */}
        </div>
        <Button
          className="gap-2"
          onClick={() => {
            // setAddPayment(true);
          }}
        >
          <Plus className="h-4 w-4" /> Add Payment
        </Button>
      </div>
    </div>
  );
}
