"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  DollarSign,
  Home,
  Share,
  Settings,
  MoreHorizontal,
  Laptop,
  Building,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  variant:
    | "status"
    | "leases"
    | "sales"
    | "insurance"
    | "pm"
    | "office"
    | "other"
    | "technology";
  icon: React.ReactNode;
}

const Stats = () => {
  const stats = [
    {
      title: "Status",
      value: "Sent",
      variant: "status",
      icon: <CheckCircle className="w-3 h-3 text-gray-500" />,
    },
    {
      title: "Sales",
      value: "45,231",
      variant: "sales",
      icon: <DollarSign className="w-3 h-3 text-gray-500" />,
    },
    {
      title: "Leases",
      value: "45,231",
      variant: "leases",
      icon: <Home className="w-3 h-3 text-gray-500" />,
    },
    {
      title: "Referrals",
      value: "45,231",
      variant: "referrals",
      icon: <Share className="w-3 h-3 text-gray-500" />,
    },
    {
      title: "PM",
      value: "45,231",
      variant: "pm",
      icon: <Settings className="w-3 h-3 text-gray-500" />,
    },
    {
      title: "Other",
      value: "45,231",
      variant: "other",
      icon: <MoreHorizontal className="w-3 h-3 text-gray-500" />,
    },
    {
      title: "Technology Fee",
      value: "45,231",
      variant: "technology",
      icon: <Laptop className="w-3 h-3 text-gray-500" />,
    },
    {
      title: "Office 365",
      value: "45,231",
      variant: "office",
      icon: <Building className="w-3 h-3 text-gray-500" />,
    },
  ];

  const [statsValues] = useState<StatCardProps[]>(stats as StatCardProps[]);

  const bgColor = (variant: StatCardProps["variant"]) => {
    return {
      status: "bg-red-50",
      leases: "bg-blue-50",
      sales: "bg-green-50",
      insurance: "bg-red-50",
      pm: "bg-purple-50",
      office: "bg-indigo-50",
      other: "bg-gray-50",
      technology: "bg-sky-50",
    }[variant];
  };

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {statsValues.map((stat, i) => (
          <div key={i} className={`rounded-lg p-4 ${bgColor(stat.variant)}`}>
            <div className="flex flex-col ">
              <span className="text-sm font-medium text-black-500 flex flex-row gap-1 items-center">
                {stat.icon}
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
