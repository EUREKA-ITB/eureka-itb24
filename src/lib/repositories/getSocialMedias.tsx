import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function getSocialMedias() {
  return [
    {
      label: "X / Twitter",
      href: "https://x.com/eurekaitb/",
      icon: <FaTwitter size={16} />,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/eurekaitb/",
      icon: <FaFacebook size={16} />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/eurekaitb/",
      icon: <FaInstagram size={16} />,
    },
  ];
}
