import type { TCompetition } from "@/lib/models/competition-interfaces";

export default function getCompetitions(): TCompetition[] {
  return [
    {
      name: "Physics Olympiad",
      slug: "olympiad",
      levels: ["SMA/MA", "Perguruan Tinggi"],
      description:
        "Ajang bergengsi bagi siswa SMA/sederajat dan mahasiswa untuk menguji pengetahuan dan keterampilan analitis melalui serangkaian problem fisis yang dirancang untuk menggali potensi terbaik para peserta dalam memahami dan menerapkan konsep-konsep fisika.",
    },
    {
      name: "Scientific Writing Competition",
      slug: "scientific",
      levels: ["SMA/MA", "Perguruan Tinggi"],
      description:
        "Ajang bergengsi bagi siswa SMA/sederajat dan mahasiswa untuk menunjukkan kemampuan menulis ilmiah dengan berbagai topik menarik dari berbagai lingkup penelitian dalam dunia fisika sehingga dapat mengasah kemampuan peserta dalam menyusun argumen ilmiah, menganalisis data, dan mempresentasikannya secara efektif.",
    },
    // {
    //   name: "Pre-event",
    //   slug: "pre",
    //   levels: ["Umum"],
    //   description:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officia omnis id corrupti sapiente? Nemo, fugit? Illo nesciunt nihil itaque eos optio, quasi sunt magni vel dolore est, dolorem similique?",
    // },
  ];
}
