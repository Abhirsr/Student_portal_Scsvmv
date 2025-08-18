"use client";
import React from "react";
import Image from "next/image";
import { SidebarTrigger } from "./ui/sidebar";
import { useSidebar } from "./ui/sidebar";

const Header = () => {
  return (
    <div className="w-[100%] flex items-center justify-center text-white bg-[linear-gradient(90deg,#0369A1_20%,#00A8EB_50%,#00BFFF_65%,#0369A1_90%)] fixed top-0 left-0 md:h-[100px]">
      <Image
        src="/logo.jpg"
        width={70}
        height={60}
        alt="SCSVMV LOGO"
        className="mr-2"
      />
      <div className="flex flex-col items-center justify-center text-[12px] font-bold md:text-[30px]">
        <h1 className="text-center text-[12px] md:text-[20px]">
          श्रीचन्द्रशेखरेन्द्रसरस्वतीविश्वमहाविद्यालयः
        </h1>
        <h2 className="text-center text-[12px] md:text-[20px]">
          Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya
        </h2>
      </div>
    </div>
  );
};

export default Header;
