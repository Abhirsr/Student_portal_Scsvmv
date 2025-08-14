import LeavesTaken from "@/components/LeavesTaken"
import AttendanceReport from "@/components/AttendanceReport"
import EventUpdates from "@/components/EventUpdates"

export default function Dashboard() {
  // 🟡 Sample chart data for leaves
  const leavesData = {
    labels: ['Medical Leave', 'On-Duty Leave', 'Casual Leave'],
    datasets: [
      {
        data: [54, 20, 26],
        backgroundColor: ['#00BFFF', '#003F7D', '#00CFFF'],
        borderWidth: 0,
      },
    ],
  }

  // 🔵 Sample attendance data
  const attendanceData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
    datasets: [
      {
        label: 'Attendance',
        data: [30, 40, 42, 55, 70, 50, 28, 25],
        backgroundColor: '#0059ff',
      },
    ],
  }

  // 🟣 Sample events
  const events:{
  title: string
  time: string
  status: 'approved' | 'rejected' | 'pending' // 🔁 scalable
}[]= [
    {
      title: 'Medical Request Rejected',
      time: '02:00 PM',
      status: 'rejected',
    },
    {
      title: 'Ticket Approved',
      time: '02:30 PM',
      status: 'approved',
    },
    {
      title: 'Leave Request Pending',
      time: '03:15 PM',
      status: 'pending',
    },
  ]

  return (
    <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <LeavesTaken chartData={leavesData} />
      <AttendanceReport chartData={attendanceData} />
      <EventUpdates date="14 August 2025" events={events}/>
    </main>
  )
}
