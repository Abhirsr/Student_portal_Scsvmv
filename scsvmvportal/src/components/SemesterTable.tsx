
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ClipboardList } from "lucide-react"; // 📋 icon for heading

function SortIcon({ direction }: { direction: "asc" | "desc" | null }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Up arrow */}
      <path
        d="M12 4L8 8H11V16H13V8H16L12 4Z"
        fill={direction === "asc" ? "#2563eb" : "#9ca3af"} // blue if active, gray otherwise
      />
      {/* Down arrow */}
      <path
        d="M12 20L16 16H13V8H11V16H8L12 20Z"
        fill={direction === "desc" ? "#2563eb" : "#9ca3af"}
      />
    </svg>
  );
}

export interface SemesterRow {
  semester: number;
  id: string;
  subjectCode: string;
  subjectDescription: string;
  credit: number;
}

const dummyData: SemesterRow[] = [
  { semester: 7, id: "MC", subjectCode: "BCSF183P50", subjectDescription: "DIGITAL ELECTRONICS LAB", credit: 2.0 },
  { semester: 7, id: "OE", subjectCode: "BCSF183P60", subjectDescription: "DATA STRUCTURES AND ALGORITHMS LAB", credit: 2.0 },
  { semester: 7, id: "MC", subjectCode: "BCSF183P50", subjectDescription: "OBJECT ORIENTED PROGRAMMING USING C++ LAB", credit: 2.0 },
  { semester: 7, id: "MC", subjectCode: "BCSF183P90", subjectDescription: "MATHEMATICS - III (DIFFERENTIAL CALCULUS)", credit: 3.0 },
  { semester: 7, id: "MC", subjectCode: "BCSF183P20", subjectDescription: "SOFTWARE ENGINEERING", credit: 2.0 },
  { semester: 7, id: "SE", subjectCode: "BCSF183P70", subjectDescription: "COMPILER DESIGN", credit: 2.0 },
  { semester: 7, id: "HN", subjectCode: "BCSF183P50", subjectDescription: "AUTOMATA THEORY", credit: 2.0 },
];

export default function SemesterTable() {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );

  const handleSort = () => {
    if (sortDirection === null) {
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection(null); // reset to default (unsorted)
    }
  };

  // Apply sorting if active
  const sortedData = [...dummyData];
  if (sortDirection === "asc") {
    sortedData.sort((a, b) => a.credit - b.credit);
  } else if (sortDirection === "desc") {
    sortedData.sort((a, b) => b.credit - a.credit);
  }

  return (
    <div className="space-y-4">
      {/* Heading above the table */}
      <div className="flex items-center space-x-2">
        <ClipboardList className="w-5 h-5 text-blue-600" />
        <h2 className="text-blue-600 font-bold tracking-wide text-lg uppercase">
          Current-Semester Subjects
        </h2>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-[#f5f7fa]">
            <TableHead className="text-gray-500 font-semibold">Semester</TableHead>
            <TableHead className="text-gray-500 font-semibold">id</TableHead>
            <TableHead className="text-gray-500 font-semibold">Subject Code</TableHead>
            <TableHead className="text-gray-500 font-semibold">Subject Description</TableHead>
            <TableHead
              className="text-gray-500 font-semibold text-right cursor-pointer select-none"
              onClick={handleSort}
            >
              <div className="flex items-center justify-end gap-1">
                Credit
                <SortIcon direction={sortDirection} />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {sortedData.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.semester}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.subjectCode}</TableCell>
              <TableCell>{row.subjectDescription}</TableCell>
              <TableCell className="text-right">{row.credit.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

