import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Star, Users, Play, MapPin } from "lucide-react";
import ScheduleCard from "./ScheduleCard";

export default function HomePageContent() {
  const data = [
    {
      time: "7:00 AM",
      class: "Morning Flow",
      instructor: "Sarah Chen",
      spots: "3 spots left",
      level: "All Levels",
    },
    {
      time: "9:30 AM",
      class: "Foundation",
      instructor: "Mike Rodriguez",
      spots: "5 spots left",
      level: "Beginner",
    },
    {
      time: "12:00 PM",
      class: "Power Pilates",
      instructor: "Emma Thompson",
      spots: "2 spots left",
      level: "Intermediate",
    },
    {
      time: "5:30 PM",
      class: "Restorative Flow",
      instructor: "Lisa Park",
      spots: "6 spots left",
      level: "All Levels",
    },
    {
      time: "7:00 PM",
      class: "Advanced Practice",
      instructor: "David Kim",
      spots: "4 spots left",
      level: "Advanced",
    },
  ];
  return (
    <div className="bg-background min-h-screen w-full transition-colors duration-300">
      <Navbar />
      <section className="flex justify-center py-40">
        <div className="text-center">
          <h1 className="text-foreground mb-8 font-serif text-6xl leading-[0.9] tracking-tight lg:text-8xl">
            Transform your body,
            <br />
            elevate your mind
          </h1>
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-lg leading-relaxed font-light">
            Experience premium Pilates classes with certified instructors in our
            state-of-the-art studio. Book your session today and discover the
            perfect balance of strength, flexibility, and mindfulness.
          </p>
          <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-8 py-4 text-base font-medium">
              Book Your First Class
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground rounded-md px-8 py-4 text-base hover:cursor-pointer"
            >
              <Play className="mr-2 h-4 w-4" />
              Studio Tour
            </Button>
          </div>

          <div className="text-muted-foreground flex items-center justify-center space-x-12 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>500+ Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-current" />
              <span>4.9 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Downtown Location</span>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="bg-background px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-6 font-serif text-6xl leading-tight">
              Today&apos;s Schedule
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg font-light">
              Book your spot in today&apos;s classes. Limited spaces available.
            </p>
          </div>

          <div className="grid gap-4">
            {data.map((item, index) => (
              <ScheduleCard
                key={index}
                time={item.time}
                class={item.class}
                instructor={item.instructor}
                spots={item.spots}
                level={item.level}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
