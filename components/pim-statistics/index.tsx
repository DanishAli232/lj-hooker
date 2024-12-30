"use client";
import { Input } from "@/components/ui/input";
import { TabsPages } from "../tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const pimStatisticsSchema = z.object({
  // Income section
  managementIncome: z.string().min(1, "Management Income is required"),
  leasingIncome: z.string().min(1, "Leasing & Letting Income is required"),
  strataIncome: z.string().min(1, "Strata Income is required"),
  administration: z.string().min(1, "Administration is required"),
  otherIncome: z.string().min(1, "Other Income is required"),
  
  // Strata section
  totalStrata: z.string().min(1, "Total Strata is required"),
  newStrataPlans: z.string().min(1, "New Strata Plans is required"),
  lostStrataPlans: z.string().min(1, "Lost Strata Plans is required"),
  
  // Monthly Average section
  monthlyAverage: z.string().min(1, "Monthly Average is required"),
  averageManagementFee: z.string().min(1, "Average Management fee is required"),
  averageRentPerWeek: z.string().min(1, "Average rent per week is required"),
  
  // Properties Managed section
  newManagementsPermanent: z.string().min(1, "New Managements Permanent is required"),
  newManagementsHoliday: z.string().min(1, "New Managements Holiday is required"),
  lostManagementsPermanent: z.string().min(1, "Lost Managements Permanent is required"),
  lostManagementsHoliday: z.string().min(1, "Lost Managements Holiday is required"),
  currentOccupiedPermanent: z.string().min(1, "Current Occupied Permanent is required"),
  currentOccupiedHoliday: z.string().min(1, "Current Occupied Holiday is required"),
  managementLeasedPermanent: z.string().min(1, "Management Leased Permanent is required"),
  managementLeasedHoliday: z.string().min(1, "Management Leased Holiday is required"),
  casualLeasedPermanent: z.string().min(1, "Casual Leased Permanent is required"),
  casualLeasedHoliday: z.string().min(1, "Casual Leased Holiday is required"),
});

type PimStatisticsFormValues = z.infer<typeof pimStatisticsSchema>;

export default function PimStatisticsPage() {
  const form = useForm<PimStatisticsFormValues>({
    resolver: zodResolver(pimStatisticsSchema),
    defaultValues: {
      managementIncome: "",
      leasingIncome: "",
      strataIncome: "",
      administration: "",
      otherIncome: "",
      totalStrata: "",
      newStrataPlans: "",
      lostStrataPlans: "",
      monthlyAverage: "",
      averageManagementFee: "",
      averageRentPerWeek: "",
      newManagementsPermanent: "",
      newManagementsHoliday: "",
      lostManagementsPermanent: "",
      lostManagementsHoliday: "",
      currentOccupiedPermanent: "",
      currentOccupiedHoliday: "",
      managementLeasedPermanent: "",
      managementLeasedHoliday: "",
      casualLeasedPermanent: "",
      casualLeasedHoliday: "",
    },
  });

  function onSubmit(data: PimStatisticsFormValues) {
    console.log(data);
    toast.success("PIM Statistics saved successfully.");
    form.reset();
  }

  return (
    <div className="flex flex-col gap-5">
      <TabsPages type={"pimStatistics"} />
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
        PIM Statistics
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Comp 1 */}
          <div className="flex gap-2">
            <div className="w-1/2 p-4 border rounded-lg relative">
              <h2 className="text-xl font-semibold mb-4 absolute top-[-16px] left-[11px] bg-[white] w-max">
                Income
              </h2>
              <div className="space-y-4 mt-2">
                <FormField
                  control={form.control}
                  name="managementIncome"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <span>Management Income</span>
                        <div className="w-48">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="leasingIncome"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <span>Leasing & Letting Income</span>
                        <div className="w-48">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="strataIncome"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <span>Strata Income</span>
                        <div className="w-48">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="administration"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <span>Administration</span>
                        <div className="w-48">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="otherIncome"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <span>Other Income</span>
                        <div className="w-48">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <div className="flex justify-between items-center">
                  <span>Total</span>
                  <Input className="w-48 bg-gray-100" disabled />
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-col w-1/2">
              <div className="p-4 border rounded-lg relative">
                <h2 className="text-xl font-semibold mb-4 absolute top-[-16px] left-[11px] bg-[white] w-max">
                  Strata
                </h2>
                <div className="space-y-4 mt-2">
                  <FormField
                    control={form.control}
                    name="totalStrata"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <span>Total Strata</span>
                          <div className="w-48">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newStrataPlans"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <span>New Strata Plans</span>
                          <div className="w-48">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lostStrataPlans"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <span>Lost Strata Plans</span>
                          <div className="w-48">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4 border rounded-lg relative">
            <h2 className="text-xl font-semibold mb-4 absolute top-[-16px] left-[11px] bg-[white] w-max">
              Monthly Average
            </h2>
            <div className="space-y-4 mt-2">
              <FormField
                control={form.control}
                name="monthlyAverage"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <span>Monthly Average</span>
                      <div className="w-48">
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="averageManagementFee"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <span>Average Management fee %</span>
                      <div className="w-48">
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="averageRentPerWeek"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <span>Average rent per week</span>
                      <div className="w-48">
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Comp 2 */}
          <div className="w-full border border-dotted border-blue-300 p-6 relative">
            <h2 className="text-lg font-semibold mb-4 absolute top-[-16px] left-[11px] bg-[white] w-max">
              Properties Managed
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,1fr] gap-4">
              <div></div>
              <div className="font-medium text-center">Permanent</div>
              <div className="font-medium text-center">Holiday</div>

              <div>Properties Managed BF</div>
              <Input value="562" readOnly className="bg-gray-100" />
              <Input value="0" readOnly className="bg-gray-100" />

              <div>New Managements</div>
              <FormField
                control={form.control}
                name="newManagementsPermanent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newManagementsHoliday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>Lost Managements</div>
              <FormField
                control={form.control}
                name="lostManagementsPermanent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lostManagementsHoliday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>Total Managements</div>
              <Input value="562" readOnly className="bg-gray-100" />
              <Input value="0" readOnly className="bg-gray-100" />

              <div>Current Occupied</div>
              <FormField
                control={form.control}
                name="currentOccupiedPermanent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentOccupiedHoliday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>Current Vacant</div>
              <Input value="562" readOnly className="bg-gray-100" />
              <Input value="0" readOnly className="bg-gray-100" />

              <div>Management Leased</div>
              <FormField
                control={form.control}
                name="managementLeasedPermanent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="managementLeasedHoliday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>Casual Leased</div>
              <FormField
                control={form.control}
                name="casualLeasedPermanent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="casualLeasedHoliday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="text-red-500 text-sm mt-6 text-center">
              All Values Must be Exclusive of GST
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-[#3CB179] hover:bg-[#2f8b5f]">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
