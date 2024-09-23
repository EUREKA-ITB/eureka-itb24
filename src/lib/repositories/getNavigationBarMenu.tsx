import { AiFillBook } from "react-icons/ai";

export default function getNavigationBarMenu() {
  return [
    {
      label: "Olympiad Elimination",
      href: "https://eurekaitb.com", // Attention: change this to the correct URL later
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
