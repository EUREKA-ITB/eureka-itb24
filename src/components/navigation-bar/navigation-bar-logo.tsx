import Image from "next/image";
import Link from "next/link";

export default function NavigationBarLogo() {
  return (
    <Link
      href="/"
      aria-label="Go back to homepage"
      className="flex items-center font-sans text-2xl font-bold [text-shadow:4px_2px_16px_white]"
    >
      <Image
        src="/logo_e.png"
        alt="Logo EUREKA! ITB"
        style={{ height: 46, width: "auto" }}
        width="0"
        height="0"
      />
      <span className="hidden xs:inline">EUREKA</span>
      <span className="ml-[0.5] hidden -rotate-12 text-3xl text-orange-200 xs:inline">
        !
      </span>
      <span className="ml-2 hidden xs:inline">ITB</span>
    </Link>
  );
}
