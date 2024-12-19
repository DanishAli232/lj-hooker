import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export const TabsPages = ({ type }: { type: string }) => {
  const router = useRouter();
  return (
    <Tabs defaultValue={type} className="w-[400px] ">
      <TabsList className="">
        <TabsTrigger
          value="salesAndLeases"
          onClick={() => router.push("/sales-and-leases")}
        >
          Sales & Leases
        </TabsTrigger>
        <TabsTrigger
          value="referrals"
          onClick={() => router.push("/referrals")}
        >
          Referrals
        </TabsTrigger>
        <TabsTrigger
          value="salesPersonStats"
          onClick={() => router.push("/salesperson-stats")}
        >
          Sales Person Stats
        </TabsTrigger>
        <TabsTrigger
          value="pimStatistics"
          onClick={() => router.push("/pim-statistics")}
        >
          PIM Statistics
        </TabsTrigger>
        <TabsTrigger
          value="otherIncomes"
          onClick={() => router.push("/other-incomes")}
        >
          Other Incomes
        </TabsTrigger>
        <TabsTrigger
          value="progressivePayments"
          onClick={() => router.push("/progressive-payments")}
        >
          Progressive Payments
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
