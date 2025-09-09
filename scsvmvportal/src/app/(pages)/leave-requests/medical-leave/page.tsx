"use client";

import RequestsTables from "@/components/RequestsTables";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useRouter } from "next/navigation"; // ✅ import router

export default function MedicalLeavePage() {
  const router = useRouter(); // ✅ initialize router

  return (
    <main className="p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#1a5276]">
          MEDICAL LEAVE REQUESTS
        </h1>

        <button
          onClick={() => router.push("/leave-requests/medical-leave/medical-leave-request-form")} // ✅ navigate
          className="bg-[#1a75bb] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#155a8a] h-10 w-80"
        >
          <HiOutlinePencilAlt className="text-white" />
          <span>Apply for Medical Leave</span>
        </button>
      </div>

      <RequestsTables />
    </main>
  );
}
