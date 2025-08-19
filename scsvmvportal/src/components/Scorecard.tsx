import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  value: number | string;
  icon?: LucideIcon;
}

export default function Scorecard({ title, value, icon: Icon }: InfoCardProps) {
  const isNumber = typeof value === "number";
  return (
    <Card className=" p-3 bg-transparent w-full border-1 border-gray-300 shadow-l">
      <CardContent className="flex items-center md:gap-5 justify-center gap-10">
        {/* Icon Circle */}
        <div className="bg-[#E5F0FA] p-4 rounded-full flex items-center justify-center">
          {Icon && <Icon className="w-8 h-8 text-[#005AA3]" />}
        </div>

        {/* Text Section */}
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold">
            {isNumber ? value.toFixed(2) : value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
