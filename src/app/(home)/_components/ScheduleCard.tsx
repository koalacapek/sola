import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface ScheduleCardProps {
  time: string;
  class: string;
  instructor: string;
  spots: string;
  level: string;
}

export default function ScheduleCard({
  time,
  class: className,
  instructor,
  spots,
  level,
}: ScheduleCardProps) {
  return (
    <Card className="border-gray-200 transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="font-serif text-2xl text-black">{time}</div>
            </div>
            <div>
              <h3 className="mb-1 font-serif text-xl text-black">
                {className}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{instructor}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {level}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-orange-600">{spots}</div>
              <div className="text-xs text-gray-400">Available</div>
            </div>
            <Button className="rounded-md bg-black px-6 py-2 text-white hover:bg-gray-800">
              Book
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
