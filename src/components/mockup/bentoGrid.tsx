import {
  Layout,
  CreditCard,
  Sparkles,
  CheckCircle,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function BentoGridVendy() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-12 gap-4 auto-rows-[180px]">
        {/* --- Bloc Principal : Portail Client --- */}
        <div className="group relative col-span-12 md:col-span-8 row-span-2 overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:shadow-2xl">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2EE6A6] text-black">
                <Layout size={24} />
              </div>
              <h3 className="text-3xl font-black text-black tracking-tight">
                Portail Client{" "}
                <span className="text-[#5B5CFF]">Auto-Généré</span>
              </h3>
              <p className="mt-4 max-w-xs text-slate-500 font-medium">
                Vos clients reçoivent leurs accès instantanément. Fini
                l'onboarding manuel par email.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#2EE6A6] bg-black w-fit px-4 py-2 rounded-full">
              <CheckCircle size={16} /> Flux automatisé activé
            </div>
          </div>
          {/* Décoration en arrière-plan */}
          <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#5B5CFF]/5 transition-transform group-hover:scale-110" />
        </div>

        {/* --- Bloc : Paiements & Facturation --- */}
        <div className="group relative col-span-12 md:col-span-4 row-span-2 overflow-hidden rounded-3xl bg-[#5B5CFF] p-8 transition-all hover:shadow-[0_20px_40px_rgba(91,92,255,0.3)] tracking-tight text-white">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#5B5CFF] shadow-lg">
              <CreditCard size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold leading-tight">
                Paiements &<br />
                Facturation
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Encaissez en 1 clic et générez les factures automatiquement.
              </p>
            </div>
          </div>
          {/* Forme géométrique pour le style 2026 */}
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full border-[12px] border-white/10 transition-transform group-hover:rotate-12" />
        </div>

        {/* --- Bloc : Analytics (Remplissage du vide) --- */}
        <div className="group relative col-span-12 md:col-span-4 row-span-2 overflow-hidden rounded-3xl bg-electricBlue p-8 transition-all hover:shadow-xl">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-electricBlue">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Data Real-time</h3>
              <p className="text-slate-400 text-sm mt-2">
                Suivez vos conversions et vos revenus en temps réel.
              </p>
            </div>
            <div className="h-24 w-full bg-white/5 rounded-lg flex items-end gap-1 p-2">
              <div className="flex-1 bg-accent2 h-[40%] rounded-sm animate-pulse" />
              <div className="flex-1 bg-accent2 h-[70%] rounded-sm" />
              <div className="flex-1 bg-accent2 h-[50%] rounded-sm" />
              <div className="flex-1 bg-accent2 h-[90%] rounded-sm" />
            </div>
          </div>
        </div>

        {/* --- Bloc Large : Boutique 2.0 --- */}
        <div className="group relative col-span-12 md:col-span-8 row-span-2 overflow-hidden rounded-3xl border-2 border-black bg-white p-8 transition-all hover:shadow-2xl">
          <div className="relative z-10 flex flex-col h-full items-start justify-between">
            <div className="w-full">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={20} className="text-[#5B5CFF]" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#5B5CFF]">
                    Next Gen
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Vendy OS v1.0
                </span>
              </div>
              <h3 className="text-3xl font-black italic text-black">
                Boutique &quot;Link-in-Bio&quot; 2.0
              </h3>
              <p className="mt-2 text-slate-600 max-w-md font-medium leading-relaxed">
                Transformez votre audience sociale en clients fidèles avec une
                interface qui ne ressemble à aucune autre.
              </p>
            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-black px-8 py-4 font-bold text-white transition-all hover:bg-[#5B5CFF] hover:scale-[1.02] active:scale-95">
              Lancer ma boutique <ArrowRight size={18} />
            </button>
          </div>

          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
