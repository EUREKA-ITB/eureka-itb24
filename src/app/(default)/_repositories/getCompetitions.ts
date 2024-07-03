import type { TCompetitionType } from "../_models/timeline-interfaces";

type TCompetition = {
  name: string;
  slug: TCompetitionType;
};

export default function getCompetitions(): TCompetition[] {
  return [
    { name: "Olympiad", slug: "olympiad" },
    { name: "Scientific writing", slug: "scientific" },
    { name: "Pre-event", slug: "pre" },
  ];
}
