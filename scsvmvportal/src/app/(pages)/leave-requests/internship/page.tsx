"use client";

import RequestsTables from "@/components/RequestsTables";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useRouter } from "next/navigation"; // ✅ import useRouter

export default function InternshipPage() {
  const router = useRouter(); // ✅ initialize router

  return (
    <main className="p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#1a5276]">
          INTERNSHIP REQUESTS
        </h1>
        <button
          onClick={() => router.push("/leave-requests/internship/internship-request-form")} // ✅ navigate
          className="bg-[#1a75bb] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#155a8a] h-10 w-80"
        >
          <HiOutlinePencilAlt className="text-white" />
          <span className="text-center">Apply for Internship Leave</span>
        </button>
      </div>

      <RequestsTables />
    </main>
  );
}
