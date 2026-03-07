import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 bg-white rounded-b-4xl w-full px-6 md:px-12 flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl w-full gap-12 items-center">
        {/* Colonne Texte */}
        <div className="flex flex-col items-start gap-8 text-start max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-[1.05] tracking-tight">
            Vendez, collaborez et livrez{" "}
            <span className="">au même endroit</span>
          </h1>

          <ul>
            <li className="flex items-center gap-2 mb-4 text-lg text-gray-700">
              <CheckCircle2 className="text-green-500" /> Transformez votre lien
              en bio en boutique pro avec paiement sécurisé intégré.
            </li>
            <li className="flex items-center gap-2 mb-4 text-lg text-gray-700">
              <CheckCircle2 className="text-green-500" />
              Récupérez toutes les ressources nécessaires via un onboarding
              structuré et intelligent.
            </li>
            <li className="flex items-center gap-2 mb-4 text-lg text-gray-700">
              <CheckCircle2 className="text-green-500" />
              Offrez un portail privé à vos clients pour suivre l&apos;évolution
              et valider chaque étape du livrable.
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
        <div className="relative w-full  drop-shadow-2xl">
          {/* <Image
            src="/images/tel4.png"
            alt="Hero Image"
            fill
            priority // Charge l'image immédiatement (important pour le Hero)
            className="object-contain" // Empêche de couper le haut ou le bas du tel
            sizes="(max-width: 1024px) 100vw, 50vw"
          /> */}
        </div>
      </div>
    </section>
  );
}
