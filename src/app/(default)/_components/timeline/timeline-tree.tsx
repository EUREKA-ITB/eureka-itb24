import type { TCompetitionType } from "../../_models/timeline-interfaces";
import getEvents from "../../_repositories/getEvents";
import TimelineNode from "./timeline-node";

type TTimelineTreeProps = {
  type: TCompetitionType;
};

export default function TimelineTree(props: TTimelineTreeProps) {
  const events = getEvents(props.type);

  return (
    <div
      id="timeline"
      className="container flex w-full max-w-screen-md flex-col items-center gap-2"
    >
      {events.map((event, index) => {
        if (index === 0) {
          return (
            <TimelineNode
              type="first"
              index={index}
              eventTitle={event.title}
              eventDate={event.date}
              key={index + "timeline-first" + event.title}
            />
          );
        } else if (index === events.length - 1) {
          return (
            <TimelineNode
              type="last"
              index={index}
              eventTitle={event.title}
              eventDate={event.date}
              key={index + "timeline-last" + event.title}
            />
          );
        }

        return (
          <TimelineNode
            index={index}
            eventTitle={event.title}
            eventDate={event.date}
            key={index + "timeline-node" + event.title}
          />
        );
      })}
    </div>
  );
}
