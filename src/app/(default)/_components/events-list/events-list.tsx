import { MotionDiv } from "@/components/motion/motion";

import getCompetitions from "../../_repositories/getCompetitions";
import CompetitionCard from "../competitions/competitions-card";

export default function EventsList() {
  const competitions = getCompetitions().slice(0, 2);
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {competitions.map((competition) => (
        <MotionDiv
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            delay: 0 + competitions.indexOf(competition) * 0.05,
          }}
          key={competition.slug}
        >
          <CompetitionCard competition={competition} />
        </MotionDiv>
      ))}
    </div>
  );
}
