import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/shadcn-ui/badge";
import { Card } from "@/components/shadcn-ui/card";
import type { TCompetition } from "@/lib/models/competition-interfaces";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type TCompetitionCardProps = {
  competition: TCompetition;
};

export default function CompetitionCard(props: TCompetitionCardProps) {
  return (
    <Card className="group relative flex w-full flex-col items-center justify-center gap-6 p-12 transition-all ease-in-out hover:cursor-pointer hover:drop-shadow-blue-glow-sm sm:min-h-[20rem] last:sm:min-h-[10rem] last:sm:items-start md:last:col-span-2">
      <div className="flex max-w-[80ch] flex-col gap-3">
        <h1 className="w-full text-left text-3xl font-bold md:text-2xl lg:text-3xl">
          {props.competition.name}
        </h1>

        <p className="text-justify md:text-sm lg:text-base">
          {props.competition.description}
        </p>
      </div>

      <div className="flex w-full max-w-[80ch] flex-wrap items-center justify-between gap-x-8 gap-y-4 group-last:sm:justify-start">
        <div className="flex items-center gap-2 self-start">
          {props.competition.levels.map((level) => (
            <Badge
              key={props.competition.slug + props.competition.levels}
              variant="secondary"
            >
              {level}
            </Badge>
          ))}
        </div>
        <div className="flex -translate-x-8 items-center gap-2 text-sm opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
          <span className="hidden xs:inline md:hidden lg:inline">
            Learn more
          </span>{" "}
          <ArrowRightIcon fontSize={12} />
        </div>
      </div>

      <BorderBeam
        delay={Math.random() + 1}
        duration={3 * Math.random() + 4}
        borderWidth={4}
        colorFrom="var(--yellow-500)"
        colorTo="var(--purple-200)"
        className="transition-all group-hover:opacity-0"
      />
    </Card>
  );
}
