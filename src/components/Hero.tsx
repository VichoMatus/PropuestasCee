"use client";

import Image from "next/image";
import { ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Users, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-navy-950 text-white">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-star-pattern opacity-60"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-navy-600/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-brand-gold-500/30 backdrop-blur-md mb-8 animate-float shadow-lg shadow-black/20">
          <Image
            src="/logo-emblem.png"
            alt="Emblema UCT"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-brand-gold-200 uppercase">
            Lista Candidata CEE 2026 • Universidad Católica de Temuco
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Un plan real para <br className="hidden sm:inline" />
          <span className="gold-gradient-text">nuestra carrera.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed mb-10">
          Candidatura al Centro de Alumnos de{" "}
          <strong className="text-white font-semibold">Ingeniería Civil Informática</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#propuestas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-brand-gold-500 via-brand-gold-400 to-amber-400 text-brand-navy-950 shadow-xl shadow-brand-gold-500/25 hover:shadow-brand-gold-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Ver Propuestas</span>
            <ArrowDown className="w-5 h-5 text-brand-navy-950 animate-bounce" />
          </a>
          <a
            href="#equipo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Users className="w-5 h-5 text-brand-gold-400" />
            <span>Conoce al Equipo</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-brand-gold-400 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-white">Transparencia Total</p>
              <p className="text-xs text-slate-400">Rendición clara de cuentas</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Rocket className="w-6 h-6 text-brand-gold-400 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-white">Impulso Académico</p>
              <p className="text-xs text-slate-400">Nómina de ayudantías y talleres</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Users className="w-6 h-6 text-brand-gold-400 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-white">Vida Universitaria</p>
              <p className="text-xs text-slate-400">Eventos, esports y comunidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
