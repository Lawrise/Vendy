import {
  Check,
  FolderUp,
  MessageSquare,
  Settings,
  Files,
  LayoutGrid,
} from "lucide-react";

const TelOnboardView = () => {
  return (
    <div className="flex flex-col h-full w-full bg-white animate-in fade-in zoom-in-95 duration-500">
      {/* Header / Banner de succès - Plus compact pour mobile */}
      <div className="bg-emerald-50 p-4 border-b border-emerald-100/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200 shrink-0">
            <Check className="text-white" size={16} strokeWidth={4} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[13px] text-emerald-950 font-black tracking-tight leading-none truncate">
              Paiement confirmé
            </h3>
            <p className="text-[10px] text-emerald-700/70 mt-0.5 font-medium truncate">
              Commande #4902 • Sarah Design
            </p>
          </div>
        </div>
      </div>

      {/* Contenu Principal - Scrollable si besoin */}
      <div className="flex-1 px-5 pt-6 pb-4 space-y-6 overflow-y-auto">
        {/* Welcome Section */}
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-zinc-900 tracking-tighter leading-[1.1]">
            Bienvenue, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-600">
              James 👋
            </span>
          </h2>
          <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
            Ton projet est prêt. Envoie tes fichiers pour lancer le montage.
          </p>
        </div>

        {/* Action Principal : Upload */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.1em]">
              Action requise
            </p>
            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[8px] font-black rounded-full">
              À FAIRE
            </span>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-violet-500 to-indigo-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>

            <button className="relative w-full p-6 bg-white rounded-2xl border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center gap-3 hover:border-violet-400 transition-all active:scale-[0.97]">
              <div className="p-3 bg-violet-50 rounded-xl">
                <FolderUp className="text-violet-600" size={20} />
              </div>
              <div className="text-center">
                <p className="text-[13px] font-bold text-zinc-900">
                  Envoyer les rushs
                </p>
                <p className="text-[10px] text-zinc-400 font-medium">
                  Max 5Go • MP4, MOV
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Aide / Support Rapide */}
        <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-between group cursor-pointer active:bg-zinc-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-zinc-500">
              <MessageSquare size={14} />
            </div>
            <p className="text-[11px] font-bold text-zinc-700">
              Besoin d&apos;aide ?
            </p>
          </div>
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Tab Bar Mobile - Hauteur réduite pour w-72 */}
      <div className="mt-auto h-16 grid grid-cols-4 bg-white border-t border-zinc-100 shrink-0">
        {[
          { icon: <LayoutGrid size={18} />, label: "Projet", active: true },
          { icon: <MessageSquare size={18} />, label: "Chat", active: false },
          { icon: <Files size={18} />, label: "Fichiers", active: false },
          { icon: <Settings size={18} />, label: "Infos", active: false },
        ].map((tab) => (
          <div
            key={tab.label}
            className={`flex flex-col items-center justify-center gap-1 transition-colors relative ${
              tab.active ? "text-violet-600" : "text-zinc-300"
            }`}
          >
            {tab.icon}
            <span className="text-[8px] font-black tracking-tight uppercase">
              {tab.label}
            </span>
            {tab.active && (
              <div className="absolute top-0 w-8 h-0.5 bg-violet-600 rounded-b-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelOnboardView;
