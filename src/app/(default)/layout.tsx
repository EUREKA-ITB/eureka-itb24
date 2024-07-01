import Footer from "@/components/footer/footer";
import NavigationBar from "@/components/navigation-bar/navigation-bar";

export default function DefaultRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex size-full min-h-screen flex-col">
      <NavigationBar />
      <main className="relative flex flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
