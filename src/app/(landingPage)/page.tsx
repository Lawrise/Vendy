import TelephoneMockup from "../../components/mockup/telephone";
import Bentogrid from "../../components/mockup/bentoGrid";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/assets/Logo";
// import TelephoneMockup from "@/components/mockup/telephone";

export default function Home() {
  return (
    <div className="min-h-screen bg-bgWhite text-myBlack font-sans flex flex-col items-center">
      {/* Header */}

      <header className="flex justify-between px-6 md:px-12 py-6 items-center w-full bg-electricBlue">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="font-bold text-4xl tracking-tight text-white">
            Vendy<span className="text-indigo-500">.</span>
          </p>
        </div>
        <p>COn</p>
        {/* <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium text-gray-500">
            <li className="cursor-pointer hover:text-black">Produit</li>
            <li className="cursor-pointer hover:text-black">Tarifs</li>
            <li className="cursor-pointer hover:text-black">Aide</li>
          </ul>
        </nav>
        <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all">
          Connexion
        </button> */}
      </header>

      {/* Hero Section */}
      {/* 1. Le parent bloque tout débordement horizontal */}
      <div className="relative w-full overflow-hidden bg-bgWhite mb-24 pb-12">
        {/* 2. La div de fond (Electric Blue) séparée du contenu */}
        <div className="absolute inset-0 bg-electricBlue -skew-y-3 origin-top-left scale-105 -translate-y-12 z-0"></div>

        {/* 3. Le contenu (indépendant de l'inclinaison du fond) */}
        <div className="relative z-10 w-full flex justify-center pt-24 pb-40">
          <div className="max-w-6xl grid grid-cols-2 w-full px-6">
            <div className="space-y-8 flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl text-white font-extrabold tracking-tight">
                Vendez vos prestations. <br />
                <span className="text-accent2">
                  Livrez vos projets sans chaos.
                </span>
              </h1>

              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                Le seul link-in-bio qui encaisse vos clients et centralise vos
                fichiers, revisions et livrable. Fini l&apos;enfer des DMs
                chaotiques.
              </p>

              <button className="flex items-center gap-2 max-w-fit bg-accent2 text-white font-bold py-3 px-6 rounded-2xl text-lg hover:gap-6 transition-all">
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
      <main className="mx-6 md:mx-12 max-w-6xl flex flex-col gap-y-24">
        <div className="relative">
          <h2 className="text-4xl font-black text-center mb-12 tracking-tight">
            Pourquoi <span className="text-indigo-500">Vendy</span> ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto relative px-6">
            {/* Colonne : AVANT (Le Chaos) */}
            <div className="col-span-6 lg:col-span-6 group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 md:p-10 transition-all hover:shadow-xl min-h-[500px] flex flex-col">
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-500 text-sm font-bold mb-6">
                  L'enfer des DMs
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
              <div className="z-0 absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-slate-50" />
            </div>
            <div className="z-20 hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <svg
                width="100"
                height="764"
                viewBox="0 0 1219 764"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1032.01 614.447C789.008 618.447 869.008 618.447 789.008 618.447C722.508 618.447 665.381 622.686 630.115 608.327C594.848 593.968 559.114 576.346 534.097 562.617C509.081 548.889 495.864 539.588 485.139 530.881C465.841 515.213 455.576 501.377 449.168 486.618C438.958 463.102 437.746 439.106 436.767 423.078C435.745 406.333 431.813 389.666 434.75 368.002C439.138 335.633 454.019 312.013 461.428 301.155C467.042 292.927 482.099 272.066 506.062 246.367C525.011 226.046 547.425 215.12 565.003 204.44C579.349 195.724 598.334 191.327 629.484 190.808C637.597 190.673 652.128 195.08 659.529 204.44C666.931 213.8 681.885 232.947 672.008 256.98C664.008 276.447 672.008 256.98 659.529 282.487C625.008 324.447 659.529 282.487 625.008 324.447C608.875 337.967 578.22 347.539 564.195 349.764C555.146 351.199 541.848 350.52 526.718 349.541C494.875 347.481 473.881 344.587 458.402 339.692C425.994 329.443 406.121 311.493 401.197 304.099C395.188 295.077 383.916 278.949 373.05 256.98C368.297 247.37 366.101 240.397 360.434 221.691C354.768 202.986 345.957 172.637 340.928 153.576C331 115.945 324.062 98.9146 314.665 87.5076C307.235 78.4878 297.362 70.7012 270.016 54.1693C260.811 48.604 249.094 45.0393 229.343 41.3012C209.592 37.5632 181.69 34.6262 164.869 33.1131C143.188 31.163 48.0012 27.2094 30.0081 33.1131"
                  stroke="#5B5CFF"
                  stroke-width="60"
                  stroke-linecap="round"
                />
                <path
                  d="M1009.34 506.447C1008.36 508.405 1016.18 513.819 1037.6 521.963C1050.33 526.803 1068.32 528.638 1081.8 531.619C1095.29 534.601 1104.1 537.538 1119.65 545.415C1135.2 553.291 1157.23 566.018 1169.07 573.798C1182.77 582.804 1184.85 589.485 1187.82 595.159C1190.27 599.839 1183.93 611.676 1172.35 628.942C1160.02 647.335 1137.03 659.173 1114.33 671.255C1103.22 677.168 1093.6 683.826 1074.85 693.957C1056.1 704.089 1028.68 717.795 1013.58 724.855C998.483 731.916 996.525 731.916 994.508 733.4"
                  stroke="#5B5CFF"
                  stroke-width="60"
                  stroke-linecap="round"
                />
              </svg>
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
              <Logo className="hidden lg:block absolute top-10 right-10 group-hover:scale-200 transition-all" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center mb-12">
            Les outils pour une reussite digitale
          </h1>
          <Bentogrid />
        </div>
      </main>
      <footer className="h-96"></footer>
    </div>
  );
}
