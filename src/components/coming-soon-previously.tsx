import ComingSoonGallery from "./coming-soon-gallery";

export default function ComingSoonPreviously() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-8">
      <h2 className="absolute -top-10 z-[1] mx-16 text-balance rounded-full bg-background/60 px-6 py-4 text-center text-xl font-semibold backdrop-blur xs:text-2xl sm:px-16 sm:drop-shadow-[0px_50px_96px_rgba(1,_170,_185,_0.5)] md:px-32 md:text-3xl xl:text-4xl">
        Our previous journey
      </h2>

      <ComingSoonGallery />

      <p className="text-md absolute -bottom-8 z-[1] mx-16 text-balance rounded-full bg-background/40 px-6 py-4 text-center font-light backdrop-blur sm:px-6 sm:text-lg sm:drop-shadow-[0px_-50px_96px_rgba(1,_170,_185,_0.5)] md:px-12 md:text-xl xl:text-2xl">
        The last EUREKA! ITB that was held offline was EUREKA! ITB 2020.
      </p>
    </div>
  );
}
