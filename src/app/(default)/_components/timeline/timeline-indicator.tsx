import { Badge } from "@/components/shadcn-ui/badge";
import { fontSecondary } from "@/lib/fonts";
import { cn } from "@/lib/utils/shadcn-utils";

import type { TEventDate } from "../../_models/timeline-interfaces";
import getIndicatorText from "../../_repositories/getIndicatorText";
import getIndicatorVariant from "../../_repositories/getIndicatorVariant";

type TTimelineIndicatorProps = {
  eventDate: TEventDate;
  position: "left" | "right";
  className: string;
};

export default function TimelineIndicator(props: TTimelineIndicatorProps) {
  return (
    <Badge
      variant={getIndicatorVariant(props.eventDate)}
      className={cn(
        fontSecondary.className,
        props.className,
        props.position === "right" ? "xs:self-start" : "xs:self-end",
      )}
    >
      {getIndicatorText(props.eventDate)}
    </Badge>
  );
}
