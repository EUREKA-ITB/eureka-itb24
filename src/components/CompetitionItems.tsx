import img_phyOlympiad from "@/../public/img_phyOlympiad.svg";
import img_sciWriting from "@/../public/img_sciWriting.svg";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type TCompetitions = {
  name: string;
  levels: string[];
  description: string;
  image: string;
};

const competitions: TCompetitions[] = [
  {
    name: "PHYSICS OLYMPIAD",
    levels: ["SMP/MTs", "SD/MI"],
    description:
      "We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand",
    image: "sciWriting.svg",
  },
  {
    name: "SCIENTIFIC WRITING",
    levels: ["SMP/MTs", "SD/MI"],
    description:
      "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",
    image: "sciWriting.svg",
  },
];
export default function CompetitionItems() {
  return (
    <div className="flex flex-col space-y-10 px-20 xl:container xl:px-20">
      <div className="flex flex-row space-x-5">
        <div className="my-auto hidden w-20 flex-shrink-0 sm:block">
          <Image
            src={img_phyOlympiad}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="text-4xl font-bold">PHYSICS OLYMPIAD </div>
            <div className="my-auto flex-row space-x-4 space-y-4 md:space-y-0 ">
              <Badge variant="default"> SMP/MTs</Badge>
              <Badge variant="default">SD/MI</Badge>
            </div>
          </div>
          <p>
            We&apos;re no strangers to love You know the rules and so do I (do
            I) A full commitment&apos;s what I&apos;m thinking of You
            wouldn&apos;t get this from any other guy I just wanna tell you how
            I&apos;m feeling Gotta make you understand
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-5">
        <div className="my-auto hidden w-20 flex-shrink-0 sm:block">
          <Image
            src={img_sciWriting}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="text-4xl font-bold">SCIENTIFIC WRITING </div>
            <div className="my-auto flex-row space-x-4 space-y-4 md:space-y-0 ">
              <Badge variant="default"> SMP/MTs</Badge>
              <Badge variant="default">SD/MI</Badge>
            </div>
          </div>
          <p>
            We&apos;re no strangers to love You know the rules and so do I (do
            I) A full commitment&apos;s what I&apos;m thinking of You
            wouldn&apos;t get this from any other guy I just wanna tell you how
            I&apos;m feeling Gotta make you understand
          </p>
        </div>
      </div>
    </div>
  );
}
