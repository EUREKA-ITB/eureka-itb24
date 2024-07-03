import dayjs from "dayjs";
import "dayjs/locale/id";

import type { TCompetitionType, TEvent } from "../_models/timeline-interfaces";

dayjs.locale("id");

export default function getEvents(type: TCompetitionType): TEvent[] {
  switch (type) {
    case "olympiad":
      return [
        {
          title: "Registrasi Olimpiade",
          date: {
            start: dayjs(new Date(2024, 6, 10, 23, 59, 59)),
            end: dayjs(new Date(2024, 10, 15, 23, 59, 59)),
          },
        },
        {
          title: "Babak Penyisihan Olimpiade",
          date: {
            start: dayjs(new Date(2024, 8, 21, 23, 59, 59)),
          },
        },
        {
          title: "Pengumuman Hasil Penyisihan Olimpiade",
          date: {
            start: dayjs(new Date(2024, 8, 23, 23, 59, 59)),
          },
        },
        {
          title: "Semifinal dan Final Olimpiade",
          date: {
            start: dayjs(new Date(2024, 8, 27, 23, 59, 59)),
            end: dayjs(new Date(2024, 8, 29, 23, 59, 59)),
          },
        },
      ];

    case "scientific":
      return [
        {
          title: "Registrasi dan Submisi Abstrak",
          date: {
            start: dayjs(new Date(2024, 6, 10, 23, 59, 59)),
            end: dayjs(new Date(2024, 7, 25, 23, 59, 59)),
          },
        },
        {
          title: "Pengumuman Hasil Seleksi Abstrak",
          date: {
            start: dayjs(new Date(2024, 8, 1, 23, 59, 59)),
          },
        },
        {
          title: "Pengumuman Full Paper",
          date: {
            start: dayjs(new Date(2024, 8, 2, 23, 59, 59)),
            end: dayjs(new Date(2024, 8, 19, 23, 59, 59)),
          },
        },
        {
          title: "Presentasi dan Pengumuman Pemenang",
          date: {
            start: dayjs(new Date(2024, 9, 27, 23, 59, 59)),
            end: dayjs(new Date(2024, 9, 29, 23, 59, 59)),
          },
        },
      ];

    case "pre":
      return [
        {
          title: "Lomba Komik dan Diseminasi",
          date: {
            start: dayjs(new Date(2024, 4, 24, 23, 59, 59)),
            end: dayjs(new Date(2024, 5, 24, 23, 59, 59)),
          },
        },
        {
          title: "Pengumuman Lomba Komik dan Diseminasi",
          date: {
            start: dayjs(new Date(2024, 6, 9, 23, 59, 59)),
          },
        },
      ];
  }
}
