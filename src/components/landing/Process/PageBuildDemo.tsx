import { Copy, Monitor, Move, Pencil, Plus, Smartphone, Trash2 } from "lucide-react";

export default function PageBuildDemo() {
  return (
    <div className="lg:col-span-6 relative flex rounded-4xl border-2 border-slate-200">
      <div className=" p-8 min-h-[600px] w-3/4 rounded-l-4xl flex flex-col items-center relative overflow-hidden shadow-2xl bg-primary">
        {/* Profil */}
        <div className="relative mb-6 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-black/10 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200"
              alt="Avatar"
              className="object-cover"
            />
          </div>
          <div className="bg-black text-white text-[10px] px-2 py-1 rounded-md inline-flex items-center gap-1 mb-2">
            ⭐ 5 (102)
          </div>
          <h3 className="font-bold text-xl block">Amy Wonder</h3>
          <p className="text-sm opacity-80 font-medium">
            Lifestyle & foodie creator
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mb-8">
          <span className="text-xl">TikTok</span>{" "}
          <span className="text-xl">𝕏</span> <span className="text-xl">IG</span>{" "}
          <Plus size={20} />
        </div>

        <div className="w-full font-bold text-sm mb-4 flex items-center gap-2">
          🔗 Affiliate Links
        </div>
        <div className="bg-slate-700 h-20 w-full"></div>

        {/* Grille d'images style Bento */}
        <div className="grid grid-cols-3 gap-3 w-full mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-white/20 backdrop-blur-sm border border-black/5 overflow-hidden"
            >
              <div
                className={`w-full h-full bg-gradient-to-tr ${i === 1 ? "from-orange-400 to-pink-500" : "from-blue-400 to-purple-500"}`}
              />
            </div>
          ))}
        </div>

        {/* Widget flottant "About Me" (Le point focal de l'image) */}
        <div className="absolute top-[55%] left-4 right-4 z-10 -rotate-3">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 relative group">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-lg text-white cursor-move shadow-lg">
              <Move size={18} />
            </div>

            <h4 className="font-bold text-lg mb-2">About Me</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              I am passionate about healthily lifestyle, shoot commercial and
              free food video blog
            </p>

            {/* Barre d'outils flottante bleue */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 rounded-xl px-4 py-2 flex items-center gap-4 text-white shadow-lg border-2 border-white">
              <Pencil
                size={16}
                className="cursor-pointer hover:scale-110 transition"
              />
              <Copy
                size={16}
                className="cursor-pointer hover:scale-110 transition"
              />
              <Trash2
                size={16}
                className="cursor-pointer hover:scale-110 transition text-blue-200"
              />
            </div>
          </div>
        </div>

        {/* Toolbar Basse */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-2 py-2 flex items-center gap-4 shadow-xl border border-slate-100">
          <button className="bg-black text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
            <Plus size={16} /> Add Blocks
          </button>
          <div className="h-6 w-[1px] bg-slate-200" />
          <div className="flex gap-2">
            <Monitor size={18} className="text-purple-600" />
            <Smartphone size={18} className="text-slate-400" />
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-slate-50/50 rounded-r-4xl  p-6 space-y-8 h-full">
        <Section label="20+ Themes">
          <div className="grid grid-cols-2 gap-3">
            <ThemeBox />
            <ThemeBox />
            <ThemeBox />
            <ThemeBox />
          </div>
        </Section>

        <Section label="Card styles">
          <div className="grid grid-cols-2 gap-3">
            <div className="h-10 border-2 border-slate-200 rounded-lg" />
            <div className="h-10 border-2 border-blue-500 bg-white rounded-lg shadow-sm" />
            <div className="h-10 border-2 border-slate-200 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
            <div className="h-10 border-2 border-slate-900 rounded-lg" />
          </div>
        </Section>

        <Section label="Button styles">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black text-[10px] text-white p-2 rounded-md text-center font-bold">
              Button
            </div>
            <div className="border border-slate-300 text-[10px] p-2 rounded-md text-center">
              Button
            </div>
            <div className="bg-slate-100 text-[10px] p-2 rounded-full text-center">
              Button
            </div>
            <div className="bg-slate-100 text-[10px] p-2 rounded-md text-center">
              Button
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: Readonly<{
  label: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
        {label}
      </p>
      {children}
    </div>
  );
}

function ThemeBox() {
  return (
    <div className="h-16 rounded-xl cursor-pointer relative transition-all hover:scale-105 bg-gradient-to-br from-indigo-900 to-purple-600">
      <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full p-0.5">
        <Plus size={10} className="rotate-45" />
      </div>
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white/20" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/20" />
    </div>
  );
}
