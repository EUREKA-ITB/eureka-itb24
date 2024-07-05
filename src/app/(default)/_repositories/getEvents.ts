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
            start: dayjs.tz("2024-07-10 00:00:00", "Asia/Jakarta"),
            end: dayjs.tz("2024-09-15 23:59:59", "Asia/Jakarta"),
          },
        },
        {
          title: "Babak Penyisihan Olimpiade",
          date: {
            start: dayjs.tz("2024-09-21 00:00:00", "Asia/Jakarta"),
          },
        },
        {
          title: "Pengumuman Hasil Penyisihan Olimpiade",
          date: {
            start: dayjs.tz("2024-09-23 00:00:00", "Asia/Jakarta"),
          },
        },
        {
          title: "Semifinal dan Final Olimpiade",
          date: {
            start: dayjs.tz("2024-09-27 00:00:00", "Asia/Jakarta"),
            end: dayjs.tz("2024-09-29 23:59:59", "Asia/Jakarta"),
          },
        },
      ];

    case "scientific":
      return [
        {
          title: "Registrasi dan Submisi Abstrak",
          date: {
            start: dayjs.tz("2024-07-10 00:00:00", "Asia/Jakarta"),
            end: dayjs.tz("2024-08-25 23:59:59", "Asia/Jakarta"),
          },
        },
        {
          title: "Pengumuman Hasil Seleksi Abstrak",
          date: {
            start: dayjs.tz("2024-09-01 00:00:00", "Asia/Jakarta"),
          },
        },
        {
          title: "Pengumuman Full Paper",
          date: {
            start: dayjs.tz("2024-09-02 00:00:00", "Asia/Jakarta"),
            end: dayjs.tz("2024-09-19 23:59:59", "Asia/Jakarta"),
          },
        },
        {
          title: "Presentasi dan Pengumuman Pemenang",
          date: {
            start: dayjs.tz("2024-09-27 00:00:00", "Asia/Jakarta"),
            end: dayjs.tz("2024-09-29 23:59:59", "Asia/Jakarta"),
          },
        },
      ];

    case "pre":
      return [
        {
          title: "Lomba Komik dan Diseminasi",
          date: {
            start: dayjs.tz("2024-05-24 00:00:00", "Asia/Jakarta"),
            end: dayjs.tz("2024-06-24 23:59:59", "Asia/Jakarta"),
          },
        },
        {
          title: "Pengumuman Lomba Komik dan Diseminasi",
          date: {
            start: dayjs.tz("2024-07-09 00:00:00", "Asia/Jakarta"),
          },
        },
      ];
  }
}
