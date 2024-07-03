import getEvents from "../../_repositories/getEvents";
import TimelineNode from "./timeline-node";

export default function TimelineTree() {
  const events = getEvents();

  return (
    <div className="container flex w-full max-w-screen-sm flex-col items-center gap-2">
      {events.map((event, index) => {
        if (index === 0) {
          return (
            <TimelineNode
              type="first"
              index={index}
              eventTitle={event.title}
              eventDescription={event.description}
              key={index + "timeline-first"}
            />
          );
        } else if (index === events.length - 1) {
          return (
            <TimelineNode
              type="last"
              index={index}
              eventTitle={event.title}
              eventDescription={event.description}
              key={index + "timeline-last"}
            />
          );
        }

        return (
          <TimelineNode
            index={index}
            eventTitle={event.title}
            eventDescription={event.description}
            key={index + "timeline-node"}
          />
        );
      })}
    </div>
  );
}
