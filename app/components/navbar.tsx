// components/navbar.tsx
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home", icon: "/navbar/home.svg" },
  { href: "/about", label: "About", icon: "/navbar/about.svg" },
  { href: "/works", label: "Work", icon: "/navbar/work.svg" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegacion principal">
        <div className="nav-links">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="nav-link">
              <span>{link.label}</span>
              <Image
                src={link.icon}
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}