import TimelineItem from "./timeline-item";
import TimelineLine from "./timeline-line";

type TTimelineNodeProps = {
  index: number;
  type?: "first" | "default" | "last";
  eventTitle: string;
  eventDescription: string;
};

export default function TimelineNode({
  type = "default",
  ...props
}: TTimelineNodeProps) {
  const topLinesArray = Array(5).fill(0);
  const nodeLinesArray = Array(2).fill(0);
  const position = props.index % 2 === 0 ? "left" : "right";

  switch (type) {
    case "first":
      return (
        <div className="relative flex w-full flex-col items-center">
          <div className="absolute h-20 w-full bg-gradient-to-b from-background to-transparent" />

          <div className="relative -z-[1] flex w-full flex-col items-center gap-2">
            {topLinesArray.map((_, index) => (
              <TimelineLine key={index + "line-first"} />
            ))}

            <TimelineItem
              eventTitle={props.eventTitle}
              eventDescription={props.eventDescription}
              position={position}
            />

            {nodeLinesArray.map((_, index) => (
              <TimelineLine key={index + "line-fist-bottom"} />
            ))}
          </div>
        </div>
      );

    case "last":
      return (
        <div className="relative flex w-full flex-col items-center gap-2">
          {nodeLinesArray.map((_, index) => (
            <TimelineLine key={index + "line-last"} />
          ))}

          <TimelineItem
            eventTitle={props.eventTitle}
            eventDescription={props.eventDescription}
            position={position}
          />
        </div>
      );

    case "default":
      return (
        <div className="relative flex w-full flex-col items-center gap-2">
          {nodeLinesArray.map((_, index) => (
            <TimelineLine key={index + "line-node-top"} />
          ))}

          <TimelineItem
            eventTitle={props.eventTitle}
            eventDescription={props.eventDescription}
            position={position}
          />

          {nodeLinesArray.map((_, index) => (
            <TimelineLine key={index + "line-node-bottom"} />
          ))}
        </div>
      );
  }
}
