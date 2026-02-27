import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans">
      {/* Header */}
      <header className="flex justify-between px-6 md:px-12 py-6 items-center">
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
      <main className="max-w-5xl mx-auto pt-20 pb-12 px-6">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Vendez vos services. <br />
            <span className="text-indigo-500">Gérez vos clients.</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            La boutique tout-en-un pour les créateurs. Encaissez vos paiements
            et récupérez vos briefs clients au même endroit.
          </p>

          <div className="flex justify-center pt-4">
            <button className="bg-indigo-500 text-white font-bold py-4 px-10 rounded-full flex items-center gap-3 shadow-lg shadow-blue-200 hover:scale-105 hover:bg-indigo-700 transition-all">
              Démarrer gratuitement
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Maket interface a mettre (mockup) */}
        <div className="mt-20 relative">
          <div className="bg-white border border-gray-200 shadow-2xl rounded-[32px] h-[500px] w-full overflow-hidden flex items-center justify-center">
            <p className="text-gray-400 font-medium italic">
              [ Capture d'écran de l'interface CRM Vendy ]
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
