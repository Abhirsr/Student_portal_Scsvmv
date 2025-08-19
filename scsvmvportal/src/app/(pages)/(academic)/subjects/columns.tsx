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
    header: "Semester",
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
        >
          Email
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "credit",
    header: "Credits",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const subject = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <FiMoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(subject.description)}
            >
              Copy Subject Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
