import getSocialMedias from "@/lib/repositories/getSocialMedias";
import Link from "next/link";

import { buttonVariants } from "../shadcn-ui/button";

export default function FooterSocialMedia() {
  const socialMedias = getSocialMedias();

  return (
    <div className="flex items-center gap-2 py-1">
      {socialMedias.map((socialMedia) => (
        <Link
          aria-label={socialMedia.label}
          key={socialMedia.href}
          href={socialMedia.href}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          {socialMedia.icon}
        </Link>
      ))}
    </div>
  );
}
