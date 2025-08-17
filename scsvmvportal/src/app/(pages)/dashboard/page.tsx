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
  const examData = [
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
    // 1. Corrected typo and re-applied centering classes
    <main className="flex flex-col items-center w-full p-4 md:p-8 space-y-8 dashboard-container">
      {/* --- ROW 1: Key Stats --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
        <InfoCard title="Attendance" value={75} icon={Users} />
        <InfoCard title="Fee Status " value="pending" icon={Monitor} />
        <InfoCard title="C.G.P.A" value={9.3} icon={GraduationCap} />
      </div>

      {/* --- ROW 2: Main Charts & Events --- */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 chart-container">
        <LeavesTaken chartData={leavesData} />
        <AttendanceReport chartData={attendanceData} />
        <EventUpdates date="8 July" events={events} />
      </div>

      {/* --- NEW COMBINED ROW 3: Exams & Leave Statuses --- */}
      {/* 2. Removed fixed width and corrected gap */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Left side: Exam Board taking up 3/4 of the space on xl screens, full width on smaller */}
        <div className="xl:col-span-2 w-full exam-board-container">
          <ExamBoard title="Exam Board" exams={examData} />
        </div>

        {/* Right side: Leave cards stacked vertically */}
        {/* 3. Changed flex-row to flex-col to stack cards correctly */}
        <div className="flex flex-row gap-4 w-full leave-status-container">
          <LeaveStatusCard
            title="Medical-Leave"
            approved={3}
            rejected={1}
            pending={2}
          />
          <LeaveStatusCard
            title="On-Duty"
            approved={5}
            rejected={2}
            pending={3}
          />
          <LeaveStatusCard
            title="Internships"
            approved={0}
            rejected={0}
            pending={5}
          />
        </div>
      </div>
    </main>
  );
}
