export default function TelephoneMockup() {
  return (
    <div className=" relative w-full flex justify-end">
      <div className="w-full max-w-[320px] relative group">
        {/* Lueur subtile derrière l'iPhone */}
        <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full opacity-50"></div>

        {/* Maquette iPhone simplifiée */}
        <div className="relative border-8 border-[#121212] rounded-[48px] bg-white h-150 shadow-2xl overflow-hidden">
          {/* Status bar */}
          <div className="h-8 w-full flex justify-between px-8 pt-4">
            <div className="font-bold text-[10px]">9:41</div>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2 bg-black rounded-sm"></div>
            </div>
          </div>

          {/* Content simulé de Vendy */}
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div className="h-2 w-12 bg-gray-100 rounded"></div>
              <div className="h-8 w-8 bg-indigo-50 rounded-full"></div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] text-gray-400 font-bold uppercase">
                Projet en cours
              </div>
              <div className="text-xl font-black tracking-tight">
                Montage Reel #42
              </div>
              <div className="w-full h-1 bg-gray-100 rounded-full">
                <div className="w-2/3 h-full bg-indigo-600 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="h-24 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center flex-col gap-2">
                <span className="text-xl">📁</span>
                <span className="text-[9px] font-bold text-gray-400">
                  Ressources reçues
                </span>
              </div>
              <div className="h-24 bg-indigo-600 rounded-2xl flex items-center justify-center flex-col gap-2 shadow-lg shadow-indigo-100">
                <span className="text-xl">💰</span>
                <span className="text-[9px] font-bold text-white">
                  450€ Encaissés
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
