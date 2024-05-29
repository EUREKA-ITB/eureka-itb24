import img_phyOlympiad from "@/../public/img_phyOlympiad.svg";
import img_sciWriting from "@/../public/img_sciWriting.svg";
import { StaticImageData } from "next/image";

export type TCompetitions = {
  name: string;
  levels: string[];
  description: string;
  image: StaticImageData;
};

export const competitions: TCompetitions[] = [
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
