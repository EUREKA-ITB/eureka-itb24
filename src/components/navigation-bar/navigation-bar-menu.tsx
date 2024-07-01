import getNavigationBarMenu from "@/lib/repositories/getNavigationBarMenu";
import Link from "next/link";

import { buttonVariants } from "../shadcn-ui/button";

export default function NavigationBarMenu() {
  const items = getNavigationBarMenu();

  return (
    <div className="flex items-center gap-2 text-sm">
      {items.map((item) => (
        <Link
          className={buttonVariants({ variant: "linkHover2" })}
          key={item.href}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}

      <Link
        href="https://dashboard.eurekaitb.com/"
        className={buttonVariants({ variant: "shine", size: "sm" })}
      >
        Dashboard
      </Link>
    </div>
  );
}
