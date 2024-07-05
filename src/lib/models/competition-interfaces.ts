import type { Dayjs } from "dayjs";

export type TEventDate = {
  start: Dayjs;
  end?: Dayjs;
};

export type TEvent = {
  title: string;
  date: TEventDate;
};

export type TCompetitionLevel = "SMA/MA" | "Perguruan Tinggi" | "Umum";

export type TCompetitionType = "olympiad" | "scientific" | "pre";

export type TCompetition = {
  name: string;
  slug: TCompetitionType;
  levels: TCompetitionLevel[];
  description: string;
};
