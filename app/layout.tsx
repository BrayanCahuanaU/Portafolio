import type { Metadata } from "next";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brayan Cahuana | Ingenieria de Sistemas",
  description:
    "Portfolio de Brayan Alexandro Cahuana Utani: desarrollo web, soporte TI, redes y proyectos academicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
