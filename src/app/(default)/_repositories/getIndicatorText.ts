import type { TEventDate } from "../_models/timeline-interfaces";
import getEventStatus from "./getEventStatus";

export default function getIndicatorText(date: TEventDate): string {
  const {
    hasEnded,
    hasntStarted,
    isOngoing,
    timeBeforeStarts,
    timeBeforeEnds,
  } = getEventStatus(date);

  if (hasntStarted) return `Dimulai dalam ${timeBeforeStarts}`;
  if (hasEnded) return "Telah berakhir";
  if (isOngoing)
    return date.end === undefined
      ? "Sedang berlangsung"
      : `Berakhir dalam ${timeBeforeEnds}`;

  return "???";
}
