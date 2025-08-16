import React from "react";
import Image from "next/image";
import { SidebarTrigger } from "./ui/sidebar";

const Header = ({ loggedIn }: { loggedIn: boolean }) => {
  return (
    <div className="w-full min-w-full flex items-center justify-center text-white bg-[linear-gradient(90deg,#0369A1_20%,#00A8EB_50%,#00BFFF_65%,#0369A1_90%)] relative md:h-[100px] p-2">
      {loggedIn && (
        <SidebarTrigger className="absolute top-0 left-0 bg-white rounded-none text-black rounded-br-[5px] h-10 w-6 rounded-tr-[5px] " />
      )}

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
