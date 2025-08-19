// 1. All imports from both versions are combined here
import Scorecard from "@/components/Scorecard";
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

  return (
    <main className="flex flex-col items-center justify-center w-[100%]  md:p-8 gap-10 p-8">
      {/* --- ROW 1: Key Stats --- */}
      <div className="flex flex-col md:flex-row justify-between items-center w-[100%] gap-15">
        <Scorecard title="Attendance" value={75} icon={Users} />
        <Scorecard title="Fee Status " value="pending" icon={Monitor} />
        <Scorecard title="C.G.P.A" value={9.3} icon={GraduationCap} />
      </div>

      {/* --- ROW 2: Main Charts & Events --- */}
      <div className="flex flex-col md:flex-row justify-between items-center w-[100%] md:gap-0 gap-10">
        <LeavesTaken chartData={leavesData} />
        <AttendanceReport chartData={attendanceData} />
        <EventUpdates date="8 July" events={events} />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-[100%] md:gap-10 gap-10">
        <ExamBoard exams={examData} title={"Exam Board"} />
        <div className="w-[100%] flex md:flex-row flex-col items-center justify-center gap-10">
          <LeaveStatusCard
            title={"Medialc  Leave"}
            approved={20}
            pending={20}
            rejected={20}
          />
          <LeaveStatusCard
            title={"Medialc  Leave"}
            approved={20}
            pending={20}
            rejected={20}
          />
          <LeaveStatusCard
            title={"Medialc  Leave"}
            approved={20}
            pending={20}
            rejected={20}
          />
        </div>
      </div>
    </main>
  );
}
