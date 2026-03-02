import { CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/assets/Logo";
import { LogoLong } from "@/components/assets/LogoLong";
import { ArrowConnector } from "../ui/ArrowConnector";

export default function Why() {
  return (
    <div className="relative">
      <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
        Pourquoi <span className="text-indigo-500">Vendy</span> ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto relative px-6">
        {/* Colonne : AVANT (Le Chaos) */}
        <div className="col-span-6 lg:col-span-6 group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 md:p-10 transition-all hover:shadow-xl min-h-[500px] flex flex-col">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-500 text-sm font-bold mb-6">
              L&apos;enfer des DMs
            </span>
            <h3 className="text-3xl font-black text-slate-800 mb-6">
              Avant Vendy
            </h3>
            <ul className="space-y-4">
              {[
                "DMs éparpillés partout",
                "Paiements oubliés",
                "Fichiers perdus",
                "Relances manuelles",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-500 font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTENEUR DES LOGOS */}
          <div className="z-10 relative pt-10 md:pt-0 h-40 md:h-full md:static flex items-center group">
            {/* Version Mobile : Rangée simple et centrée */}
            <div className="grid grid-cols-4  justify-start gap-x-6 gap-y-6 lg:hidden w-full">
              {[
                "whatsapp",
                "typeform",
                "gmail",
                "trello",
                "insta",
                "notion",
              ].map((name) => (
                <Image
                  key={name}
                  src={`/images/logos/${name}.svg`}
                  alt={name}
                  width={32}
                  height={32}
                  className="group-hover:animate-pulse"
                />
              ))}
            </div>

            {/* Version Desktop : Nuage flottant avec positions fixes */}
            <div className="hidden lg:block">
              {/* WhatsApp */}
              <div className="absolute top-[15%] right-[10%] transition-transform duration-500">
                <Image
                  src="/images/logos/whatsapp.svg"
                  alt="whatsapp"
                  width={35}
                  height={35}
                  className="rotate-12 opacity-70 group-hover:opacity-100 transition-opacity group-hover:animate-pulse"
                />
              </div>

              <div className="absolute top-[28%] right-[20%] transition-transform duration-500 ">
                <Image
                  src="/images/logos/typeform.svg"
                  alt="typeform"
                  width={35}
                  height={35}
                  className="rotate-12 opacity-70 group-hover:opacity-100 transition-opacity group-hover:animate-pulse"
                />
              </div>

              {/* Notion */}
              <div className="absolute top-[32%] right-[8%] transition-transform duration-700 ">
                <Image
                  src="/images/logos/notion.svg"
                  alt="notion"
                  width={30}
                  height={30}
                  className="-rotate-12 opacity-70 group-hover:opacity-100 transition-opacity group-hover:animate-pulse"
                />
              </div>

              {/* Gmail */}
              <div className="absolute top-[25%] right-[35%] transition-transform duration-300 ">
                <Image
                  src="/images/logos/gmail.svg"
                  alt="gmail"
                  width={32}
                  height={32}
                  className="rotate-6 opacity-70 group-hover:opacity-100 transition-opacity group-hover:animate-pulse"
                />
              </div>

              {/* Trello */}
              <div className="absolute top-[45%] right-[30%]">
                <Image
                  src="/images/logos/trello.svg"
                  alt="trello"
                  width={60}
                  height={30}
                  className="-rotate-20 opacity-70 group-hover:opacity-100 transition-opacity group-hover:animate-pulse"
                />
              </div>

              {/* Insta */}
              <div className="absolute top-[8%] right-[25%]">
                <Image
                  src="/images/logos/insta.svg"
                  alt="insta"
                  width={28}
                  height={28}
                  className="-rotate-25 opacity-70 group-hover:opacity-100 transition-opacity group-hover:animate-pulse"
                />
              </div>
            </div>
          </div>

          {/* Cercle de fond décoratif */}
          <div className="z-0 absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-slate-50 group-hover:scale-110 transition-transform" />
        </div>
        <div className="z-20 hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <ArrowConnector />
        </div>

        <div className="col-span-6 group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 transition-all hover:shadow-xl">
          <div className="relative z-10 text-black">
            <span className="inline-block px-4 py-1 rounded-full bg-electricBlue/20 text-black text-sm font-bold mb-6 backdrop-blur-md">
              Le Workflow Zen
            </span>
            <h3 className="text-3xl font-black mb-6 ">Avec Vendy</h3>
            <ul className="space-y-4">
              {[
                "Tout est centralisé",
                "Paiements automatisés",
                "Feedback client structuré",
                "Liberté totale de création",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold">
                  <CheckCircle className="text-accent2" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="block lg:hidden h-40 flex items-center justify-center">
            <Logo className="group-hover:scale-200 transition-all" />
          </div>
          {/* Forme géométrique rappelant le reste du site */}
          <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-slate-50 transition-transform group-hover:scale-110" />
          <Sparkles
            className="absolute bottom-10 right-10 text-accent2 opacity-50 group-hover:rotate-12 transition-transform"
            size={40}
          />
          <LogoLong className="hidden lg:block absolute top-10 right-20 group-hover:scale-125 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}
