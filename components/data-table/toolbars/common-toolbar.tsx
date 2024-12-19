import { Button } from "@/components/ui/button";
import React from "react";

const CommonToolbar = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          LJ Hooker Coomera
        </h1>
        <span className="text-gray-500">Jan 20, 2023</span>
      </div>
      <Button className="bg-green-600 hover:bg-green-700">Save & Exit</Button>
    </div>
  );
};

export default CommonToolbar;
