import { Button } from "./ui/Button";

export default function Onboarding() {
  return (
    <>
      <div className="flex w-screen h-screen justify-center ">
        <div className="flex flex-col md:flex-row md:items-center justify-center h-full md:space-x-20 px-20 lg:px-0">
          <div className="flex flex-col items-center md:items-start space-y-2 ">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold">
              EUREKA! ITB 2024
            </h1>
            <h4 className="text-xl md:text-2xl font-bold">
              The Physics Multiverse
            </h4>
            <div className="hidden md:flex items-center pt-6 space-x-4">
              <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                Register
              </Button>
              <p>1000+ participants in EUREKA! ITB 2022</p>
            </div>
          </div>
          <div className="flex flex-col items-center py-4 ">
            <div className="w-80 h-80 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col items-center justify-center pt-6 space-x-4 md:hidden">
              <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                Register
              </Button>
              <p className="text-xs mt-2 md:text-md">
                1000+ participants in EUREKA! ITB 2022
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-screen h-full items-center">
        <div className="px-20 md:px-60 flex flex-col  min-w-fit pb-40">
          <h3 className="text-2xl md:text-4xl font-bold">
            What is EUREKA! ITB?
          </h3>
          <h4 className="text-xl md:text-2xl font-bold pt-5">
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

      <div className="flex w-screen h-full justify-center items-center">
        <div className="px-20 md:px-60 flex flex-col min-w-fit items-center justify-center space-y-8 py-20">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Competitions on EUREKA! ITB 2024
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-36 h-36 lg:w-44 lg:h-44 bg-gray-300 rounded-full my-2 md:mx-2"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-screen h-full justify-center items-center">
        <div className="px-60 flex flex-col min-w-fit items-center justify-center space-y-8 py-40">
          <h3 className="text-3xl font-bold text-center">
            Previously on EUREKA! ITB 2024
          </h3>
          <div className="flex flex-col lg:flex-row">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center my-2 lg:mx-2"
              >
                <div className="w-60 h-60 xl:w-96 xl:h-96 bg-gray-300"></div>
                <p>Caption</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-screen h-full justify-center items-center">
        <div className="px-20 md:px-60 flex flex-col min-w-fit items-center justify-center space-y-4 py-40">
          <h3 className="text-lg lg:text-2xl xl:text-3xl font-bold text-center">
            Let's explore the Physics Multiverse with
          </h3>
          <h3 className="text-3xl font-bold pb-4 text-center">
            EUREKA! ITB 2024
          </h3>
          <Button>Register</Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-screen h-full justify-between items-center px-40 pt-20 pb-80">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold pb-4">Sponsors</h3>
          <div className="flex lg:grid grid-cols-3 grid-rows-2 items-center justify-center ">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 md:w-24 md:h-24 bg-gray-300 rounded-full mx-2 my-2"
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold pb-4">Media Partners</h3>
          <div className="flex lg:grid grid-cols-3 grid-rows-2  items-center justify-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 md:w-24 md:h-24 bg-gray-300 rounded-full mx-2 my-2"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
