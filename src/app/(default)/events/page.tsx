import DotPattern from "@/components/magicui/dot-pattern";
import RadialGradient from "@/components/magicui/radial-gradient";

import EventsList from "../_components/events-list/events-list";

export default function EventsPage() {
  return (
    <div className="container flex flex-col py-6">
      <h1 className="mb-10 text-center text-6xl font-bold drop-shadow-blue-glow md:mt-20">
        EVENTS
      </h1>
      <EventsList />

      <div className="absolute -z-10 size-full -translate-x-[13rem]">
        <DotPattern />

        <RadialGradient
          size={500}
          from="transparent"
          to="hsl(var(--background))"
        />
      </div>
    </div>
  );
}
