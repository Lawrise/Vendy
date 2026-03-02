import TelephoneMockup from "../../components/mockup/telephone";
import Bentogrid from "../../components/mockup/bentoGrid";
// import TelephoneMockup from "@/components/mockup/telephone";

export default function Home() {
  return (
    <div className="min-h-screen bg-bgWhite text-myBlack font-sans flex flex-col items-center">
      {/* Header */}
      <header className="flex justify-between px-6 md:px-12 py-6 items-center w-full">
        <p className="font-bold text-2xl tracking-tight">
          Vendy<span className="text-indigo-500">.</span>
        </p>
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium text-gray-500">
            <li className="cursor-pointer hover:text-black">Produit</li>
            <li className="cursor-pointer hover:text-black">Tarifs</li>
            <li className="cursor-pointer hover:text-black">Aide</li>
          </ul>
        </nav>
        <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all">
          Connexion
        </button>
      </header>

      {/* Hero Section */}
      <main className="mx-6 md:mx-12 max-w-6xl flex flex-col gap-y-24">
        <div className="rounded-4xl grid grid-cols-2 bg-electricBlue py-16 px-24">
          <div className="space-y-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl text-white font-extrabold tracking-tight text-start">
              Vendez vos prestations. <br />
              <span className="text-accent2">
                Livrez vos projets sans chaos.
              </span>
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Le seul link-in-bio qui encaisse vos clients et centralise vos
              fichiers, revisions et livrable. Fini l&apos;enfer des DMs
              chaotiques.
            </p>

            <button className="flex gap-2 max-w-fit sm:w-auto bg-accent2 text-white font-bold py-2 px-4 rounded-2xl text-lg hover:gap-6 transition-all">
              Commencer
              <span>→</span>
            </button>
          </div>

          <TelephoneMockup />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center mb-12">
            Pourquoi Vendy
          </h1>
          <div className="grid grid-cols-2 gap-24">
            <div className="border rounded-3xl p-8">
              <h2 className="text-2xl text-center">Avant Vendy</h2>
              <ul>
                <li>Bordel</li>
                <li>C&apos;est nul</li>
                <li>pas ouf</li>
                <li>inspi</li>
              </ul>
            </div>
            <div className="border">
              <h2>Avec Vendy</h2>
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
