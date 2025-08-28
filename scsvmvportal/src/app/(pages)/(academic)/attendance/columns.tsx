"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Attendance = {
  subjectCode: string;
  subjectDescription: string;
  totalHours: number;
  presentHours: number;
  absentHours: number;
  attendance: string;
};

export type cummulativeAttendance = {
  monthYear: string;
  ml: number;
  od: number;
};

export const attendanceColumns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "subjectCode",
    header: "Subject Code",
  },
  {
    accessorKey: "subjectDescription",
    header: "Subject Description",
  },
  {
    accessorKey: "totalHours",
    header: "Total Hours",
  },
  {
    accessorKey: "presentHours",
    header: "Present Hours",
  },
  {
    accessorKey: "absentHours",
    header: "Absent Hours",
  },
  {
    accessorKey: "attendance",
    header: "Attendance",
  },
];

export const cummulativeColumns: ColumnDef<cummulativeAttendance>[] = [
  {
    accessorKey: "monthYear",
    header: "Month/Year",
  },
  {
    accessorKey: "ml",
    header: "Medical Leave (ML)",
  },
  {
    accessorKey: "od",
    header: "On Duty (OD)",
  },
];
