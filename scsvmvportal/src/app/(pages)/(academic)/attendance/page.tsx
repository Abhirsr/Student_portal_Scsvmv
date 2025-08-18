import AttendanceChart from "@/components/DonutChart";
import AttendancePie from "@/components/PieChart";
import { Button } from "@/components/ui/button";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

function page() {
  return (
    <div className="flex items-center justify-center h-screen ">
      
      <AttendanceChart/>
      <AttendancePie/>
    </div>
  );
}

export default page;

