import type { Metadata } from "next";
import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "SCSVMV STUDENT PORTAL",
  description: "Generated for SCSVMV Student Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="w-screen">
            <main className="w-[100%]">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
