import React from "react";
import {
  FaUser,
  FaSignOutAlt,
  FaCalendarAlt,
  FaFileAlt,
  FaCheckCircle,
  FaBook,
  FaCertificate,
  FaAward,
  FaFileInvoice,
  FaUserTie,
  FaBriefcase,
  FaDoorOpen,
  FaChartBar,
  FaUserInjured,
  FaRegBuilding,
} from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { LuClipboardList } from "react-icons/lu";
import { PiHeadset } from "react-icons/pi";
import { ChevronRight } from "lucide-react";
import { FiUser } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSubItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Sidebar Links
const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: FaChartBar,
  },
  {
    title: "Academic",
    href: "/attendance",
    icon: RiGraduationCapLine,
    sublinks: [
      { title: "Attendance", href: "/attendance", icon: FaCalendarAlt },
      { title: "Internal Marks", href: "/internal-marks", icon: FaFileAlt },
      { title: "Semester Subjects", href: "/semester-subjects", icon: FaBook },
      { title: "Results", href: "/results", icon: FaCheckCircle },
      {
        title: "Course Certificates",
        href: "/course-certificates",
        icon: FaCertificate,
      },
      { title: "Achievements", href: "/achievements", icon: FaAward },
    ],
  },
  {
    title: "Payment",
    href: "/registration",
    icon: LiaMoneyBillWaveAltSolid,
    sublinks: [
      {
        title: "Fee Payment Registration",
        href: "/registration",
        icon: FaFileInvoice,
      },
      { title: "Fee Receipts", href: "/receipts", icon: FaFileAlt },
    ],
  },
  {
    title: "Leave Requests",
    href: "/on-duty",
    icon: LuClipboardList,
    sublinks: [
      { title: "On Duty", href: "/on-duty", icon: FaUserTie },
      { title: "Medical Leave", href: "/medical-leave", icon: FaUserInjured },
      { title: "Internship", href: "/internship", icon: FaBriefcase },
    ],
  },
  {
    title: "Hostel",
    href: "/hostel-attendance",
    icon: FaRegBuilding,
    sublinks: [
      { title: "Attendance", href: "/hostel-attendance", icon: FaCalendarAlt },
      { title: "Gate Pass", href: "/hostel-gate-pass", icon: FaDoorOpen },
      { title: "Leave Form", href: "/hostel-leave-form", icon: FaFileAlt },
    ],
  },
  { title: "Complaint & Support", href: "/complaint-support", icon: PiHeadset },
  { title: "Profile", href: "/profile", icon: FiUser },
];

// Sign Out Link
const signOutLink = {
  title: "Sign Out",
  href: "/sign-out",
  icon: GoSignOut,
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-white pt-5">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarMenu>
            {sidebarLinks.map((item) =>
              item.sublinks ? (
                // CASE 1: Item with sublinks → Collapsible
                <Collapsible
                  key={item.title}
                  asChild
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger
                      asChild
                      className="hover:bg-[#0369a1]/15"
                    >
                      <SidebarMenuButton
                        tooltip={item.title}
                        className="hover:bg-[#0369a1]/15"
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.sublinks.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className="hover:bg-[#0369a1]/15"
                            >
                              <a href={subItem.href}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                // CASE 2: Item without sublinks → Normal button
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="hover:bg-[#0369a1]/15"
                  >
                    <a href={item.href}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Sign Out at Bottom */}
      <SidebarFooter className="bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-[#0369a1]/15">
              <a href={signOutLink.href}>
                <signOutLink.icon />
                <span>{signOutLink.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
