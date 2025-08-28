// components/DynamicPieChart.tsx
"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register all required Chart.js components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

interface DynamicPieChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }[];
  };
  options: ChartOptions<"pie">;
  className?: string;
}

const DynamicPieChart: React.FC<DynamicPieChartProps> = ({
  data,
  options,
  className,
}) => {
  return (
    <div>
      <Pie data={data} options={options} className="md:w-[450px] w-[200px]" />
    </div>
  );
};

export default DynamicPieChart;
