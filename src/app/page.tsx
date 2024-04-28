import Navbar from "../components/navbar";
import Onboarding from "../components/onboarding";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Onboarding />
      <p className="pb-4 text-gray-500">Copyright © 2024 EUREKA! ITB 2024
      </p>
    </main>
  );
}
