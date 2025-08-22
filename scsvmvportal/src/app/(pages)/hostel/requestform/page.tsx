"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const formOptions = [
  { label: "Gate Pass Form", value: "gatepass" },
  { label: "Leave Form", value: "leave" },
];

const GatePassForm = () => (
  <form className="border-2 border-sky-700 rounded-lg p-8 max-w-3xl mx-auto bg-white">
    <h2 className="text-3xl font-bold text-sky-700 text-center mb-8">Gate Pass Form</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label className="block font-semibold text-sky-700 mb-2">Time of Departure</label>
        <input type="text" placeholder="HH:MM AM/PM" className="w-full border border-sky-700 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-semibold text-sky-700 mb-2">Time of Return</label>
        <input type="text" placeholder="HH:MM AM/PM" className="w-full border border-sky-700 rounded px-4 py-2" />
      </div>
    </div>
    <div className="mb-6">
      <label className="block font-semibold text-sky-700 mb-2">Purpose of Visit</label>
      <textarea placeholder="Shopping, Food, Local Errands, Meeting Friends" className="w-full border border-sky-700 rounded px-4 py-2" />
    </div>
    <div className="mb-8">
      <label className="block font-semibold text-sky-700 mb-2">Destination/Location</label>
      <textarea placeholder="Sports Ground" className="w-full border border-sky-700 rounded px-4 py-2" />
    </div>
    <button type="submit" className="bg-sky-700 text-white font-semibold px-8 py-2 rounded flex items-center mx-auto">
      <span className="mr-2"></span> Submit
    </button>
  </form>
);

const LeaveForm = () => (
  <form className="border-2 border-sky-700 rounded-lg p-8 max-w-3xl mx-auto bg-white">
    <h2 className="text-3xl font-bold text-sky-700 text-center mb-8">Leave Form</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label className="block font-semibold text-sky-700 mb-2">Date of Departure</label>
        <input type="text" placeholder="DD/MM/YYYY" className="w-full border border-sky-700 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-semibold text-sky-700 mb-2">Date of Return</label>
        <input type="text" placeholder="DD/MM/YYYY" className="w-full border border-sky-700 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-semibold text-sky-700 mb-2">Parent's/Guardians Name</label>
        <input type="text" placeholder="Name of Guardian" className="w-full border border-sky-700 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block font-semibold text-sky-700 mb-2">Parent's/Guardian's Number</label>
        <input type="text" placeholder="Parent/Guardian's Number" className="w-full border border-sky-700 rounded px-4 py-2" />
      </div>
    </div>
    <div className="mb-6">
      <label className="block font-semibold text-sky-700 mb-2">Purpose of Visit</label>
      <textarea placeholder="Shopping, Food, Local Errands, Meeting Friends" className="w-full border border-sky-700 rounded px-4 py-2" />
    </div>
    <div className="mb-8">
      <label className="block font-semibold text-sky-700 mb-2">Address</label>
      <textarea placeholder="address" className="w-full border border-sky-700 rounded px-4 py-2" />
    </div>
    <button type="submit" className="bg-sky-700 text-white font-semibold px-8 py-2 rounded flex items-center mx-auto">
      <span className="mr-2"></span> Submit
    </button>
  </form>
);

const Page = () => {
  const [selectedForm, setSelectedForm] = useState(formOptions[0].value);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
      <div className="mb-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="border border-sky-700 rounded px-6 py-2 text-sky-700 font-bold bg-white shadow">
              {formOptions.find(opt => opt.value === selectedForm)?.label}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {formOptions.map(opt => (
              <DropdownMenuItem
                key={opt.value}
                onSelect={() => setSelectedForm(opt.value)}
                className="cursor-pointer"
              >
                {opt.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {selectedForm === "gatepass" ? <GatePassForm /> : <LeaveForm />}
    </div>
  );
};

export default Page;