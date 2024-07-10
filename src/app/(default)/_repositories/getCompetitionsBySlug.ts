import type { TCompetitionType } from "@/lib/models/competition-interfaces";

import getCompetitions from "./getCompetitions";

export default function getCompetitionsBySlug(slug: TCompetitionType) {
  const competitions = getCompetitions();
  return competitions.find((competition) => competition.slug === slug);
}
