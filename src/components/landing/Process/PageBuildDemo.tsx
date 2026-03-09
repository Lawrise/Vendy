import {
  Copy,
  Instagram,
  Link,
  Mail,
  Monitor,
  Move,
  Music2,
  Pencil,
  Plus,
  Smartphone,
  Trash2,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function PageBuildDemo() {
  return (
    <div className="lg:col-span-6 relative h-150 flex rounded-4xl border-2 border-slate-200">
      <div className="h-full w-3/4 rounded-l-4xl flex flex-col items-center relative overflow-hidden shadow-2xl bg-taupe-400 p-8">
        {/* Profil */}
        <div className="relative mb-8 text-center w-full flex flex-col items-center">
          {/* Avatar avec correction 'relative' */}
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-sm mb-6">
            <Image
              src="/images/meufPP.jpg"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>

          {/* Texte de profil */}
          <h3 className="font-serif text-3xl text-[#1A1A1A] mb-2">Elizabeth</h3>

          {/* Social Icons (Style minimaliste de l'image) */}
          <div className="flex gap-4 mb-4 text-[#1A1A1A]">
            <Mail size={20} className="cursor-pointer opacity-80" />
            <Music2 size={20} className="cursor-pointer opacity-80" />{" "}
            {/* Pour TikTok */}
            <Instagram size={20} className="cursor-pointer opacity-80" />
            <Twitter size={20} className="cursor-pointer opacity-80" />
            <Youtube size={20} className="cursor-pointer opacity-80" />
          </div>
        </div>

        {/* Grille de Produits (Style Bento Crème) */}
        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {/* Item Principal */}
          <div className="bg-[#E9E0D3] h-30 rounded-3xl p-4 flex items-center gap-4 border border-black/5">
            
          </div>

          {/* Deuxième ligne Bento */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#E9E0D3] rounded-3xl p-4 flex flex-col gap-3 border border-black/5">
              <div className="w-full aspect-square bg-white/50 rounded-xl"></div>
              <p className="font-bold text-xs text-[#4A4238]">
                Skincare Favorites
              </p>
            </div>
            <div className="bg-[#E9E0D3] rounded-3xl p-4 flex flex-col gap-3 border border-black/5">
              <div className="w-full aspect-square bg-white/50 rounded-xl"></div>
              <p className="font-bold text-xs text-[#4A4238]">Makeup Musts</p>
            </div>
          </div>
        </div>

        {/* Widget flottant "About Me" (On garde ta logique absolute) */}
        <div className="absolute top-[45%] left-12 right-12 z-20 -rotate-3">
          <div className="bg-taupe-200 rounded-3xl py-6 px-5 shadow-2xl border border-slate-100 relative group">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-primary p-2 rounded-xl text-white shadow-lg">
              <Move size={18} />
            </div>

            <h4 className="font-bold text-lg mb-1">About Me</h4>
            <p className="text-taupe-800 text-sm leading-snug">
              I am passionate about healthy lifestyle, commercial shoots and
              foodie vlogs.
            </p>

            {/* Barre d'outils flottante */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary rounded-full px-4 py-2 flex items-center gap-4 text-white shadow-lg border-2 border-white">
              <Pencil size={14} />
              <Copy size={14} />
              <Trash2 size={14} className="text-blue-200" />
            </div>
          </div>
        </div>

        {/* Toolbar d'édition en bas */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center gap-4 shadow-xl border border-white/50 w-fit whitespace-nowrap">
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
            <Plus size={14} /> Add Blocks
          </button>
          <div className="h-4 w-[1px] bg-slate-300" />
          <div className="flex gap-3 px-2">
            <Monitor size={16} className="text-blue-600" />
            <Smartphone size={16} className="text-slate-400" />
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
