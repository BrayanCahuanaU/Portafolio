import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/BrayanCahuanaU",
    icon: "/social-media/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/brayan-alexandro-cahuana-utani",
    icon: "/social-media/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/51997767502",
    icon: "/social-media/whatsapp.svg",
  },
  {
    name: "Gmail",
    href: "mailto:cahuanabrayan123@gmail.com",
    icon: "/social-media/gmail.svg",
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span>2026 Brayan Cahuana</span>
          <span>Ingenieria de Sistemas / Software / Soporte TI</span>
        </div>

        <div className="footer-socials">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={social.name}
            >
              <Image src={social.icon} alt={social.name} width={18} height={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
