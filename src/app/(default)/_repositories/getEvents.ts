type TEvent = {
  title: string;
  description: string;
};

export default function getEvents(): TEvent[] {
  return [
    { title: "Pendaftaran LKTI", description: "10 Juli - 28 Agustus 2024" },
    { title: "Penutupan Pendaftaran LKTI", description: "28 Agustus 2024" },
    { title: "Final LKTI", description: "31 Agustus 2024" },
  ];
}
