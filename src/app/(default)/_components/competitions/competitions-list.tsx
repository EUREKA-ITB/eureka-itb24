import { BentoGrid } from "@/components/magicui/bento-grid";

import getCompetitions from "../../_repositories/getCompetitions";
import CompetitionCard from "./competitions-card";

export default function CompetitionsList() {
  const competitions = getCompetitions();

  return (
    <BentoGrid className="grid auto-rows-max grid-cols-1 md:grid-cols-2">
      {competitions.map((competition) => (
        <CompetitionCard
          key={competition.slug}
          competition={competition}
        />
      ))}
    </BentoGrid>
  );
}
