// import AttendanceChart from "@/components/AttendanceChart";
"use client";
import AttendanceChart from "@/components/AttendanceChart";
import AttendancePie from "@/components/DynamicPieChart";
import { attendanceColumns, cummulativeColumns } from "./columns";
import { DataTable } from "@/components/DataTable";

import { ChartOptions } from "chart.js";
import React from "react";
import { IoBookOutline } from "react-icons/io5";

function page() {
  type Status = "P" | "A";
  const dataSet: { hour: string; status: Status }[] = [
    { hour: "HOUR-1", status: "P" },
    { hour: "HOUR-2", status: "P" },
    { hour: "HOUR-3", status: "P" },
    { hour: "HOUR-4", status: "A" },
    { hour: "HOUR-5", status: "P" },
    { hour: "HOUR-6", status: "A" },
    { hour: "HOUR-7", status: "A" },
    { hour: "HOUR-8", status: "A" },
  ];

  const attendancePieData = {
    labels: ["PRESENT", "ABSENT", "ML", "OD"],
    datasets: [
      {
        label: "Attendance",
        data: [71, 7, 6, 6],
        backgroundColor: ["#1abc9c", "#f1c40f", "#e67e22", "#3498db"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const attendanceOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: { color: "#000", font: { size: 16, weight: "bold" } },
      },
      title: {
        display: true,
        text: "OVERALL ATTENDANCE",
        color: "#0e74af",
        font: { size: 28, weight: "bold" },
      },
      datalabels: {
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[0];
          const dataArr = dataset.data as number[];
          const total = dataArr.reduce(
            (acc: number, val: number) => acc + val,
            0
          );
          const percentage = Math.round((value / total) * 100);
          return `${percentage}%`;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
  };

  const attendanceData = [
    {
      subjectCode: "BCSF183P50",
      subjectDescription: "DIGITAL ELECTRONICS LAB",
      totalHours: 20,
      presentHours: 8,
      absentHours: 4,
      attendance: "70%",
    },
    {
      subjectCode: "BCSF183P60",
      subjectDescription: "DATA STRUCTURES AND ALGORITHMS LAB",
      totalHours: 20,
      presentHours: 8,
      absentHours: 4,
      attendance: "70%",
    },
    {
      subjectCode: "BCSF183P50",
      subjectDescription: "OBJECT ORIENTED PROGRAMMING USING C++ LAB",
      totalHours: 20,
      presentHours: 8,
      absentHours: 4,
      attendance: "70%",
    },
    {
      subjectCode: "BCSF183P90",
      subjectDescription: "MATHEMATICS - III (DIFFERENTIAL CALCULUS)",
      totalHours: 20,
      presentHours: 8,
      absentHours: 4,
      attendance: "70%",
    },
    {
      subjectCode: "BCSF183P20",
      subjectDescription: "SOFTWARE ENGINEERING",
      totalHours: 20,
      presentHours: 8,
      absentHours: 4,
      attendance: "70%",
    },
    {
      subjectCode: "BCSF183P50",
      subjectDescription: "AUTOMATA THEORY",
      totalHours: 20,
      presentHours: 8,
      absentHours: 4,
      attendance: "60%",
    },
    {
      subjectCode: "TOTAL",
      subjectDescription: "",
      totalHours: 20,
      presentHours: 8,
      absentHours: 4,
      attendance: "70%",
    },
  ];

  const cummulativeData = [
    {
      monthYear: "JULY",
      ml: 3,
      od: 4,
    },
    {
      monthYear: "JUNE",
      ml: 3,
      od: 4,
    },
    {
      monthYear: "MAY",
      ml: 3,
      od: 4,
    },
    {
      monthYear: "APRIL",
      ml: 3,
      od: 4,
    },
  ];

  return (
    <div>
      <div className="flex w-full justify-around p-4 md:flex-row flex-col">
        <AttendanceChart dataSet={dataSet} title="HOUR-WISE ATTENDANCE" />
        <AttendancePie
          data={attendancePieData}
          options={attendanceOptions}
          className="w-[450px]"
        />
      </div>
      <div className="p-4">
        <div className="text-[#0369a1] font-bold text-[20px] flex items-center gap-1">
          <IoBookOutline className="size-5" />
          <p>ATTENDANCE - ANALYSIS</p>
        </div>
        <DataTable
          columns={attendanceColumns}
          data={attendanceData}
          filterColumn="subjectDescription"
        />
      </div>
      <div className="p-4">
        <div className="text-[#0369a1] font-bold text-[20px] flex items-center gap-1">
          <IoBookOutline className="size-5" />
          <p>CUMMULATIVE ATTENDANCE</p>
        </div>
        <DataTable
          columns={cummulativeColumns}
          data={cummulativeData}
          filterColumn="monthYear"
        />
      </div>
    </div>
  );
}

export default page;
