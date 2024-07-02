import FooterSocialMedia from "./footer-social-media";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-20 w-full border-t bg-background/80 text-xs backdrop-blur">
      <div className="container flex items-center justify-between">
        <p>
          &copy; 2024 | <span className="font-bold">EUREKA! ITB</span>
        </p>
        <FooterSocialMedia />
      </div>
    </footer>
  );
}
