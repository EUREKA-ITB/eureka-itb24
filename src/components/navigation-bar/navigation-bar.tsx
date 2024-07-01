import NavigationBarLogo from "./navigation-bar-logo";
import NavigationBarMenu from "./navigation-bar-menu";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 z-10 w-full border-b bg-background/30 backdrop-blur">
      <div className="container flex items-center justify-between">
        <NavigationBarLogo />

        <NavigationBarMenu />
      </div>
    </nav>
  );
}
