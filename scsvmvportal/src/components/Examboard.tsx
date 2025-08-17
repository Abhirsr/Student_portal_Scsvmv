import { BookOpen } from "lucide-react";

interface Exam {
  name: string;
  course: string;
  date: string;
  time: string;
}

interface ExamBoardProps {
  title: string;
  exams: Exam[];
}

export default function ExamBoard({ exams, title }: ExamBoardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 h-full md:w-150 w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="text-blue-600" />
        <h2 className="text-lg font-semibold text-blue-900">{title}</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-xs md:text-sm text-left text-blue-900">
          <thead className="border-b">
            <tr>
              <th className="px-2 md:px-4 py-2">Exam Name</th>
              <th className="px-2 md:px-4 py-2">Course</th>
              <th className="px-2 md:px-4 py-2">Date</th>
              <th className="px-2 md:px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, idx) => (
              <tr key={idx} className="border-b last:border-none">
                <td className="px-2 md:px-4 py-2">{exam.name}</td>
                <td className="px-2 md:px-4 py-2">{exam.course}</td>
                <td className="px-2 md:px-4 py-2">{exam.date}</td>
                <td className="px-2 md:px-4 py-2">{exam.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
