import { StaticImageData } from "next/image";
import Image from "next/image";

import { Badge } from "./ui/badge";

export type TCompetitions = {
  name: string;
  levels: string[];
  description: string;
  image: StaticImageData;
};

export default function CompetitionItem_Component(competition: TCompetitions) {
  return (
    <div className="flex flex-row gap-5">
      <div className="my-auto hidden w-20 flex-shrink-0 sm:block">
        <Image
          src={competition.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-between md:flex-row ">
          <div className="text-4xl font-bold">{competition.name}</div>
          <div className="my-auto flex-row space-x-3">
            {competition.levels.map((level, index) => (
              <Badge
                key={index}
                variant="default"
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>
        <p>{competition.description}</p>
      </div>
    </div>
  );
}
