"use client";

import Image from "next/image";
import { Star, Vote, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy-950 text-white overflow-hidden pt-20 pb-12 border-t border-white/10">
      {/* Star / Geometric background pattern */}
      <div className="absolute inset-0 bg-star-pattern opacity-40 pointer-events-none"></div>

      {/* Decorative Star Svg Background Element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="currentColor" className="text-brand-gold-400">
          <polygon points="100,10 126,75 195,78 139,121 161,189 100,147 39,189 61,121 5,78 74,75" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Voting Banner */}
        <div className="bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-950 rounded-3xl p-8 sm:p-14 border border-brand-gold-500/30 text-center shadow-2xl relative mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Star Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold-500/20 border border-brand-gold-500/40 text-brand-gold-300 mb-6 backdrop-blur-md">
            <Star className="w-4 h-4 fill-brand-gold-400 text-brand-gold-400" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Elecciones CEE 2026
            </span>
            <Star className="w-4 h-4 fill-brand-gold-400 text-brand-gold-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Tu voto construye <br className="hidden sm:inline" />
            <span className="gold-gradient-text">la carrera.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-normal mb-8 leading-relaxed">
            Vota por el equipo al Centro de Alumnos de{" "}
            <strong className="text-white font-semibold">Ingeniería Civil Informática</strong>.
          </p>

          <a
            href="#propuestas"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-extrabold rounded-2xl bg-gradient-to-r from-brand-gold-500 to-brand-gold-400 text-brand-navy-950 shadow-xl shadow-brand-gold-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            <Vote className="w-6 h-6" />
            <span>Revisa nuestro plan completo</span>
          </a>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex items-center shrink-0">
              <Image
                src="/logo-emblem.png"
                alt="Logo UCT"
                width={40}
                height={40}
                className="h-10 w-10 object-contain drop-shadow-md"
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                Candidatura CEE Ingeniería Civil Informática
              </p>
              <p className="text-xs text-slate-400">
                Universidad Católica de Temuco
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-400 flex flex-col sm:flex-row items-center gap-2">
            <span>&copy; 2026 Lista Candidata CEE.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Desarrollado con <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> por y para estudiantes.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
