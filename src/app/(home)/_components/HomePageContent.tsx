import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Star, Users, Play, MapPin } from "lucide-react";

export default function HomePageContent() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <section className="flex justify-center pt-40">
        <div className="text-center">
          <h1 className="mb-8 font-serif text-6xl leading-[0.9] tracking-tight text-black lg:text-8xl">
            Transform your body,
            <br />
            elevate your mind
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed font-light text-gray-500">
            Experience premium Pilates classes with certified instructors in our
            state-of-the-art studio. Book your session today and discover the
            perfect balance of strength, flexibility, and mindfulness.
          </p>
          <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button className="rounded-md bg-black px-8 py-4 text-base font-medium text-white hover:cursor-pointer hover:bg-gray-800">
              Book Your First Class
            </Button>
            <Button
              variant="ghost"
              className="rounded-md px-8 py-4 text-base text-gray-500 hover:cursor-pointer hover:text-black"
            >
              <Play className="mr-2 h-4 w-4" />
              Studio Tour
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-12 text-sm text-gray-400">
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
    </div>
  );
}
