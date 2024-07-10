import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/shadcn-ui/badge";
import { Card } from "@/components/shadcn-ui/card";
import type { TCompetition } from "@/lib/models/competition-interfaces";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type TCompetitionCardProps = {
  competition: TCompetition;
  className?: string;
};

export default function CompetitionCard({
  competition,
  className,
}: TCompetitionCardProps) {
  return (
    <Link
      className={`group relative flex size-full flex-col items-center justify-center gap-6 transition-all ease-in-out hover:cursor-pointer hover:drop-shadow-blue-glow-sm last:sm:min-h-[10rem] last:sm:items-start md:last:col-span-2 ${className}`}
      aria-label={competition.name}
      href={`/events/${competition.slug}`}
    >
      <Card className="relative flex h-full w-full flex-col gap-6 p-12">
        <div className="flex max-w-[80ch] flex-col gap-3">
          <h1 className="w-full text-left text-3xl font-bold md:text-2xl lg:text-3xl">
            {competition.name}
          </h1>

          <p className="text-justify md:text-sm lg:text-base">
            {competition.description}
          </p>
        </div>

        <div className="flex w-full max-w-[80ch] items-center justify-between gap-x-8 gap-y-4 group-last:md:justify-start">
          <div className="flex flex-wrap items-center gap-2 self-start overflow-hidden">
            {competition.levels.map((level) => (
              <Badge
                key={competition.slug + competition.levels}
                variant="secondary"
                className="min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {level}
              </Badge>
            ))}
          </div>

          <div className="flex -translate-x-8 items-center gap-2 text-sm opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
            <span className="hidden xs:inline md:hidden group-last:md:inline xl:inline">
              Learn more
            </span>{" "}
            <ArrowRightIcon
              className="shrink-0"
              fontSize={12}
            />
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
    </Link>
  );
}
