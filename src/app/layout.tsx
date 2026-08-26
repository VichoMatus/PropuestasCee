import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Un plan real para nuestra carrera | CEE Ingeniería Civil Informática",
  description:
    "Candidatura al Centro de Alumnos de Ingeniería Civil Informática (UCT). Una gestión cercana, transparente y abierta a colaborar.",
  keywords: [
    "CEE",
    "Ingeniería Civil Informática",
    "Centro de Alumnos",
    "UCT",
    "Universidad Católica de Temuco",
    "Propuestas",
    "Ayudantías",
    "Talleres",
  ],
  authors: [{ name: "Vicente Matus, Franco Oyarzo, Daniela Romero, Denys Rodríguez" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-brand-gold-500 selection:text-brand-navy-950">
        {children}
      </body>
    </html>
  );
}
