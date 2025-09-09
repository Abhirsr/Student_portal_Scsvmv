"use client";

import { useState } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // ✅ added missing imports
import { IoMdSearch } from "react-icons/io";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

type LeaveRequest = {
  id: number;
  email: string;
  fromDate: string;
  toDate: string;
  submittedOn: string;
  status: "Approved" | "Rejected" | "Pending";
};

// 🔹 Reusable sortable header
type SortableHeaderProps = {
  label: string;
  sort: "asc" | "desc" | null;
  onToggle: () => void;
};

function SortableHeader({ label, sort, onToggle }: SortableHeaderProps) {
  return (
    <div
      className="flex items-center gap-1 cursor-pointer select-none"
      onClick={onToggle}
    >
      <span className="font-semibold text-gray-700">{label}</span>
      <div className="flex text-xs leading-none">
        {sort === null && <HiOutlineArrowsUpDown className="text-gray-400" />}
        {sort === "asc" && <FaArrowUp className="text-blue-600" />}
        {sort === "desc" && <FaArrowDown className="text-blue-600" />}
      </div>
    </div>
  );
}

export default function RequestsTable() {
  const sampleData: LeaveRequest[] = [
    {
      id: 1,
      email: "faculty@kanchiuniv.ac.in",
      fromDate: "2025-01-12",
      toDate: "2025-01-14",
      submittedOn: "2025-01-10 9:33:21 AM",
      status: "Rejected",
    },
    {
      id: 2,
      email: "faculty@kanchiuniv.ac.in",
      fromDate: "2025-01-12",
      toDate: "2025-01-14",
      submittedOn: "2025-01-10 9:33:21 AM",
      status: "Approved",
    },
    {
      id: 3,
      email: "faculty@kanchiuniv.ac.in",
      fromDate: "2025-01-12",
      toDate: "2025-01-14",
      submittedOn: "2025-01-10 9:33:21 AM",
      status: "Approved",
    },
    {
      id: 4,
      email: "faculty@kanchiuniv.ac.in",
      fromDate: "2025-01-12",
      toDate: "2025-01-14",
      submittedOn: "2025-01-10 9:33:21 AM",
      status: "Pending",
    },
  ];

  const [data, setData] = useState<LeaveRequest[]>(sampleData);
  const [sortBy, setSortBy] = useState<"fromDate" | "toDate" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  // 🔹 Sorting
  const handleSort = (field: "fromDate" | "toDate") => {
    let newOrder: "asc" | "desc" | null;
    if (sortBy !== field) {
      newOrder = "asc";
    } else if (sortOrder === "asc") {
      newOrder = "desc";
    } else if (sortOrder === "desc") {
      newOrder = null;
    } else {
      newOrder = "asc";
    }

    setSortBy(newOrder ? field : null);
    setSortOrder(newOrder);

    if (!newOrder) {
      setData(sampleData);
    } else {
      const sorted = [...data].sort((a, b) => {
        const aDate = new Date(a[field]).getTime();
        const bDate = new Date(b[field]).getTime();
        return newOrder === "asc" ? aDate - bDate : bDate - aDate;
      });
      setData(sorted);
    }
  };

  const getStatusClass = (status: LeaveRequest["status"]) => {
    switch (status) {
      case "Approved":
        return "px-2 py-1 rounded text-sm bg-green-100 text-green-700";
      case "Rejected":
        return "px-2 py-1 rounded text-sm bg-red-100 text-red-700";
      case "Pending":
        return "px-3 py-1 rounded text-sm bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="py-10">
      {/* 🔹 Search, Count & Pagination */}
      <div className="flex justify-between items-center bg-[#f7f9fc] px-9 py-3 border rounded-t-lg">
        {/* Search */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg bg-white pl-10 pr-3 py-2 w-full"
          />
          <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Count & Pagination */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">1 - {data.length} of 52</span>
          <div className="flex items-center gap-2">
            <MdNavigateBefore className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
            <MdNavigateNext className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
        </div>
      </div>

      {/* 🔹 Table */}
      <table className="min-w-full bg-white border rounded-b-lg my-1">
        <thead>
          <tr className="bg-[#f7f9fc] border-b">
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Sl No
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Faculty Email
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              <SortableHeader
                label="From Date"
                sort={sortBy === "fromDate" ? sortOrder : null}
                onToggle={() => handleSort("fromDate")}
              />
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              <SortableHeader
                label="To Date"
                sort={sortBy === "toDate" ? sortOrder : null}
                onToggle={() => handleSort("toDate")}
              />
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Submitted On
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-700">{row.id}</td>
              <td className="py-3 px-4 text-gray-700">{row.email}</td>
              <td className="py-3 px-4 text-gray-700">{row.fromDate}</td>
              <td className="py-3 px-4 text-gray-700">{row.toDate}</td>
              <td className="py-3 px-4 text-gray-700">{row.submittedOn}</td>
              <td className="py-3 px-4">
                <span className={getStatusClass(row.status)}>{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
