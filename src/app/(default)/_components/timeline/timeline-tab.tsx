import { Button } from "@/components/shadcn-ui/button";

import type { TCompetitionType } from "../../_models/timeline-interfaces";
import getCompetitions from "../../_repositories/getCompetitions";

type TTimelineTabProps = {
  tab: TCompetitionType;
  setTab: React.Dispatch<React.SetStateAction<TCompetitionType>>;
};

export default function TimelineTab(props: TTimelineTabProps) {
  const competitions = getCompetitions();
  const isActive = (type: TCompetitionType) => type === props.tab;

  return (
    <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-scroll">
      {competitions.map((competition) => (
        <Button
          key={competition.slug}
          size="sm"
          className="w-full"
          disabled={isActive(competition.slug)}
          variant={isActive(competition.slug) ? "default" : "outline"}
          onClick={() => props.setTab(competition.slug)}
        >
          {competition.name}
        </Button>
      ))}
    </div>
  );
}
