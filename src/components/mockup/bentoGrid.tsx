import {
  Layout,
  CreditCard,
  Sparkles,
  CheckCircle,
  BarChart3,
  ArrowRight,
  Store,
} from "lucide-react";
import Image from "next/image";

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
                l&apos;onboarding manuel par email.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-white bg-accent2 w-fit px-4 py-2 rounded-full">
              <CheckCircle size={16} /> Flux automatisé activé
            </div>
          </div>
          {/* Décoration en arrière-plan */}
          <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#5B5CFF]/5 transition-transform group-hover:scale-110" />
        </div>

        {/* --- Bloc : Paiements & Facturation --- */}
        <div className="group relative col-span-12 md:col-span-4 row-span-2 overflow-hidden rounded-3xl bg-[#5B5CFF] p-8 transition-all hover:shadow-[0_20px_40px_rgba(91,92,255,0.3)] tracking-tight text-white">
          <div className="relative z-10 flex h-full flex-col gap-y-8">
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

            <Image
              src="/images/logos/StripeSquare.svg"
              alt="Logo Stripe"
              width={50}
              height={50}
            />
          </div>
          {/* Forme géométrique pour le style 2026 */}
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full border-[12px] border-white/10 transition-transform group-hover:rotate-12" />
        </div>

        {/* --- Bloc : Analytics (Remplissage du vide) --- */}
        <div className="group relative col-span-12 order-2 md:col-span-4 md:order-1 row-span-2 overflow-hidden rounded-3xl bg-electricBlue p-8 transition-all hover:shadow-xl">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-electricBlue">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Data Real-time</h3>
              <p className="text-slate-200 text-sm mt-2">
                Suivez vos conversions et vos revenus en temps réel.
              </p>
            </div>
            <div className="group h-24 w-full bg-white/5 rounded-lg flex items-end gap-1 p-2">
              <div className="flex-1 bg-accent2 h-[40%] rounded-sm group-hover:animate-pulse" />
              <div className="flex-1 bg-accent2 h-[70%] rounded-sm group-hover:animate-pulse" />
              <div className="flex-1 bg-accent2 h-[50%] rounded-sm group-hover:animate-pulse" />
              <div className="flex-1 bg-accent2 h-[90%] rounded-sm group-hover:animate-pulse" />
            </div>
            <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full border-[12px] border-white/10 transition-transform group-hover:rotate-12" />
          </div>
        </div>

        {/* --- Bloc Large : Boutique 2.0 --- */}
        <div className="group relative col-span-12 order-1 md:col-span-8 md-order-2 row-span-2 overflow-hidden rounded-3xl bg-white p-8 transition-all hover:shadow-2xl">
          <div className="relative z-10 flex flex-col h-full items-start justify-between">
            <div className="w-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent2 text-white">
                <Store size={24} />
              </div>
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

            <button className="flex items-center gap-2 max-w-fit sm:w-auto bg-accent2 text-white font-bold py-2 px-4 rounded-2xl text-lg hover:gap-6 transition-all">
              Lancer ma boutique
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Décoration en arrière-plan */}
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#5B5CFF]/5 transition-transform group-hover:scale-110" />

          {/* Subtle grid pattern background
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
