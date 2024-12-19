import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabsPages = ({ type }: { type: string }) => {
  return (
    <Tabs defaultValue={type} className="w-[400px] mb-4">
      <TabsList className="">
        <TabsTrigger value="salesAndLeases">Sales & Leases</TabsTrigger>
        <TabsTrigger value="referrals">Referrals</TabsTrigger>
        <TabsTrigger value="salesPersonStats">Sales Person Stats</TabsTrigger>
        <TabsTrigger value="pimStatistics">PIM Statistics</TabsTrigger>
        <TabsTrigger value="otherIncomes">Other Incomes</TabsTrigger>
        <TabsTrigger value="progressivePayments">
          Progressive Payments
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account"></TabsContent>
      <TabsContent value="password"></TabsContent>
    </Tabs>
  );
};
