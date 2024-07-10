import { BentoGrid } from "@/components/magicui/bento-grid";

import getCompetitions from "../../_repositories/getCompetitions";
import CompetitionCard from "./competitions-card";

export default function CompetitionsList() {
  const competitions = getCompetitions();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {competitions.map((competition) => (
        <CompetitionCard
          key={competition.slug}
          competition={competition}
          className="h-full"
        />
      ))}
    </div>
  );
}
