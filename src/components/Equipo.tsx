"use client";

import { UserCheck, Shield, DollarSign, FileText, Sparkles, HeartHandshake } from "lucide-react";

export default function Equipo() {
  const equipo = [
    {
      nombre: "Vicente Matus Mora",
      cargo: "Presidente",
      icono: UserCheck,
      iniciales: "VM",
      color: "from-amber-500/20 to-brand-gold-500/10",
      borderColor: "border-brand-gold-500/40",
      badgeBg: "bg-brand-gold-500/10 text-brand-gold-600 border-brand-gold-500/30",
    },
    {
      nombre: "Franco Oyarzo Calisto",
      cargo: "Vicepresidente",
      icono: Shield,
      iniciales: "FO",
      color: "from-blue-500/20 to-brand-navy-600/10",
      borderColor: "border-blue-500/30",
      badgeBg: "bg-blue-500/10 text-blue-700 border-blue-500/30",
    },
    {
      nombre: "Daniela Romero Coliñir",
      cargo: "Secretaría de Finanzas",
      icono: DollarSign,
      iniciales: "DRC",
      color: "from-emerald-500/20 to-teal-600/10",
      borderColor: "border-emerald-500/30",
      badgeBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
    },
    {
      nombre: "Denys Rodríguez Noguera",
      cargo: "Secretaría General",
      icono: FileText,
      iniciales: "DN",
      color: "from-indigo-500/20 to-purple-600/10",
      borderColor: "border-indigo-500/30",
      badgeBg: "bg-indigo-500/10 text-indigo-700 border-indigo-500/30",
    },
  ];

  return (
    <section id="equipo" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900/5 border border-brand-navy-900/10 mb-4">
            <Sparkles className="w-4 h-4 text-brand-gold-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-900">
              El Equipo Candidato
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-navy-950 tracking-tight mb-4">
            Quiénes lo van a hacer.
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Un equipo preparado, comprometido y motivado para transformar la carrera de Ingeniería Civil Informática.
          </p>
        </div>

        {/* Members Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {equipo.map((persona, index) => {
            const Icon = persona.icono;
            return (
              <div
                key={persona.nombre}
                className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Top Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${persona.color}`}
                ></div>

                <div>
                  {/* Avatar / Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-navy-950 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                      <span className="gold-gradient-text">{persona.iniciales}</span>
                    </div>
                    <div
                      className={`p-2.5 rounded-xl ${persona.badgeBg} border flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-navy-700 transition-colors mb-1">
                    {persona.nombre}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold tracking-wide uppercase mb-4">
                    {persona.cargo}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                  <span>Candidatura CEE 2026</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-brand-navy-950 text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center shrink-0 border border-brand-gold-500/30 shadow-inner">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                Compromiso de Gestión Abierta
              </h4>
              <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
                &ldquo;Una gestión cercana, transparente y abierta a colaborar con estudiantes, docentes y autoridades.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
