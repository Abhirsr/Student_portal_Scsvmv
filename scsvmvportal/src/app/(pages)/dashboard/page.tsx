// 1. All imports from both versions are combined here
import InfoCard from "@/components/Scorecard";
import ExamBoard from "@/components/Examboard";
import LeaveStatusCard from "@/components/Leavestatus";
import LeavesTaken from "@/components/LeavesTaken";
import AttendanceReport from "@/components/AttendanceReport";
import EventUpdates from "@/components/EventUpdates";
import { Users, Monitor, GraduationCap } from "lucide-react";

export default function DashboardPage() {
  // 2. All data from both versions is now in one component
  const examData: {
    name: string;
    course: string;
    date: string;
    time: string;
  }[] = [
    {
      name: "Maths Final",
      course: "Mathematics",
      date: "08-12-2025",
      time: "10:00 AM",
    },
    {
      name: "Physics Midterm",
      course: "Physics",
      date: "09-12-2025",
      time: "1:00 PM",
    },
    {
      name: "Chemistry Quiz",
      course: "Chemistry",
      date: "10-12-2025",
      time: "9:00 AM",
    },
  ];

  const leavesData = {
    labels: ["Medical Leave", "On-Duty Leave", "Casual Leave"],
    datasets: [
      {
        data: [54, 20, 26],
        backgroundColor: ["#00BFFF", "#003F7D", "#00CFFF"],
        borderWidth: 0,
      },
    ],
  };

  const attendanceData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
    datasets: [
      {
        label: "Attendance",
        data: [30, 40, 42, 55, 70, 50, 28, 25],
        backgroundColor: "#0059ff",
      },
    ],
  };

  const events: {
    title: string;
    time: string;
    status: "approved" | "rejected" | "pending";
  }[] = [
    { title: "Medical Request Rejected", time: "02:00 PM", status: "rejected" },
    { title: "Ticket Approved", time: "02:30 PM", status: "approved" },
    { title: "Leave Request Pending", time: "03:15 PM", status: "pending" },
    { title: "Medical Request Rejected", time: "02:00 PM", status: "rejected" },
    { title: "Ticket Approved", time: "02:30 PM", status: "approved" },
    { title: "Leave Request Pending", time: "03:15 PM", status: "pending" },
  ];

  // 3. The final, combined layout
  // The final, responsive layout
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <div className="flex flex-row  md:px-30 px-0 justify-between gap-3 py-10">
        <InfoCard title="Attendance" value={75} icon={Users} />
        <InfoCard title="Fee Status " value="pending" icon={Monitor} />
        <InfoCard title="C.G.P.A" value={9.3} icon={GraduationCap} />
      </div>
      <div className="flex flex-col md:flex-row md:px-30 px-0 justify-between gap-3  items-center">
        <LeavesTaken chartData={leavesData} />
        <AttendanceReport chartData={attendanceData} />
        <EventUpdates events={events} />
      </div>
    </div>
  );
}
