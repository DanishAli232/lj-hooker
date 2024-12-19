"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CommonToolbar = () => {
  const [date] = React.useState<Date>(new Date());

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          LJ Hooker Coomera
        </h1>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-max justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(new Date(date), "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            {/* <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            /> */}
          </PopoverContent>
        </Popover>
        <Button className="bg-[#3D9D6F] hover:bg-[#3D9D6F]/85">
          Save & Exit
        </Button>
      </div>
    </div>
  );
};

export default CommonToolbar;
