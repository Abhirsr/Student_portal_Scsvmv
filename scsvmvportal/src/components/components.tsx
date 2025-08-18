// components/SemesterTable.tsx
"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SemesterRow {
  semester: number;
  id: string;
  subjectCode: string;
  subjectDescription: string;
  credit: number;
}

const data: SemesterRow[] = [
  {
    semester: 7,
    id: "MC",
    subjectCode: "BCSF183P50",
    subjectDescription: "DIGITAL ELECTRONICS LAB",
    credit: 2.0,
  },
  {
    semester: 7,
    id: "OE",
    subjectCode: "BCSF183P60",
    subjectDescription: "DATA STRUCTURES AND ALGORITHMS LAB",
    credit: 2.0,
  },
  {
    semester: 7,
    id: "MC",
    subjectCode: "BCSF183P50",
    subjectDescription: "OBJECT ORIENTED PROGRAMMING USING C++ LAB",
    credit: 2.0,
  },
  {
    semester: 7,
    id: "MC",
    subjectCode: "BCSF183P90",
    subjectDescription: "MATHEMATICS - III (DIFFERENTIAL CALCULUS)",
    credit: 3.0,
  },
  {
    semester: 7,
    id: "MC",
    subjectCode: "BCSF183P20",
    subjectDescription: "SOFTWARE ENGINEERING",
    credit: 2.0,
  },
  {
    semester: 7,
    id: "SE",
    subjectCode: "BCSF183P70",
    subjectDescription: "COMPILER DESIGN",
    credit: 2.0,
  },
  {
    semester: 7,
    id: "HN",
    subjectCode: "BCSF183P50",
    subjectDescription: "AUTOMATA THEORY",
    credit: 2.0,
  },
];

export default function SemesterTable() {
  return (
    <Table>
      <TableCaption>A list of Semester 7 subjects</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Semester</TableHead>
          <TableHead>id</TableHead>
          <TableHead>Subject Code</TableHead>
          <TableHead>Subject Description</TableHead>
          <TableHead className="text-right">Credit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, idx) => (
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
  );
}
