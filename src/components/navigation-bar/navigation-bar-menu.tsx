import getNavigationBarMenu from "@/lib/repositories/getNavigationBarMenu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button, buttonVariants } from "../shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn-ui/dropdown-menu";

export default function NavigationBarMenu() {
  const items = getNavigationBarMenu();

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        aria-label="Register"
        href="https://dashboard.eurekaitb.com/"
        className={buttonVariants({ size: "sm" })}
      >
        Dashboard
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="size-7"
            size="icon"
          >
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {items.map((item) => (
            <DropdownMenuItem
              key={item.href}
              asChild
              className="hover:cursor-pointer"
            >
              <Link
                aria-label={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
