import React from "react";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";
import { IoBookOutline } from "react-icons/io5";

const data = [
  {
    id: "1",
    semester: 1,
    subjectCode: "PHY101",
    description: "Engineering Physics",
    credit: "3",
  },
  {
    id: "2",
    semester: 1,
    subjectCode: "CHM101",
    description: "Engineering Chemistry",
    credit: "3",
  },
  {
    id: "3",
    semester: 1,
    subjectCode: "MTH101",
    description: "Calculus and Linear Algebra",
    credit: "4",
  },
  {
    id: "4",
    semester: 1,
    subjectCode: "CSE101",
    description: "Introduction to Programming",
    credit: "4",
  },
  {
    id: "5",
    semester: 2,
    subjectCode: "BME101",
    description: "Basic Mechanical Engineering",
    credit: "3",
  },
  {
    id: "6",
    semester: 2,
    subjectCode: "ECE101",
    description: "Basic Electronics Engineering",
    credit: "3",
  },
  {
    id: "7",
    semester: 2,
    subjectCode: "MTH201",
    description: "Differential Equations",
    credit: "4",
  },
  {
    id: "8",
    semester: 2,
    subjectCode: "CSE201",
    description: "Data Structures",
    credit: "4",
  },
  {
    id: "9",
    semester: 3,
    subjectCode: "EED101",
    description: "Electrical Engineering",
    credit: "3",
  },
  {
    id: "10",
    semester: 3,
    subjectCode: "CSE301",
    description: "Object-Oriented Programming",
    credit: "4",
  },
  {
    id: "11",
    semester: 3,
    subjectCode: "MTH301",
    description: "Probability and Statistics",
    credit: "4",
  },
  {
    id: "12",
    semester: 4,
    subjectCode: "CSE401",
    description: "Database Management Systems",
    credit: "4",
  },
  {
    id: "13",
    semester: 4,
    subjectCode: "CSE402",
    description: "Operating Systems",
    credit: "4",
  },
  {
    id: "14",
    semester: 4,
    subjectCode: "ECO101",
    description: "Principles of Economics",
    credit: "3",
  },
  {
    id: "15",
    semester: 5,
    subjectCode: "CSE501",
    description: "Computer Networks",
    credit: "4",
  },
];

const page = () => {
  return (
    <div>
      <div className="p-10">
        <div className="text-[#0369a1] font-bold text-[20px] flex items-center gap-1">
          <IoBookOutline className="size-5" />
          <p>CURRENT SEMESTER SUBJECTS</p>
        </div>
        <DataTable columns={columns} data={data} filterColumn="description" />
      </div>
      <div className="p-10">
        <div className="text-[#0369a1] font-bold text-[20px] flex items-center gap-1">
          <IoBookOutline className="size-5" />
          <p>SEMESTER WISE SUBJECTS</p>
        </div>
        <DataTable columns={columns} data={data} filterColumn="description" />
      </div>
    </div>
  );
};

export default page;
