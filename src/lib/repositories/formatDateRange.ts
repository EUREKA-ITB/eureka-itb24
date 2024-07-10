import type { Dayjs } from "dayjs";

export default function formatDateRange(start: Dayjs, end?: Dayjs) {
  if (!end) return start.format("DD MMMM YYYY");

  const startMonth = start.format("MMMM");
  const endMonth = end.format("MMMM");
  const isSameMonth = startMonth === endMonth;

  const startYear = start.get("year");
  const endYear = end.get("year");
  const isSameYear = startYear === endYear;

  const startDay = start.format("DD");
  const endDay = end.format("DD");

  if (!isSameYear)
    return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;

  // same month and year
  if (isSameMonth) return `${startDay} - ${endDay} ${endMonth} ${endYear}`;

  // different month but same year
  return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${endYear}`;
}
