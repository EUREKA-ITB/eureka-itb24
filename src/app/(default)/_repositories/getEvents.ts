import type { TCompetitionType } from "../_models/timeline-interfaces";

type TEvent = {
  title: string;
  date: string;
};

export default function getEvents(type: TCompetitionType): TEvent[] {
  switch (type) {
    case "olympiad":
      return [
        { title: "Registrasi", date: "10 Juli - 15 September 2024" },
        { title: "Babak Penyisihan", date: "21 September 2024" },
        {
          title: "Pengumuman Hasil Penyisihan",
          date: "23 September 2024",
        },
        {
          title: "Semifinal dan Final",
          date: "27 - 29 September 2024",
        },
      ];

    case "scientific":
      return [
        {
          title: "Registrasi dan Submisi Abstrak",
          date: "10 Juli - 25 Agustus 2024",
        },
        {
          title: "Pengumuman Hasil Seleksi Abstrak",
          date: "01 September 2024",
        },
        { title: "Pengumuman Full Paper", date: "02 - 19 September 2024" },
        {
          title: "Presentasi dan Pengumuman Pemenang",
          date: "27 - 29 September 2024",
        },
      ];

    case "pre":
      return [
        { title: "Lomba Komik dan Diseminasi", date: "24 Mei - 24 Juni 2024" },
        {
          title: "Pengumuman Lomba Komik dan Diseminasi",
          date: "09 Juli 2024",
        },
      ];
  }
}
