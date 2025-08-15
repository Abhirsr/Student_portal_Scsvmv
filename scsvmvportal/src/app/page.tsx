import React from "react";
import Header from "@/components/Header";

function page() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header loggedIn={false} />
      <main className="flex-grow flex items-center justify-center">
        {/* loginpage */}
      </main>
    </div>
  );
}

export default page;
