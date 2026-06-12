import type { Metadata } from "next";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Desarrollador",
  description: "Portfolio profesional con trabajos, experiencia y contacto.",
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
