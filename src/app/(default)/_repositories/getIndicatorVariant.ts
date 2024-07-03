import type { BadgeProps } from "@/components/shadcn-ui/badge";

import type { TEventDate } from "../_models/timeline-interfaces";
import getEventStatus from "./getEventStatus";

export default function getIndicatorVariant(
  date: TEventDate,
): BadgeProps["variant"] {
  const { hasEnded, hasntStarted, isOngoing } = getEventStatus(date);

  if (hasntStarted) return "outline";
  if (hasEnded) return "destructive";
  if (isOngoing) return "default";

  return;
}
