"use client";

import DotPattern from "@/components/magicui/dot-pattern";
import RadialGradient from "@/components/magicui/radial-gradient";
import type { TCompetitionType } from "@/lib/models/competition-interfaces";
import { useState } from "react";

import TimelineTab from "./timeline-tab";
import TimelineTitle from "./timeline-title";
import TimelineTree from "./timeline-tree";

export default function Timeline() {
  const [type, setType] = useState<TCompetitionType>("olympiad");

  return (
    <div className="relative flex size-full flex-col items-center overflow-hidden pb-24 pt-12">
      <div className="container flex w-full max-w-fit flex-col gap-3">
        <TimelineTab
          tab={type}
          setTab={setType}
        />

        <TimelineTitle type={type} />
      </div>

      <TimelineTree type={type} />

      <div className="absolute -z-10 size-full">
        <DotPattern />

        <RadialGradient
          size={340}
          from="transparent"
          to="hsl(var(--background))"
        />
      </div>
    </div>
  );
}
