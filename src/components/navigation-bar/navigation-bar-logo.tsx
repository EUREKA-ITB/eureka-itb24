import Image from "next/image";

export default function NavigationBarLogo() {
  return (
    <div className="flex items-center text-2xl font-bold [text-shadow:4px_2px_16px_white]">
      <Image
        src="/logo_e.png"
        alt="Logo EUREKA! ITB"
        width={45}
        height={50}
      />
      <span className="hidden xs:inline">EUREKA</span>
      <span className="ml-[0.5] hidden -rotate-12 text-3xl text-orange-200 xs:inline">
        !
      </span>
      <span className="ml-2 hidden xs:inline">ITB</span>
    </div>
  );
}
