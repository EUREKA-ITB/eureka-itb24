import Navbar from "@/app/reference/navbar/page";
import Onboarding from "@/app/reference/onboarding/page";
import FooterPage from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <div className="flex size-full h-screen flex-col items-center justify-center gap-8">
        Ini diisi sama coming soon
      </div>
      {/* <Navbar />
      <Onboarding />  */}
      <FooterPage />
    </main>
  );
}
