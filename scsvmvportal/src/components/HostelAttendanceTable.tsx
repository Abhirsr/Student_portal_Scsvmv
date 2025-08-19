import React from "react";

const attendanceData = [
  { sno: 1, date: "DD/MM/YYYY", day: "SUNDAY", meal: "MORNING", time: "hh:mm:ss AM", punch: 1, status: "Pending" },
  { sno: 2, date: "DD/MM/YYYY", day: "SUNDAY", meal: "AFTERNOON", time: "hh:mm:ss AM", punch: 1, status: "Pending" },
  { sno: 3, date: "DD/MM/YYYY", day: "SUNDAY", meal: "EVENING", time: "hh:mm:ss AM", punch: 1, status: "Pending" },
  { sno: 4, date: "DD/MM/YYYY", day: "SUNDAY", meal: "NIGHT", time: "hh:mm:ss AM", punch: 1, status: "Verified" },
  { sno: 5, date: "DD/MM/YYYY", day: "SUNDAY", meal: "MORNING", time: "hh:mm:ss AM", punch: 2, status: "Verified" },
  { sno: 6, date: "DD/MM/YYYY", day: "SUNDAY", meal: "AFTERNOON", time: "hh:mm:ss AM", punch: 1, status: "Verified" },
  { sno: 7, date: "DD/MM/YYYY", day: "SUNDAY", meal: "AFTERNOON", time: "hh:mm:ss AM", punch: 1, status: "Rejected" }
];
const columns = ["S.No", "DATE", "DAY", "MEAL TIME", "TIMESTAMP", "PUNCH RECORD", "STATUS"];

function getStatusClass(status: string) {
  if (status === "Pending") return "bg-yellow-100 text-yellow-700 px-3 py-1 rounded font-semibold";
  if (status === "Verified") return "bg-teal-100 text-teal-700 px-3 py-1 rounded font-semibold";
  return "bg-red-100 text-red-700 px-3 py-1 rounded font-semibold";
}

const HostelAttendanceTable = () => (
  <div className="bg-white rounded-lg shadow overflow-x-auto">
    <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
      <div className="flex items-center">
        <span className="mr-2 text-gray-400">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input type="text" placeholder="Search" className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-sky-500" />
      </div>
      <div className="text-gray-500 text-sm">1 - 10 of 52 <span className="mx-2">&lt;</span> <span className="mx-2">&gt;</span></div>
    </div>
    <div className="h-4" />
    <table className="min-w-full text-sm">
      <thead className="bg-gray-100">
        <tr className="text-sky-700">
          {columns.map(col => (
            <th key={col} className="px-4 py-2 text-left font-semibold">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {attendanceData.map((row, idx) => (
          <tr key={idx} className="border-b last:border-b-0">
            <td className="px-4 py-2">{row.sno}</td>
            <td className="px-4 py-2">{row.date}</td>
            <td className="px-4 py-2">{row.day}</td>
            <td className="px-4 py-2">{row.meal}</td>
            <td className="px-4 py-2">{row.time}</td>
            <td className="px-4 py-2">{row.punch}</td>
            <td className="px-4 py-2">
              <span className={getStatusClass(row.status)}>
                {row.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default HostelAttendanceTable;