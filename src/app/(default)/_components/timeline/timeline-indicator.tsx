"use client";

import { Badge } from "@/components/shadcn-ui/badge";
import { fontSecondary } from "@/lib/fonts";
import { useMounted } from "@/lib/hooks/useMounted";
import type { TEventDate } from "@/lib/models/competition-interfaces";
import { cn } from "@/lib/utils/shadcn-utils";

import getIndicatorText from "../../_repositories/getIndicatorText";
import getIndicatorVariant from "../../_repositories/getIndicatorVariant";

type TTimelineIndicatorProps = {
  eventDate: TEventDate;
  position: "left" | "right";
  className: string;
};

export default function TimelineIndicator(props: TTimelineIndicatorProps) {
  const mounted = useMounted();
  if (!mounted)
    return (
      <Badge
        variant="default"
        className={cn(
          fontSecondary.className,
          props.className,
          props.position === "right" ? "xs:self-start" : "xs:self-end",
        )}
      >
        Sedang berlangsung
      </Badge>
    );

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
