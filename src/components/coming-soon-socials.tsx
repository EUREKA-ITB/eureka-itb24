import React from "react";

import { Avatar, AvatarFallback } from "./ui/avatar";

export default function ComingSoonSocials() {
  return (
    <div className="flex w-max flex-col justify-center gap-8 ">
      <h3 className="text-3xl">Stay tuned on our social media</h3>
      <div className="flex w-full items-center justify-evenly gap-2">
        {[1, 2, 3].map((e) => (
          <Avatar
            className="size-16"
            key={e + 100}
          >
            <AvatarFallback>{e}</AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
}
