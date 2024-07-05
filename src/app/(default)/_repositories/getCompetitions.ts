import type {
  TCompetition,
  TCompetitionType,
} from "@/lib/models/competition-interfaces";

export default function getCompetitions(): TCompetition[] {
  return [
    {
      name: "Olympiad",
      slug: "olympiad",
      levels: ["SMA/MA", "Perguruan Tinggi"],
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officia omnis id corrupti sapiente? Nemo, fugit? Illo nesciunt nihil itaque eos optio, quasi sunt magni vel dolore est, dolorem similique?",
    },
    {
      name: "Scientific writing",
      slug: "scientific",
      levels: ["SMA/MA", "Perguruan Tinggi"],
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officia omnis id corrupti sapiente? Nemo, fugit? Illo nesciunt nihil itaque eos optio, quasi sunt magni vel dolore est, dolorem similique?",
    },
    {
      name: "Pre-event",
      slug: "pre",
      levels: ["Umum"],
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officia omnis id corrupti sapiente? Nemo, fugit? Illo nesciunt nihil itaque eos optio, quasi sunt magni vel dolore est, dolorem similique?",
    },
  ];
}
