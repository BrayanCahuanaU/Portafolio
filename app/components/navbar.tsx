import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Inicio", icon: "/navbar/home.svg" },
  { href: "/about", label: "Sobre mi", icon: "/navbar/about.svg" },
  { href: "/works", label: "Proyectos", icon: "/navbar/work.svg" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegacion principal">
        <div className="nav-links">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="nav-link">
              <Image
                src={link.icon}
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
                className="nav-icon"
              />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
