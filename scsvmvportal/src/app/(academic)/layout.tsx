import { ReactNode } from "react";

interface AcademicLayoutProps {
  children: ReactNode;
}

export default function AcademicLayout({ children }: AcademicLayoutProps) {
  return (
    <div>
      <h1>Academic Section</h1>
      {children}
    </div>
  );
}
