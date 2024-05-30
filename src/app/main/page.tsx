import img_phyOlympiad from "@/../public/img_phyOlympiad.svg";
import img_sciWriting from "@/../public/img_sciWriting.svg";
import CompetitionItem_Component from "@/components/competition-item";
import { TCompetitions } from "@/components/competition-item";

const competitions: TCompetitions[] = [
  {
    name: "PHYSICS OLYMPIAD",
    levels: ["SMP/MTs", "SD/MI"],
    description:
      "We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand",
    image: img_sciWriting,
  },
  {
    name: "SCIENTIFIC WRITING",
    levels: ["SMP/MTs", "SD/MI"],
    description:
      "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",
    image: img_phyOlympiad,
  },
];

export default function Competition_List() {
  return (
    <div className="flex flex-col space-y-10 px-10 xl:container sm:px-20 xl:px-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold italic">COMPETITIONS</h1>
        <h2 className="text-2xl font-light">
          Things that are waiting beyond the horizon
        </h2>
      </div>
      {competitions.map((competition) => (
        <CompetitionItem_Component
          key={competition.name}
          {...competition}
        />
      ))}
    </div>
  );
}
