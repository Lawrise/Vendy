import {
  ChartColumn,
  Copy,
  MessageSquareQuote,
  Settings,
  ShoppingBag,
  Store,
} from "lucide-react";
import { Logo } from "../../assets/Logo";

interface PcViewDemoProps {
  setHasOrdered: (value: boolean) => void;
}

export default function PcViewDemo({
  setHasOrdered,
}: Readonly<PcViewDemoProps>) {
  return (
    <div className="h-138 aspect-16/10 bg-white rounded-3xl flex shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-zinc-200 overflow-hidden text-left">
      {/* Sidebar stylisée */}
      <div className="w-1/4 bg-zinc-50 flex flex-col justify-between border-r border-zinc-100 p-6">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-8 px-2">
            <div className="bg-primary p-1.5 rounded-lg shadow-sm">
              <Logo className="w-5 h-5 fill-white" />
            </div>
            <span className="font-bold text-zinc-900 tracking-tight text-lg">
              Vendy
            </span>
          </div>

          <nav className="space-y-1">
            {[
              {
                icon: ChartColumn,
                label: "Tableau de bord",
                active: true,
              },
              { icon: Store, label: "Ma boutique" },
              { icon: ShoppingBag, label: "Commandes" },
              { icon: MessageSquareQuote, label: "Messages" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  item.active
                    ? "bg-white shadow-sm border border-zinc-200 text-primary"
                    : "text-zinc-500 hover:bg-zinc-100"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <div className="bg-zinc-900 rounded-xl p-4 shadow-lg group cursor-pointer active:scale-95 transition-all">
            <div className="flex items-center justify-between mb-2">
              <Copy size={14} className="text-zinc-400" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                Lien Shop
              </span>
            </div>
            <p className="text-white text-xs font-medium truncate">
              vendy.so/sarah-design
            </p>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 text-zinc-400 text-sm hover:text-zinc-900 transition-colors cursor-pointer">
            <Settings size={18} />
            <span>Paramètres</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 border-b border-zinc-100 flex items-center justify-between px-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setHasOrdered(false);
              }}
            >
              Retour
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-bold text-zinc-900 italic">
                Sarah Design
              </p>
              <p className="text-[10px] text-zinc-400 font-medium">Pro Plan</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-linear-to-tr from-zinc-200 to-zinc-50 border border-zinc-200 shadow-sm overflow-hidden flex items-center justify-center">
              <span className="text-xs font-bold text-zinc-500">SD</span>
            </div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-8 overflow-y-hidden">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
              Bonjour Sarah 👋
            </h2>
            <p className="text-sm text-zinc-500">
              Voici l&apos;activité de votre boutique aujourd&apos;hui.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              {
                label: "Ventes (30j)",
                val: "5 420 €",
                trend: "+12.5%",
                color: "text-green-600",
              },
              {
                label: "Projets actifs",
                val: "12",
                trend: "Capacité : 80%",
                color: "text-blue-600",
              },
              {
                label: "Temps gagné",
                val: "18h",
                trend: "via automations",
                color: "text-indigo-600",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-500/5 transition-all"
              >
                <p className="text-[10px] font-bold text-zinc-400 uppercase mb-2 tracking-widest">
                  {s.label}
                </p>
                <p className="text-xl font-bold text-zinc-900">{s.val}</p>
                <p className={`text-[10px] font-bold ${s.color} mt-1`}>
                  {s.trend}
                </p>
              </div>
            ))}
          </div>

          {/* Project Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-zinc-900">Nouvelle Mission</h3>
              <button className="text-xs font-bold text-primary hover:underline">
                Voir tout
              </button>
            </div>
            <div className="p-4 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all cursor-pointer group bg-white shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">
                    Test
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">
                      Test
                    </p>
                    <p className="text-[10px] text-zinc-400 font-medium">
                      james
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[9px] font-bold px-2 py-1 rounded-md bg-primary-100 text-primary-800`}
                >
                  En attente
                </span>
              </div>
              <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-zinc-900 rounded-full transition-all duration-1000"
                  style={{ width: `${0}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-zinc-900">Missions prioritaires</h3>
              <button className="text-xs font-bold text-primary hover:underline">
                Voir tout
              </button>
            </div>

            {[
              {
                title: "Identité Visuelle",
                client: "Thomas Coaching",
                progress: 35,
                tag: "Attente brief",
                tagCol: "bg-amber-50 text-amber-600",
              },
              {
                title: "Refonte Site Web",
                client: "Cabinet Dupuis",
                progress: 80,
                tag: "En cours",
                tagCol: "bg-blue-50 text-blue-600",
              },
            ].map((proj) => (
              <div
                key={proj.title}
                className="p-4 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all cursor-pointer group bg-white shadow-sm"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">
                      {proj.title[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">
                        {proj.title}
                      </p>
                      <p className="text-[10px] text-zinc-400 font-medium">
                        {proj.client}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[9px] font-bold px-2 py-1 rounded-md ${proj.tagCol}`}
                  >
                    {proj.tag}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-zinc-900 rounded-full transition-all duration-1000"
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
