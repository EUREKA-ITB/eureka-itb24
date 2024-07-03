import type { Dayjs } from "dayjs";

export type TEventDate = {
  start: Dayjs;
  end?: Dayjs;
};

export type TEvent = {
  title: string;
  date: TEventDate;
};

export type TCompetitionType = "olympiad" | "scientific" | "pre";
