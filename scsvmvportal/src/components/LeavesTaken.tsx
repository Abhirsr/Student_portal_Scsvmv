'use client'

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

type LeavesTakenProps = {
  chartData: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor?: string[]
      borderColor?: string[]
      borderWidth?: number
    }[]
  }
}

const LeavesTaken = ({ chartData }: LeavesTakenProps) => {
  return (
      <div className="w-50px p-4 rounded-lg border w-full max-w-sm bg-white shadow">
        <h2 className="text-lg font-semibold mb-2">Leaves Taken</h2>
        <Doughnut data={chartData} />
        <ul className="mt-4 space-y-2 text-sm">
          {chartData.labels.map((label, idx) => (
            <li key={idx}>
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: chartData.datasets[0].backgroundColor?.[idx] || '#ccc' }}
              />
              {label} – {chartData.datasets[0].data[idx]}%
            </li>
          ))}
        </ul>
      </div>
  )
}

export default LeavesTaken;
