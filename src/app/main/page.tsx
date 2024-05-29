import { competitions } from "@/components/CompetitionItems";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Competition_List() {
  return (
    <div className="flex flex-col space-y-10 px-20 xl:container xl:px-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold italic">COMPETITIONS</h1>
        <h2 className="text-2xl font-light">
          Things that are waiting beyond the horizon
        </h2>
      </div>
      {competitions.map((competitions) => (
        <div
          key={null}
          className="flex flex-row space-x-5"
        >
          <div className="my-auto hidden w-20 flex-shrink-0 sm:block">
            <Image
              src={competitions.image}
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col justify-between md:flex-row">
              <div className="text-4xl font-bold">{competitions.name}</div>
              <div className="my-auto flex-row space-x-4 space-y-4 md:space-y-0 ">
                {competitions.levels.map((a) => (
                  <Badge
                    key={null}
                    variant="default"
                  >
                    {a}
                  </Badge>
                ))}
              </div>
            </div>
            <p>{competitions.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
