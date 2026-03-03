import TelephoneMockup from "@/components/mockup/telephone";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-bgWhite mb-24 pb-12">
      {/* fond pour le separateur penche ta capte */}
      <div className="absolute inset-0 bg-primary -skew-y-3 origin-top-left scale-105 -translate-y-12 z-0"></div>

      {/* 3. Le contenu (indépendant de l'inclinaison du fond) */}
      <div className="relative z-10 w-full flex justify-center pt-24 pb-40">
        <div className="max-w-6xl grid grid-cols-2 w-full px-6">
          <div className="space-y-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl text-white font-extrabold tracking-tight">
              Vendez vos prestations. <br />
              <span className="text-secondary">
                Livrez vos projets sans chaos.
              </span>
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              Le seul link-in-bio qui encaisse vos clients et centralise vos
              fichiers, revisions et livrable. Fini l&apos;enfer des DMs
              chaotiques.
            </p>

            <button className="flex items-center gap-2 max-w-fit bg-secondary text-white font-bold py-3 px-6 rounded-2xl text-lg hover:gap-6 transition-all">
              Commencer
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex justify-end">
            <TelephoneMockup />
          </div>
        </div>
      </div>
    </div>
  );
}
