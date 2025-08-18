// app/(main)/layout.js
import Header from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div>
        <Header />
      </div>
      <div className="flex pt-[100px] w-[100%]">
        <aside className="min-h-screen">
          <AppSidebar />
        </aside>

        <div className="flex-1 w-[100%]">{children}</div>
      </div>
    </SidebarProvider>
  );
}
