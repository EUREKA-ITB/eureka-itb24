import { Button } from "src/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex w-screen items-center justify-between space-x-4 bg-gray-200 p-4 md:absolute">
      <div className="hidden items-center space-x-3 md:flex ">
        <div className="h-10 w-10 rounded-full bg-gray-400"></div>
        <p>EUREKA! ITB 2024</p>
      </div>
      <div className="flex items-center space-x-10 text-lg font-bold ">
        <a
          href="/footer"
          className=""
        >
          Home
        </a>
        <Button variant="default">Register</Button>
      </div>
    </div>
  );
}
