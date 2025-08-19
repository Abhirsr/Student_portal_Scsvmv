
import React from "react";
import InfoCards from "@/components/Hosteldetails";
const page = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center p-8 w-full">
        <InfoCards title="Hostel Details" value="Hostel Name: XYZ Hostel" />
        <InfoCards title="Room Number" value="Room 101" />
        <InfoCards title="Warden Name" value="Mr. John Doe" />
    </div>
  )
};

export default page;
