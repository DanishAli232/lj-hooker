"use client";

import React, { useState } from "react";

interface StatCardProps {
  title: string;
  value: string;
  variant:
    | "leases"
    | "sales"
    | "insurance"
    | "pm"
    | "valuations"
    | "other"
    | "total";
}

const Stats = () => {
  const stats = [
    { title: "Leases", value: "45,231", variant: "leases" },
    { title: "Sales", value: "45,231", variant: "sales" },
    { title: "Insurance", value: "45,231", variant: "insurance" },
    { title: "PM", value: "45,231", variant: "pm" },
    { title: "Valuations", value: "45,231", variant: "valuations" },
    { title: "Other", value: "45,231", variant: "other" },
    { title: "Total", value: "45,231", variant: "total" },
  ];

  const [statsValues] = useState<StatCardProps[]>(stats as StatCardProps[]);

  const bgColor = (variant: StatCardProps["variant"]) => {
    return {
      leases: "bg-blue-50",
      sales: "bg-green-50",
      insurance: "bg-red-50",
      pm: "bg-purple-50",
      valuations: "bg-indigo-50",
      other: "bg-gray-50",
      total: "bg-sky-50",
    }[variant];
  };

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
        {statsValues.map((stat, i) => (
          <div key={i} className={`rounded-lg p-4 ${bgColor(stat.variant)}`}>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-600">
                {stat.title}
              </span>
              <span className="text-2xl font-semibold">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
