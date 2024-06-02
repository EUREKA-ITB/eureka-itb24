import Link from "next/link";
import React from "react";
import { FaInstagram, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

import { Button } from "./ui/button";

const items = [
  { name: "Twitter", icon: FaXTwitter, link: "https://x.com/eurekaitb" },
  {
    name: "Facebook",
    icon: FaSquareFacebook,
    link: "https://facebook.com/eurekaitb",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/eurekaitb",
  },
];

export default function ComingSoonSocials() {
  return (
    <div className="flex w-full items-center justify-center gap-0 md:gap-8">
      {items.map((item) => (
        <Button
          size="lg"
          key={item.name}
          variant="ghost"
          className="p-8"
          asChild
        >
          <Link
            aria-label={item.name}
            id={item.name}
            about={item.name}
            href={item.link}
          >
            <item.icon size={36} />
          </Link>
        </Button>
      ))}
    </div>
  );
}
