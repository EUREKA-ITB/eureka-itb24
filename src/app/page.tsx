import Onboarding from "@/app/reference/onboarding/page";
import Navbar from "@/app/reference/navbar/page";
import FooterPage from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col size-full h-screen items-center justify-center gap-8">Ini diisi sama coming soon</div>
      {/* <Navbar />
      <Onboarding />  */}
      <FooterPage />      
    </main>
  );
}
