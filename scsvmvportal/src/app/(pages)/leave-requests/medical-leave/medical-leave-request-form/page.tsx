"use client";
import { useState } from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function MedicalLeaveRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    registerNumber: "",
    email: "",
    requestType: "Medical", // fixed value
    companyName: "",
    mentorName: "",
    inchargeEmail: "",
    noOfMonths: "",
    fromDate: "",
    toDate: "",
    offerLetter: null as File | null,
  });

  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, offerLetter: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      ...formData,
      fromDate: fromDate ? format(fromDate, "dd/MM/yyyy") : "",
      toDate: toDate ? format(toDate, "dd/MM/yyyy") : "",
    });
    alert("Medical Leave Request Submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-15">
      <div className="w-full max-w-4xl py-10 px-12 rounded-lg border-2 border-blue-500 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center text-[#1a5276] mb-8">
          Request Form
        </h1>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault(); // 🚀 disables Enter-key submission
          }}
        >
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <label className="font-[600] text-blue-500">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name (Auto Fill)"
              value={formData.name}
              onChange={handleChange}
              className="border-2 border-blue-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="font-[600] text-blue-500">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email (Auto Fill)"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-blue-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            /> 

            <label className="font-[600] text-blue-500">Faculty Email</label>
            <select
              name="inchargeEmail"
              value={formData.inchargeEmail}
              onChange={handleChange}
              className={`border-2 border-blue-500 p-2 rounded-md focus:outline-none focus:ring-2 h-11 focus:ring-blue-400 ${
                formData.inchargeEmail === "" ? "text-gray-400" : "text-black"
              }`}
            >
              <option value="" disabled hidden>
                Select Faculty Email
              </option>
              <option value="faculty1@domain.com">faculty1@domain.com</option>
              <option value="faculty2@domain.com">faculty2@domain.com</option>
            </select>

            {/* From Date with Calendar */}
            <div className="flex flex-col gap-2">
              <label className="font-[600] text-blue-500">From Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-2 border-blue-500 h-11 rounded-md"
                  >
                    {fromDate ? format(fromDate, "dd/mm/yyyy") : "dd/mm/yyyy"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">
            <label className="font-[600] text-blue-500">Register Number</label>
            <input
              type="text"
              name="registerNumber"
              placeholder="Register Number (Auto Fill)"
              value={formData.registerNumber}
              onChange={handleChange}
              className="border-2 border-blue-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="font-[600] text-blue-500">Request Type</label>
            <input
              type="text"
              name="requestType"
              value="Medical"
              readOnly
              className="border-2 border-blue-500 p-2 rounded-md bg-gray-100 text-black focus:outline-none"
            />

            <label className="font-[600] text-blue-500">No of Days</label>
            <input
              type="number"
              name="noOfMonths"
              placeholder="Enter No of Months"
              value={formData.noOfMonths}
              onChange={handleChange}
              className="border-2 border-blue-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* To Date with Calendar */}
            <div className="flex flex-col gap-2">
              <label className="font-[600] text-blue-500">To Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-2 border-blue-500 h-11 rounded-md"
                  >
                    {toDate ? format(toDate, "dd/MM/yyyy") : "dd/mm/yyyy"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={toDate}
                    onSelect={setToDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Upload Section */}
          <div className="col-span-2 flex flex-col items-center gap-3 mt-4">
            <div className="flex items-center justify-center gap-4">
              <label className="font-[600] text-blue-500">
                Upload Offer Letter
              </label>
              <label
                htmlFor="offerLetter"
                className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md cursor-pointer hover:bg-blue-50 transition"
              >
                Upload
              </label>
              <input
                id="offerLetter"
                type="file"
                accept="application/pdf,image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {formData.offerLetter && (
              <p className="text-sm text-green-600 mt-1 text-center">
                Selected: {formData.offerLetter.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#1a75bb] hover:bg-[#155a8a] text-white px-10 py-3 rounded-md w-1/3 text-lg font-medium flex items-center justify-center"
            >
              <RiTelegram2Fill className="mr-2 text-xl" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
