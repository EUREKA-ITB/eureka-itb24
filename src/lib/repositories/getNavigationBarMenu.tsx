import { AiFillBook } from "react-icons/ai";

export default function getNavigationBarMenu() {
  return [
    {
      label: "Olympiad Semifinal",
      href: "https://bit.ly/HasilSemifinalPhysicsOlympiadEUREKAITB2024",
      icon: <AiFillBook size={16} />,
    },
    {
      label: "Full Paper Selection",
      href: "https://bit.ly/HasilSeleksiFullPaperEUREKAITB2024",
      icon: <AiFillBook size={16} />,
    },
    {
      label: "Olympiad Elimination",
      href: "https://bit.ly/HasilPenyisihanPhysicsOlympiadEUREKAITB2024",
      icon: <AiFillBook size={16} />,
    },
    {
      label: "Abstract Selection",
      href: "https://bit.ly/HasilSeleksiAbstrakFinalEUREKAITB2024",
      icon: <AiFillBook size={16} />,
    },
    {
      label: "Guidebook",
      href: "https://bit.ly/GuidebookEurekaITB2024",
      icon: <AiFillBook size={16} />,
    },
  ];
}
