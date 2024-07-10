import { BentoGrid } from "@/components/magicui/bento-grid";

import getCompetitions from "../../_repositories/getCompetitions";
import CompetitionCard from "./competitions-card";

export default function CompetitionsList() {
  const competitions = getCompetitions();

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {competitions.map((competition) => (
        <CompetitionCard
          key={competition.slug}
          competition={competition}
          className="md:h-[27rem] xl:h-96"
        />
      ))}
    </div>
  );
}
