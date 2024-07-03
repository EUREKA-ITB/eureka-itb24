import { fontSecondary } from "@/lib/fonts";
import { cn } from "@/lib/utils/shadcn-utils";

export default function WhatIsEureka() {
  return (
    <div className="container z-[21] flex flex-col items-center gap-4 px-12 text-center">
      <em className="font-sans text-5xl font-bold drop-shadow-blue-glow sm:text-6xl md:text-8xl">
        EUREKA! ITB
      </em>

      <h3
        className={cn(
          "max-w-screen-xs text-center text-sm sm:text-base md:max-w-screen-sm",
          fontSecondary.className,
        )}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quis
        aperiam assumenda sed, saepe quae? Voluptatibus, vitae laudantium.
        Cupiditate fugiat consequuntur autem tenetur modi facilis, officiis cum!
        Saepe, fugiat exercitationem.
      </h3>
    </div>
  );
}
