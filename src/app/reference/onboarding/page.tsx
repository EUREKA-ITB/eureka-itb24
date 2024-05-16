import { Button } from "../../../components/ui/button";

export default function Onboarding() {
  return (
    <>
      <div className="flex h-screen w-screen justify-center ">
        <div className="flex h-full flex-col justify-center px-20 md:flex-row md:items-center md:space-x-20 lg:px-0">
          <div className="flex flex-col items-center space-y-2 md:items-start ">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-6xl">
              EUREKA! ITB 2024
            </h1>
            <h4 className="text-xl font-bold md:text-2xl">
              The Physics Multiverse
            </h4>
            <div className="hidden items-center space-x-4 pt-6 md:flex">
              <Button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
                Register
              </Button>
              <p>1000+ participants in EUREKA! ITB 2022</p>
            </div>
          </div>
          <div className="flex flex-col items-center py-4 ">
            <div className="h-80 w-80 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>

      <div className="flex h-full w-screen items-center">
        <div className="flex min-w-fit flex-col px-20  pb-40 md:px-60">
          <h3 className="text-2xl font-bold md:text-4xl">
            What is EUREKA! ITB?
          </h3>
          <h4 className="pt-5 text-xl font-bold md:text-2xl">
            Lorem ipsum dolor sit amet
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id erat ex. Fusce fermentum odio eu accumsan
            condimentum. Ut imperdiet consectetur tellus. Quisque ut eros vel
            ligula bibendum sagittis. Suspendisse porta, mauris eget ullamcorper
            rhoncus, leo nulla laoreet eros, id luctus velit turpis auctor
            massa. Nulla ut dictum nisi, at eleifend neque. Nullam enim est,
            consequat eget augue sed, euismod dapibus nulla. Morbi mattis purus
            placerat velit finibus auctor. Donec vitae semper metus, eget
            faucibus nunc. Morbi ut porta elit.
          </p>
        </div>
      </div>

      <div className="flex h-full w-screen items-center justify-center">
        <div className="flex min-w-fit flex-col items-center justify-center space-y-8 px-20 py-20 md:px-60">
          <h3 className="text-center text-2xl font-bold md:text-4xl">
            Competitions on EUREKA! ITB 2024
          </h3>
          <div className="flex flex-col items-center md:flex-row">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="my-2 h-36 w-36 rounded-full bg-gray-300 md:mx-2 lg:h-44 lg:w-44"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-full w-screen items-center justify-center">
        <div className="flex min-w-fit flex-col items-center justify-center space-y-8 px-60 py-40">
          <h3 className="text-center text-3xl font-bold">
            Previously on EUREKA! ITB 2024
          </h3>
          <div className="flex flex-col lg:flex-row">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="my-2 flex flex-col items-center lg:mx-2"
              >
                <div className="h-60 w-60 bg-gray-300 xl:h-96 xl:w-96"></div>
                <p>Caption</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-full w-screen items-center justify-center">
        <div className="flex min-w-fit flex-col items-center justify-center space-y-4 px-20 py-40 md:px-60">
          <h3 className="text-center text-lg font-bold lg:text-2xl xl:text-3xl">
            Let&apos;s explore the Physics Multiverse with
          </h3>
          <h3 className="pb-4 text-center text-3xl font-bold">
            EUREKA! ITB 2024
          </h3>
          <Button>Register</Button>
        </div>
      </div>

      <div className="flex h-full w-screen flex-col items-center justify-between px-40 pb-80 pt-20 lg:flex-row">
        <div className="flex flex-col items-center justify-center">
          <h3 className="pb-4 text-3xl font-bold">Sponsors</h3>
          <div className="flex grid-cols-3 grid-rows-2 items-center justify-center lg:grid ">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="mx-2 my-2 h-12 w-12 rounded-full bg-gray-300 md:h-24 md:w-24"
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="pb-4 text-3xl font-bold">Media Partners</h3>
          <div className="flex grid-cols-3 grid-rows-2 items-center  justify-center lg:grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="mx-2 my-2 h-12 w-12 rounded-full bg-gray-300 md:h-24 md:w-24"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
