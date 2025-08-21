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
    <Card className="border-border transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-foreground font-serif text-2xl">{time}</div>
            </div>
            <div>
              <h3 className="text-foreground mb-1 font-serif text-xl">
                {className}
              </h3>
              <div className="text-muted-foreground flex items-center space-x-4 text-sm">
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
              <div className="text-muted-foreground text-xs">Available</div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 py-2 text-sm font-medium">
              Book
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
