"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type AttendanceReportProps = {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
    }[];
  };
};

const AttendanceReport = ({ chartData }: AttendanceReportProps) => {
  return (
    <div className="w-full">
      <div className="p-4 rounded-lg border w-full bg-white shadow">
        <h2 className="text-lg font-semibold mb-2">Attendance Report</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default AttendanceReport;
