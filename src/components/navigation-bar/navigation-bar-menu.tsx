import getNavigationBarMenu from "@/lib/repositories/getNavigationBarMenu";
import { cn } from "@/lib/utils/shadcn-utils";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";

import { buttonVariants } from "../shadcn-ui/button";

export default function NavigationBarMenu() {
  const items = getNavigationBarMenu();

  return (
    <div className="flex items-center gap-0 text-sm xs:gap-2">
      {/* {items.map((item) => (
        <Link
          aria-label={item.label}
          className={buttonVariants({ variant: "linkHover2" })}
          key={item.href}
          href={item.href}
        >
          {item.label}
        </Link>
      ))} */}

      <Link
        aria-label="Dashboard"
        href="https://dashboard.eurekaitb.com/"
        className={cn(
          buttonVariants({ variant: "shine", size: "sm" }),
          "hidden xs:flex",
        )}
      >
        Dashboard
      </Link>

      <Link
        aria-label="Dashboard"
        href="https://dashboard.eurekaitb.com/"
        className={cn(
          buttonVariants({ variant: "shine", size: "icon" }),
          "xs:hidden",
        )}
      >
        <IoMdLogIn size={20} />
      </Link>
    </div>
  );
}
