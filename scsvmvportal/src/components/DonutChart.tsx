"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

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
const COLORS: Record<Status, string> = { P: "#14b8a6", A: "#ef4444" };

export default function AttendanceChart() {
  const present = dataSet.filter((d) => d.status === "P").length;
  const chartData = {
    labels: dataSet.map((d) => d.hour),
    datasets: [{ data: dataSet.map(() => 1), backgroundColor: dataSet.map((d) => COLORS[d.status]), borderWidth: 2 }],
  };
  const options = { cutout: "75%", plugins: { legend: { display: false } } };

  return (
    <div className="flex gap-8 flex-col ">
      <h2 className="text-center font-bold text-2xl text-sky-700 mb-2">HOUR-WISE ATTENDANCE</h2>
      <div className="flex gap-10">
<div className="relative w-[250px] flex-grow self-center">
        <Doughnut data={chartData} options={options} />
        <div className="absolute text-center flex flex-col items-center justify-center top-25 left-25">
          <div className="text-sm text-gray-500">TODAY</div>
          <div className="text-3xl font-bold text-gray-800">{present}</div>
        </div>
      </div>
      <div>
        
        <table className="min-w-[220px] border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600 font-semibold text-sm">
              <th className="px-4 py-2 text-left">PERIOD</th>
              <th className="px-4 py-2 text-left">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {dataSet.map((d, i) => (
              <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="px-4 py-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full inline-block mr-2" style={{ background: COLORS[d.status] }}></span>
                  {d.hour}
                </td>
                <td className="px-4 py-2 font-medium text-gray-700">{d.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    </div>
  );
}
