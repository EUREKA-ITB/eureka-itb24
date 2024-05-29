import img_phyOlympiad from "@/../public/img_phyOlympiad.svg";
import img_sciWriting from "@/../public/img_sciWriting.svg";
import CompetitionItems from "@/components/CompetitionItems";
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
      <CompetitionItems />
    </div>
  );
}
