import type { TEventDate } from "@/lib/models/competition-interfaces";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function getEventStatus(date: TEventDate) {
  const hasntStarted = dayjs().isBefore(date.start);
  const hasEnded = date.end
    ? dayjs().isAfter(date.end)
    : dayjs().isAfter(date.start, "day");
  const isOngoing = !hasntStarted && !hasEnded;

  const timeBeforeStarts =
    hasntStarted && dayjs(date.start).local().fromNow(true);
  const timeBeforeEnds = isOngoing && dayjs(date.end).local().fromNow(true);
  const timeAfterEnds = hasEnded && dayjs(date.end).local().toNow(true);

  return {
    hasntStarted,
    hasEnded,
    isOngoing,
    timeAfterEnds,
    timeBeforeEnds,
    timeBeforeStarts,
  };
}
