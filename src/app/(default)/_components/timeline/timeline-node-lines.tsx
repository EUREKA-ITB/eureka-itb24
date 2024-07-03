import { cn } from "@/lib/utils/shadcn-utils";

import TimelineLine from "./timeline-line";

type TTimelineNodeLinesProps = {
  type?: "first" | "default" | "last";
};

export default function TimelineNodeLines({
  type = "default",
}: TTimelineNodeLinesProps) {
  if (type === "last") return null;

  const isFirst = type === "first";
  const nodeLinesArray = Array(isFirst ? 5 : 3).fill(0);

  return (
    <>
      {isFirst && (
        <div className="absolute -top-28 -z-[1] h-52 w-full bg-gradient-to-b from-background via-background to-transparent" />
      )}

      <div
        className={cn(
          "relative flex w-full flex-col items-center gap-2",
          isFirst && "-z-[2]",
        )}
      >
        {nodeLinesArray.map((_, index) => (
          <TimelineLine key={index + `line-${type}`} />
        ))}
      </div>
    </>
  );
}
