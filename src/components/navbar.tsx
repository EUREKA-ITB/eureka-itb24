import { Button } from "./ui/Button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between space-x-4 w-screen p-4 bg-gray-200 md:absolute">
      <div className="hidden md:flex items-center space-x-3 ">
        <div className="bg-gray-400 rounded-full w-10 h-10"></div>
        <p>EUREKA! ITB 2024</p>
      </div>
      <div className="flex items-center space-x-4 font-bold text-lg ">
        <a
          href="/"
          className=""
        >
          Home
        </a>
        <Button variant="default">Register</Button>
      </div>
    </div>
  );
}
