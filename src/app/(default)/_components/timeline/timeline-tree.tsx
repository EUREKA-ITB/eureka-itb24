import type { TCompetitionType } from "@/lib/models/competition-interfaces";

import getEvents from "../../_repositories/getEvents";
import TimelineNode from "./timeline-node";

type TTimelineTreeProps = {
  type: TCompetitionType;
};

export default function TimelineTree(props: TTimelineTreeProps) {
  const events = getEvents(props.type);
  const getNodeType = (index: number) => {
    if (index === 0) return "first";
    if (index === events.length - 1) return "last";
    return "default";
  };

  return (
    <div className="container flex w-full max-w-screen-md flex-col items-center gap-2">
      {events.map((event, index) => (
        <TimelineNode
          index={index}
          type={getNodeType(index)}
          eventTitle={event.title}
          eventDate={event.date}
          key={index + `timeline-${getNodeType(index)}` + event.title}
        />
      ))}
    </div>
  );
}
