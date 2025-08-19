interface LeaveStatusCardProps {
  title: string;
  approved: number;
  rejected: number;
  pending: number;
}

export default function LeaveStatusCard({
  title,
  approved,
  rejected,
  pending,
}: LeaveStatusCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 text-center border border-gray-200 w-[100%]">
      <h3 className="text-lg font-semibold text-blue-800 mb-1">{title}</h3>
      <div className="h-[1px] bg-gray-200 shadow-sm mb-2"></div>
      <p className="text-gray-700">Approved : {approved}</p>
      <p className="text-gray-700">Rejected : {rejected}</p>
      <p className="text-gray-700">Pending : {pending}</p>
    </div>
  );
}
