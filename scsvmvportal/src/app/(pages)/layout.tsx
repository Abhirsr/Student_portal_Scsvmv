// app/(main)/layout.js
import Header from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full relative overflow-x-hidden">
        <AppSidebar />

        <div className="flex-1 flex flex-col overflow-x-hidden transition-all duration-300 min-w-0">
          <div className="w-full min-w-full header-container">
            <Header loggedIn={true} />
          </div>
          <main className="flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
