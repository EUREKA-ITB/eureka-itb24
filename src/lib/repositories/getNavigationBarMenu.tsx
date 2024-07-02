import { AiFillTrophy } from "react-icons/ai";

export default function getNavigationBarMenu() {
  return [
    {
      label: "Competitions",
      href: "/competitions",
      icon: <AiFillTrophy size={16} />,
    },
  ];
}
