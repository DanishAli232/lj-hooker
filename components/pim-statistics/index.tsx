"use client";
import { Input } from "@/components/ui/input";
import { TabsPages } from "../tabs";
import CommonToolbar from "../data-table/toolbars/common-toolbar";
import Stats from "../stats";

export default function PimStatisticsPage() {
  return (
    <div className="flex flex-col gap-5">
      <CommonToolbar />
      <Stats />
      <TabsPages type={"otherIncomes"} />
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
        PIM Statistics
      </h2>{" "}
      {/* Comp 1 */}
      <div className="flex gap-4 ">
        <div className="w-1/2 p-4 border rounded-lg relative ">
          <h2 className="text-xl font-semibold mb-4 absolute top-[-16px] left-[11px] bg-[white] w-max  ">
            Income
          </h2>
          <div className="space-y-4 mt-2">
            <div className="flex justify-between items-center">
              <span>Management Income</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Leasing & Letting Income</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Strata Income</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Administration</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Other Income</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Total</span>
              <Input className="w-48 bg-gray-100" disabled />
            </div>
          </div>
        </div>

        <div className="w-1/2 p-4 border rounded-lg relative">
          <h2 className="text-xl font-semibold mb-4 absolute top-[-16px] left-[11px] bg-[white] w-max">
            Strata
          </h2>
          <div className="space-y-4 mt-2">
            <div className="flex justify-between items-center">
              <span>Total Strata</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>New Strata Plans</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Lost Strata Plans</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Monthly Average</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Average Management fee %</span>
              <Input className="w-48" />
            </div>
            <div className="flex justify-between items-center">
              <span>Average rent per week</span>
              <Input className="w-48" />
            </div>
          </div>
        </div>
      </div>
      {/* Comp 2 */}
      <div className="w-full border border-dotted border-blue-300 p-6 relative">
        <h2 className="text-lg font-semibold mb-4 absolute top-[-16px] left-[11px] bg-[white] w-max  ">
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
          <Input />
          <Input />

          <div>Lost Managements</div>
          <Input />
          <Input />

          <div>Total Managements</div>
          <Input value="562" readOnly className="bg-gray-100" />
          <Input value="0" readOnly className="bg-gray-100" />

          <div>Current Occupied</div>
          <Input />
          <Input />

          <div>Current Vacant</div>
          <Input value="562" readOnly className="bg-gray-100" />
          <Input value="0" readOnly className="bg-gray-100" />

          <div>Management Leased</div>
          <Input />
          <Input />

          <div>Casual Leased</div>
          <Input />
          <Input />
        </div>

        <div className="text-red-500 text-sm mt-6 text-center">
          All Values Must be Exclusive of GST
        </div>
      </div>
    </div>
  );
}
