"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight, Award } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "El Equipo", href: "#equipo" },
    { name: "Visión", href: "#vision" },
    { name: "Propuestas", href: "#propuestas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy-950/90 backdrop-blur-md border-b border-white/10 shadow-xl py-3"
          : "bg-brand-navy-950/80 backdrop-blur-sm py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold-400 rounded-lg p-1"
          >
            <div className="relative h-10 w-10 flex items-center shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo-emblem.png"
                alt="Logo UCT"
                width={40}
                height={40}
                className="h-10 w-10 object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white tracking-wide text-base sm:text-lg">
                  CEE <span className="text-brand-gold-400">Informática</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-gold-500/20 text-brand-gold-300 border border-brand-gold-500/30">
                  UCT
                </span>
              </div>
              <span className="text-xs text-slate-300 hidden sm:inline-block font-medium">
                Ingeniería Civil Informática
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-brand-gold-400 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#propuestas"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-brand-gold-500 to-brand-gold-400 text-brand-navy-950 hover:from-brand-gold-400 hover:to-brand-gold-300 transition-all shadow-md shadow-brand-gold-500/20 hover:scale-105 active:scale-95"
            >
              <span>Ver Propuestas</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? <X className="w-6 h-6 text-brand-gold-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-brand-navy-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 transition-all animate-in slide-in-from-top-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-100 hover:bg-white/10 hover:text-brand-gold-400 transition-all border border-transparent hover:border-white/10"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#propuestas"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-brand-gold-500 to-brand-gold-400 text-brand-navy-950 font-bold shadow-lg shadow-brand-gold-500/20"
            >
              <Award className="w-5 h-5 text-brand-navy-950" />
              <span>Ver Propuestas</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
