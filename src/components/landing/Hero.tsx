import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    /* 1. On utilise max-w-[95vw] pour que le bloc occupe toujours 95% de la largeur de l'écran */
    /* 2. On ajoute un peu de padding latéral pour que les bords arrondis ne touchent pas le bord de la fenêtre */
    <div className="relative h-250 rounded-[48px] overflow-hidden pb-12 max-w-6xl xl:max-w-full w-[calc(90%)] 2xl:w-[calc(80%)] mx-auto bg-white shadow-sm mt-4">
      <div className="relative border z-10 flex justify-center pt-24 pb-40 px-8 md:px-16 h-full">
        {/* 3. ICI LE CHANGEMENT : On retire 'max-w-6xl' pour laisser la grille s'étendre */}
        {/* On met 'max-w-none' ou une valeur très haute comme 'max-w-8xl' */}
        <div className="max-w-6xl   w-full gap-16 items-center">
          <div className="space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-7xl text-black font-extrabold tracking-tight leading-[1.05]">
              Vendez vos prestations. <br />
              <span className="text-primary">
                Livrez vos projets sans chaos.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 max-w-2xl leading-relaxed">
              Le seul link-in-bio qui encaisse vos clients et centralise vos
              fichiers, révisions et livrables.
            </p>

            <button className="flex items-center gap-2 max-w-fit bg-primary text-white font-bold py-4 px-10 rounded-2xl text-xl hover:scale-105 transition-all">
              Commencer maintenant
              <ArrowRight size={22} />
            </button>
          </div>

          <div className="absolute right-30 bottom-55 -rotate-10 flex justify-center lg:justify-end">
            {/* Un mockup plus imposant pour remplir l'espace */}
            <Image
              src="/images/meuf.webp"
              alt="Mockup de Vendy"
              width={380}
              height={200}
              sizes="500px"
              className="w-auto h-auto max-w-full max-h-full rounded-2xl border-2 border-dashed border-gray-300"
            />
            {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-124 h-64" /> */}
          </div>
          <div className="absolute right-30 bottom-55 rotate-10 flex justify-center lg:justify-end">
            {/* Un mockup plus imposant pour remplir l'espace */}
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-104" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
