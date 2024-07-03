import { MotionDiv } from "@/components/motion/motion";
import formatDateRange from "@/lib/repositories/formatDateRange";
import { cn } from "@/lib/utils/shadcn-utils";
import type { Variants } from "framer-motion";

import type { TEventDate } from "../../_models/timeline-interfaces";
import TimelineDot from "./timeline-dot";

type TTimelineItemProps = {
  position: "left" | "right";
  eventTitle: string;
  eventDate: TEventDate;
};

const animation: Variants = {
  initialRight: { opacity: 0, translateX: "-30%" },
  initialLeft: { opacity: 0, translateX: "30%" },
  animate: { opacity: 1, translateX: 0 },
};

export default function TimelineItem(props: TTimelineItemProps) {
  return (
    <div
      className={cn(
        "relative mb-2 flex w-full items-center justify-center",
        props.position === "right" ? "flex-row" : "flex-row-reverse",
      )}
    >
      <TimelineDot />

      <MotionDiv
        whileInView="animate"
        initial={props.position === "right" ? "initialRight" : "initialLeft"}
        variants={animation}
        transition={{ delay: 0.05 }}
        className={cn(
          "my-3 flex w-fit max-w-52 flex-col justify-center gap-2 text-balance text-center xs:absolute xs:max-w-full",
          props.position === "right"
            ? "xs:left-1/2 xs:ml-10 xs:text-left"
            : "xs:right-1/2 xs:mr-10 xs:text-right",
        )}
      >
        <h1 className="text-2xl font-semibold leading-tight text-yellow-400 sm:text-2xl">
          {props.eventTitle}
        </h1>

        <p className="font-sans text-sm">
          {formatDateRange(props.eventDate.start, props.eventDate.end)}
        </p>
      </MotionDiv>
    </div>
  );
}
