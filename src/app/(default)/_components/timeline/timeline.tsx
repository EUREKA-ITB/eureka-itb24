"use client";

import { useState } from "react";

import type { TCompetitionType } from "../../_models/timeline-interfaces";
import TimelineTab from "./timeline-tab";
import TimelineTitle from "./timeline-title";
import TimelineTree from "./timeline-tree";

export default function Timeline() {
  const [type, setType] = useState<TCompetitionType>("olympiad");

  return (
    <div className="container relative flex size-full flex-col items-center pb-24 pt-12">
      <div className="container flex w-full max-w-fit flex-col gap-3">
        <TimelineTab
          tab={type}
          setTab={setType}
        />

        <TimelineTitle type={type} />
      </div>

      <TimelineTree type={type} />
    </div>
  );
}
