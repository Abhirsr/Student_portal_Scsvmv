"use client";

import { ColumnDef } from "@tanstack/react-table";
import TableButton from "@/components/TableButton";

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
      return <TableButton column={column} />;
    },
  },
  {
    accessorKey: "credit",
    header: "Credits",
  },
];
