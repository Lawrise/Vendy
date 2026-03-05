import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-56 w-full bg-primary flex flex-col items-center gap-16">
      <div className="flex flex-col items-center text-center space-y-8 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white leading-[1.05] tracking-tight">
          Vendez simplement. <br />
          Gérez comme un pro.
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-gray-100 leading-relaxed">
          Créez votre boutique, gérez vos clients et livrez votre travail —
          depuis un seul espace simple et professionnel.
        </p>

        <button className="flex items-center gap-2 bg-white text-black font-semibold py-4 px-10 rounded-2xl text-lg hover:gap-4 transition-all">
          Rejoindre la liste d’attente
          <ArrowRight size={20} />
        </button>
        <p className="text-sm text-gray-300">
          Beta privée • Accès anticipé pour les premiers créateurs
        </p>
      </div>
      <div className="w-[90%] max-w-6xl aspect-video bg-white rounded-3xl shadow-2xl border border-gray-200"></div>
    </section>
  );
}
