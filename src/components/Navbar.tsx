import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto w-full px-8">
        <div className="flex h-16 items-center justify-between">
          <span className="font-serif text-2xl text-black">Sola</span>
          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#schedule"
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              Schedule
            </a>
            <a
              href="#classes"
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              Classes
            </a>
            <a
              href="#instructors"
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              Instructors
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              Pricing
            </a>
          </nav>
          <Button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}
