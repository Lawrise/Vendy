import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 bg-white rounded-b-4xl w-full px-6 md:px-12 flex flex-col items-center">
      <div className="flex flex-col max-w-7xl w-full gap-12 items-center">
        {/* Colonne Texte */}
        <div className="flex flex-col items-center gap-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-[1.05] tracking-tight">
            Vendez, collaborez et livrez{" "}
            <span className="">au même endroit</span>
          </h1>

          <ul className="flex flex-col items-center">
            <li className="flex items-center gap-2 mb-4 text-lg text-gray-700">
              <CheckCircle2 className="text-green-500" /> Boutique pro
              configurée en 2 minutes avec paiements sécurisés.
            </li>
            <li className="flex items-center gap-2 mb-4 text-lg text-gray-700">
              <CheckCircle2 className="text-green-500" />
              Récupérez automatiquement les fichiers et infos de vos clients
              après l&apos;achat.
            </li>
            <li className="flex items-center gap-2 mb-4 text-lg text-gray-700">
              <CheckCircle2 className="text-green-500" />
              Espace client privé pour valider vos étapes et envoyer vos
              fichiers finaux.
            </li>
          </ul>

          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 bg-primary text-white font-semibold py-4 px-10 rounded-2xl text-lg hover:gap-4 transition-all w-fit">
              Rejoindre la liste d&apos;attente
              <ArrowRight size={20} />
            </button>
            <p className="text-sm text-gray-700">
              Beta privée • Accès anticipé pour les premiers créateurs
            </p>
          </div>
        </div>

        {/* Colonne Mockup (C'est ici que ça se joue) */}
        <div className="relative w-full aspect-square lg:aspect-video drop-shadow-2xl">
          <Image
            src="/images/HeroImage.png"
            alt="hero"
            fill
            className="object-contain" // ou "object-cover" selon si tu veux rogner ou voir l'image entière
            priority // Recommandé car c'est l'image principale au-dessus du pli
          />
        </div>
      </div>
    </section>
  );
}
