import { BookOpen } from "lucide-react";

interface Exam {
  name: string;
  course: string;
  date: string;
  time: string;
}

interface ExamBoardProps {
  exams: Exam[];
}

export default function ExamBoard({ exams }: ExamBoardProps) {
  return (
    <div className="flex flex-col  items-start  rounded-xl border bg-white shadow-md ">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="text-blue-600 w-7 h-7" />
        <h2 className="text-2xl font-bold text-blue-900">Exam Board</h2>
      </div>

      {/* Table */}
      <div>
        <table className="w-full text-sm text-left text-blue-900">
          <thead className="border-b bg-blue-50">
            <tr>
              <th className="px-4 py-2 font-semibold">Exam Name</th>
              <th className="px-4 py-2 font-semibold">Course</th>
              <th className="px-4 py-2 font-semibold">Date</th>
              <th className="px-4 py-2 font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, idx) => (
              <tr
                key={idx}
                className="border-b last:border-none hover:bg-blue-100/40 transition-colors"
              >
                <td className="px-4 py-2 whitespace-nowrap">{exam.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{exam.course}</td>
                <td className="px-4 py-2 whitespace-nowrap">{exam.date}</td>
                <td className="px-4 py-2 whitespace-nowrap">{exam.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
