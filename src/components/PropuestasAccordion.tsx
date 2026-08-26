"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  Gamepad2,
  Code2,
  BookOpenCheck,
  Receipt,
  CheckCircle2,
  Award,
  TrendingUp,
  Users,
  ShieldCheck,
  Terminal,
  Zap,
  Sparkles,
  Trophy,
  FileCode2,
} from "lucide-react";

export default function PropuestasAccordion() {
  const talleresTags = [
    "LaTeX",
    "Git",
    "Linux",
    "CV & portafolio",
    "Entrevistas técnicas",
    "Ciberseguridad",
    "IA responsable",
  ];

  return (
    <section id="propuestas" className="py-24 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-950 text-brand-gold-400 mb-4 shadow-md border border-brand-gold-500/20">
            <Award className="w-4 h-4 text-brand-gold-400" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Propuestas Específicas
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-navy-950 tracking-tight mb-4">
            Un plan con acciones <span className="gold-gradient-text">concretas.</span>
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            Haz clic en cada área para explorar el detalle de nuestras iniciativas diseñadas para tu día a día en la carrera.
          </p>
        </div>

        {/* Main Interactive Accordion Component */}
        <Accordion type="single" collapsible defaultValue="ayudantias" className="w-full space-y-4">
          {/* 1. Registro de Candidaturas a Ayudantías */}
          <AccordionItem value="ayudantias" className="border-2 border-slate-200">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center shrink-0 shadow-sm border border-brand-gold-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Registro de Candidaturas a Ayudantías
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Acceso transparente, ordenado y equitativo a vacantes académicas
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <p className="text-slate-700 leading-relaxed text-base font-normal">
                  Una nómina ordenada y verificable de estudiantes que quieren ser ayudantes. Enfocado especialmente en abrir oportunidades para los estudiantes de los primeros años.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 text-sm block font-semibold mb-0.5">
                      Requisito Académico:
                    </strong>
                    <span className="text-sm text-slate-600">
                      Aprobar el <strong className="text-slate-900">Curso Básico de Formación para Ayudantes</strong>.
                    </span>
                  </div>
                </div>

                {/* Highlight Callout Banner */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-navy-800 text-white shadow-lg border border-brand-gold-500/30 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold-500/20 text-brand-gold-400 shrink-0 border border-brand-gold-500/30">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-gold-300 font-bold uppercase tracking-wider block">
                      Oportunidad Académica
                    </span>
                    <p className="text-base sm:text-lg font-bold text-white">
                      &ldquo;Más acceso a ayudantías = trabajo universitario con buena remuneración.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 2. Comunidad y Convivencia */}
          <AccordionItem value="comunidad" className="border-2 border-slate-200">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-brand-gold-500/20 text-brand-gold-600 flex items-center justify-center shrink-0 shadow-sm border border-brand-gold-500/30">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Comunidad y Convivencia
                    </h3>
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900">
                      Vida de carrera, no solo clases.
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold italic">
                    Espacios para compartir y recrearnos juntos
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <p className="text-slate-700 leading-relaxed text-base">
                  Queremos fortalecer los espacios de recreación, esparcimiento y unión de todos los estudiantes de la carrera:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-gold-400 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Fiestas Patrias con ChoriBytes (Choripanes)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Celebración para las Fiestas Patrias con comida, música y compartir en comunidad.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-gold-400 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-3">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Torneos de Videojuegos</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Competencias inclusivas de Super Smash Bros, Mario Kart, EA Sports FC y las franquicias que se sumen por votación de la carrera.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 3. Talleres para el mundo real */}
          <AccordionItem value="talleres" className="border-2 border-slate-200">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center shrink-0 shadow-sm border border-blue-500/20">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Talleres para el Mundo Real
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Herramientas prácticas para la carrera y el trabajo
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <p className="text-slate-700 leading-relaxed text-base">
                  Herramientas útiles para la carrera y el trabajo, con egresados y profesionales del área de la informática:
                </p>

                {/* Visual Tags / Badges */}
                <div className="flex flex-wrap gap-2.5 py-2">
                  {talleresTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-brand-navy-950 text-white border border-brand-gold-500/40 shadow-sm hover:scale-105 hover:border-brand-gold-400 transition-all duration-200 cursor-default"
                    >
                      <Terminal className="w-3.5 h-3.5 text-brand-gold-400" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-950 text-sm flex items-center gap-3">
                  <FileCode2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>
                    Capacitaciones orientadas a fortalecer tus informes académicos, tu portafolio en GitHub y tus entrevistas técnicas.
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 4. Iniciativas complementarias */}
          <AccordionItem value="complementarias" className="border-2 border-slate-200">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm border border-emerald-500/20">
                  <BookOpenCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Iniciativas Complementarias
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    Apoyo e inducción constante para estudiantes
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-2">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">
                        Programa de Acompañamiento para Estudiantes Nuevos
                      </h4>
                      <span className="text-xs text-emerald-700 font-semibold">
                        Inducción e integración a la carrera
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Tutorías, orientación constante y espacio de mentoría entre pares pensado para guiar a las y los estudiantes de primer año en su adaptación a la vida universitaria e informática.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 5. Transparencia */}
          <AccordionItem value="transparencia" className="border-2 border-slate-200">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-700 flex items-center justify-center shrink-0 shadow-sm border border-purple-500/20">
                  <Receipt className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Transparencia Total
                    </h3>
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-900">
                      Cada peso, a la vista.
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold italic">
                    Administración responsable y clara de los recursos
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <p className="text-slate-700 leading-relaxed text-base font-normal">
                  Cada peso, a la vista. Rendición de ingresos y gastos después de cada actividad. Los recursos estudiantiles administrados con responsabilidad, objetividad y publicados periódicamente para conocimiento de toda la carrera.
                </p>

                <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200 text-purple-950 text-sm font-medium flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-purple-700 shrink-0" />
                  <span>
                    Publicación abierta de informes de finanzas y balances tras cada evento o iniciativa realizada.
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
