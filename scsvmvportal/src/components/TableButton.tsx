import React from "react";
import { Button } from "./ui/button";
import { RiArrowUpDownLine } from "react-icons/ri";

const TableButton = ({ column }: any) => {
  return (
    <div>
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="bg-[#f0f4f8] text-[#34495e] text-[16px] font-bold hover:bg-[#fof4f8]"
      >
        Description
        <RiArrowUpDownLine className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default TableButton;
