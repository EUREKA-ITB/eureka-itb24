import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function getSocialMedias() {
  return [
    {
      label: "Tiktok",
      href: "https://www.tiktok.com/@eurekaitb",
      icon: <FaTiktok size={16} />,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@eurekaitb400",
      icon: <FaYoutube size={16} />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/eurekaitb/",
      icon: <FaInstagram size={16} />,
    },
  ];
}
