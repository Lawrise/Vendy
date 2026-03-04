import {
  Layout,
  CreditCard,
  Sparkles,
  CheckCircle,
  BarChart3,
  ArrowRight,
  Store,
} from "lucide-react";

export default function BentoGridVendy() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 auto-rows-[180px]">
        {/* --- Bloc Principal : Portail Client --- */}
        <div className="group relative col-span-12 md:col-span-8 row-span-2 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Layout size={22} />
              </div>

              <h3 className="text-3xl font-semibold text-zinc-900 tracking-tight">
                Portail Client Intégré
              </h3>

              <p className="mt-4 max-w-xs text-zinc-600">
                Vos clients reçoivent leurs accès instantanément. Fini
                l’onboarding manuel par email.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-white bg-primary w-fit px-4 py-2 rounded-full">
              <CheckCircle size={16} /> Flux automatisé
            </div>
          </div>
        </div>

        {/* --- Bloc : Paiements & Facturation --- */}
        <div className="group relative col-span-12 md:col-span-4 row-span-2 overflow-hidden rounded-3xl border border-zinc-200 bg-primary p-8 transition-all hover:shadow-xl">
          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary">
              <CreditCard size={22} />
            </div>

            <h3 className="text-3xl font-semibold text-white leading-tight">
              Paiements &<br />
              Facturation
            </h3>

            <p className="mt-3 text-zinc-200">
              Encaissez en 1 clic et générez les factures automatiquement.
            </p>
          </div>
        </div>

        {/* --- Bloc : Analytics --- */}
        <div className="group relative col-span-12 order-2 md:col-span-4 md:order-1 row-span-2 overflow-hidden rounded-3xl border border-zinc-200 bg-primary p-8 transition-all hover:shadow-xl">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary">
                <BarChart3 size={22} />
              </div>

              <h3 className="text-3xl font-semibold text-white leading-tight">
                Données en temps réel
              </h3>

              <p className="text-zinc-200 mt-3">
                Suivez vos conversions et vos revenus simplement.
              </p>
            </div>

            <div className="h-24 w-full bg-primary-400 rounded-lg flex items-end gap-1 p-2">
              <div className="flex-1 bg-white h-[40%] rounded-sm" />
              <div className="flex-1 bg-white h-[70%] rounded-sm" />
              <div className="flex-1 bg-white h-[50%] rounded-sm" />
              <div className="flex-1 bg-white h-[90%] rounded-sm" />
            </div>
          </div>
        </div>

        {/* --- Bloc Large : Boutique --- */}
        <div className="group relative col-span-12 order-1 md:col-span-8 md:order-2 row-span-2 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl">
          <div className="relative z-10 flex flex-col h-full items-start justify-between">
            <div className="w-full">
              <div className="mb-4 flex gap-x-6 items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Store size={22} />
                </div>

                <div className="flex items-center gap-2 text-zinc-500">
                  <Sparkles size={18} />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Nouvelle génération
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-semibold text-zinc-900">
                Boutique “Link-in-Bio”
              </h3>

              <p className="mt-3 text-zinc-600 max-w-md leading-relaxed">
                Transformez votre audience sociale en clients fidèles avec une
                interface claire et structurée.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-primary text-white font-semibold py-3 px-5 rounded-2xl text-base hover:bg-primary-600 hover:gap-6 transition-all">
              Essayer
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
