"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
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

const options: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "right", // ✅ Typed correctly
      labels: { color: "#000", font: { size: 16, weight: "bold" } },
    },
    title: {
      display: true,
      text: "OVERALL ATTENDANCE",
      color: "#0e74af",
      font: { size: 28, weight: "bold" },
    },
    tooltip: {
      callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw}%` },
    },
  },
};

export default function AttendancePie() {
  return (
    <div className="w-100 mx-auto relative">
      <Pie data={data} options={options} />
      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
        81%
      </div>
    </div>
  );
}
