import type { TEventDate } from "@/lib/models/competition-interfaces";

import TimelineItem from "./timeline-item";
import TimelineNodeLines from "./timeline-node-lines";

type TTimelineNodeProps = {
  index: number;
  type?: "first" | "default" | "last";
  eventTitle: string;
  eventDate: TEventDate;
};

export default function TimelineNode({
  type = "default",
  ...props
}: TTimelineNodeProps) {
  const position = props.index % 2 === 0 ? "left" : "right";

  return (
    <div className="relative flex w-full flex-col items-center gap-2">
      <TimelineNodeLines type={type === "first" ? "first" : "default"} />

      <TimelineItem
        eventTitle={props.eventTitle}
        eventDate={props.eventDate}
        position={position}
      />

      <TimelineNodeLines type={type === "last" ? "last" : "default"} />
    </div>
  );
}
