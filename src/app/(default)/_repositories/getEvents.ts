import type {
  TCompetitionType,
  TEvent,
} from "@/lib/models/competition-interfaces";
import dayjs from "dayjs";
import "dayjs/locale/id";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.locale("id");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function getEvents(type: TCompetitionType): TEvent[] {
  switch (type) {
    case "olympiad":
      return [
        {
          title: "Registrasi Olimpiade",
          date: {
            start: dayjs.tz(new Date(2024, 6, 10, 24, 59, 59), "Asia/Jakarta"),
            end: dayjs.tz(new Date(2024, 10, 15, 24, 59, 59), "Asia/Jakarta"),
          },
        },
        {
          title: "Babak Penyisihan Olimpiade",
          date: {
            start: dayjs.tz(new Date(2024, 8, 21, 24, 59, 59), "Asia/Jakarta"),
          },
        },
        {
          title: "Pengumuman Hasil Penyisihan Olimpiade",
          date: {
            start: dayjs.tz(new Date(2024, 8, 23, 24, 59, 59), "Asia/Jakarta"),
          },
        },
        {
          title: "Semifinal dan Final Olimpiade",
          date: {
            start: dayjs.tz(new Date(2024, 8, 27, 24, 59, 59), "Asia/Jakarta"),
            end: dayjs.tz(new Date(2024, 8, 29, 24, 59, 59), "Asia/Jakarta"),
          },
        },
      ];

    case "scientific":
      return [
        {
          title: "Registrasi dan Submisi Abstrak",
          date: {
            start: dayjs.tz(new Date(2024, 6, 10, 24, 59, 59), "Asia/Jakarta"),
            end: dayjs.tz(new Date(2024, 7, 25, 24, 59, 59), "Asia/Jakarta"),
          },
        },
        {
          title: "Pengumuman Hasil Seleksi Abstrak",
          date: {
            start: dayjs.tz(new Date(2024, 8, 1, 24, 59, 59), "Asia/Jakarta"),
          },
        },
        {
          title: "Pengumuman Full Paper",
          date: {
            start: dayjs.tz(new Date(2024, 8, 2, 24, 59, 59), "Asia/Jakarta"),
            end: dayjs.tz(new Date(2024, 8, 19, 24, 59, 59), "Asia/Jakarta"),
          },
        },
        {
          title: "Presentasi dan Pengumuman Pemenang",
          date: {
            start: dayjs.tz(new Date(2024, 9, 27, 24, 59, 59), "Asia/Jakarta"),
            end: dayjs.tz(new Date(2024, 9, 29, 24, 59, 59), "Asia/Jakarta"),
          },
        },
      ];

    case "pre":
      return [
        {
          title: "Lomba Komik dan Diseminasi",
          date: {
            start: dayjs.tz(new Date(2024, 4, 24, 24, 59, 59), "Asia/Jakarta"),
            end: dayjs.tz(new Date(2024, 5, 24, 24, 59, 59), "Asia/Jakarta"),
          },
        },
        {
          title: "Pengumuman Lomba Komik dan Diseminasi",
          date: {
            start: dayjs.tz(new Date(2024, 6, 9, 24, 59, 59), "Asia/Jakarta"),
          },
        },
      ];
  }
}
