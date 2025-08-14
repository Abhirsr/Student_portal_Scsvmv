import InfoCard from "@/components/Scorecard"
import { Users, Monitor, GraduationCap } from "lucide-react"
import ExamBoard from "@/components/Examboard"
import LeaveStatusCard from "@/components/Leavestatus"

export default function Home() {
  const examData = [
    { name: "Maths Final", course: "Mathematics", date: "08-12-2025", time: "10:00 AM" },
    { name: "Physics Midterm", course: "Physics", date: "09-12-2025", time: "1:00 PM" },
    { name: "Chemistry Quiz", course: "Chemistry", date: "10-12-2025", time: "9:00 AM" }
  ]
  return (
    <main className="p-6 space-y-4">
      <InfoCard title="Attendance" value={75} icon={Users} />
      <InfoCard title="Fee Status " value="pending" icon={Monitor} />
      <InfoCard title="C.G.P.A" value={9.3} icon={GraduationCap} />
      {/* Exam Board Component */}
      <ExamBoard title="Upcoming Exams" exams={examData} />

      {/* Leave Status Cards */}
      <div className="flex gap-4 mt-6">
        <LeaveStatusCard title="Medical-Leave" approved={3} rejected={1} pending={1} />
        <LeaveStatusCard title="On-Duty" approved={5} rejected={2} pending={2}/>
        <LeaveStatusCard title="Internships" approved={0} rejected={0} pending={1} />
      </div>
      </main>
  )
}