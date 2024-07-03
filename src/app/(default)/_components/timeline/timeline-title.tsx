import { AnimatePresence, MotionH3 } from "@/components/motion/motion";
import { fontSecondary } from "@/lib/fonts";
import { cn } from "@/lib/utils/shadcn-utils";

import type { TCompetitionType } from "../../_models/timeline-interfaces";
import getCompetitions from "../../_repositories/getCompetitions";

type TTimelineTitleProps = {
  type: TCompetitionType;
};

export default function TimelineTitle(props: TTimelineTitleProps) {
  const competitions = getCompetitions();
  const competition = competitions.find(
    (competition) => competition.slug === props.type,
  );

  if (!competition)
    throw new Error(`No competition with name ${props.type} found!`);

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-3xl font-bold sm:text-4xl">The Beginning of Time</h1>
      <AnimatePresence>
        <MotionH3
          key={competition.name + competition.slug}
          initial={{ translateY: -20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className={cn("text-xl font-light", fontSecondary.className)}
        >
          {competition.name} timeline
        </MotionH3>
      </AnimatePresence>
    </div>
  );
}
