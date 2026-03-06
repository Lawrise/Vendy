import { CheckCircle, X } from "lucide-react";
import Image from "next/image";
import Title from "../ui/Title";
import { LogoLong } from "../assets/LogoLong";

export default function Why() {
  return (
    <div className="relative max-w-6xl w-full">
      <Title
        title="Offrez une expérience professionnelle à vos clients."
        surligne=" "
      />
      <div></div>
      {/* <h2 className="text-6xl font-extrabold text-start mb-4 tracking-tight">
        Un espace organise pour renvoye une image professionnelle
      </h2>
      <p className="text-lg text-slate-800 mb-12">
        Organiser vos ventes n&apos;est plus un défi
      </p> */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12  mx-auto relative">
        {/* Colonne : AVANT (Le Chaos) */}
        <div className="col-span-6 lg:col-span-6 group relative overflow-hidden rounded-2xl p-6 md:p-10 transition-all border border-gray-200 hover:border-gray-400 min-h-100 flex flex-col">
          <div className=" z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-zinc-100 text-zinc-800 text-sm font-bold mb-6">
              Le chaos opérationnel
            </span>
            <h3 className="text-3xl font-black text-slate-800 mb-6">
              Actuellement
            </h3>
            <ul className="space-y-4">
              {[
                "Des DMs qui deviennent votre CRM",
                "Des paiements confirmés… mais sans suivi",
                "Des fichiers éparpillés entre 4 outils",
                "Un client qui ne sait jamais où il en est",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-500 font-medium"
                >
                  <X size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTENEUR DES LOGOS */}
          <div className="grid grid-cols-6 items-center justify-center gap-x-6 gap-y-6 w-full z-10 mt-12">
            {[
              "whatsapp",
              "typeform",
              "gmail",
              "trelloS",
              "insta",
              "notion",
            ].map((name) => (
              <Image
                key={name}
                src={`/images/logos/${name}.svg`}
                alt={name}
                width={32}
                height={32}
                className="grayscale"
              />
            ))}
          </div>

          {/* Version Desktop : Nuage flottant avec positions fixes */}

          {/* Cercle de fond décoratif */}
          {/* <div className="z-0 absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-slate-50 group-hover:scale-110 transition-transform" /> */}
        </div>
        {/* Colonne : APRES (Le Workflow) */}
        <div className="col-span-6 group relative overflow-hidden rounded-2xl  bg-white p-10 border border-gray-200 transition-all hover:border-gray-400 min-h-100 flex flex-col">
          <div className="relative z-10 text-black">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-zinc-800 text-sm font-bold mb-6 backdrop-blur-md">
              Le Workflow structuré
            </span>
            <h3 className="text-3xl font-black mb-6 ">Avec Vendy</h3>
            <ul className="space-y-4">
              {[
                "Chaque client reçoit son espace dédié",
                "Paiements, fichiers, messages — au même endroit",
                "Un suivi clair des prochaines étapes",
                "Une image professionnelle sans effort",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold">
                  <CheckCircle className="text-primary" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center mt-8">
            <LogoLong className=" transition-all" />
            
          </div>
          {/* Forme géométrique rappelant le reste du site */}
          {/* <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-slate-50 transition-transform group-hover:scale-110" />
          <Sparkles
            className="absolute bottom-10 right-10 text-secondary opacity-50 group-hover:rotate-12 transition-transform"
            size={40}
          /> */}
        </div>
      </div>
    </div>
  );
}
