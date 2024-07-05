import { AiFillTrophy } from "react-icons/ai";

export default function getNavigationBarMenu() {
  return [
    {
      label: "Events",
      href: "/events",
      icon: <AiFillTrophy size={16} />,
    },
  ];
}
