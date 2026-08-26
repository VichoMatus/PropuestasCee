"use client";

import { Target, Lightbulb, Users2, Eye, Compass, TrendingUp, CheckCircle } from "lucide-react";

export default function Vision() {
  const ejes = [
    {
      titulo: "Más Oportunidades",
      subtitulo: "Desarrollo académico y profesional",
      descripcion:
        "Facilitamos el acceso transparente a ayudantías remuneradas y organizamos talleres prácticos para insertarte con ventaja en la industria tecnológica.",
      icono: TrendingUp,
      badge: "Eje 01",
      accentBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      titulo: "Más Comunidad",
      subtitulo: "Vida de carrera e integración",
      descripcion:
        "Fortalecemos los lazos estudiantiles más allá de las aulas con eventos tradicionales, servidores comunitarios de juegos y torneos inclusivos.",
      icono: Users2,
      badge: "Eje 02",
      accentBg: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    },
    {
      titulo: "Cuentas Claras",
      subtitulo: "Transparencia activa e informes",
      descripcion:
        "Administración ética y responsable de los recursos estudiantiles. Rendición pública y detallada de ingresos y gastos tras cada actividad.",
      icono: Eye,
      badge: "Eje 03",
      accentBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    },
  ];

  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/30 text-brand-gold-600 mb-4">
            <Compass className="w-4 h-4 text-brand-gold-500" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Nuestra Visión
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Más oportunidades, más comunidad y{" "}
            <span className="gold-gradient-text">cuentas claras.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
            Tres ejes simples que guían cada una de nuestras propuestas para la carrera.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ejes.map((eje, idx) => {
            const Icon = eje.icono;
            return (
              <div
                key={eje.titulo}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold border ${eje.accentBg}`}
                    >
                      {eje.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {eje.titulo}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 mb-4">
                    {eje.subtitulo}
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {eje.descripcion}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-brand-navy-950">
                  <CheckCircle className="w-4 h-4 text-brand-gold-500" />
                  <span>Compromiso garantizado</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
