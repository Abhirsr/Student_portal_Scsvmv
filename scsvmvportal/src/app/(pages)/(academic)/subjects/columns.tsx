"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Subject = {
  id: string;
  semester: number;
  subjectCode: string;
  description: string;
  credit: string;
};

export const columns: ColumnDef<Subject>[] = [
  {
    accessorKey: "semester",
    header:({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-[16px] font-bold hover:text-[#34495e]"
        >
          Semester
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "subjectCode",
    header: "Subject Code",
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-[16px] font-bold hover:text-[#34495e]"
        >
          Description
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "credit",
    header: "Credits",
  },
 
];
