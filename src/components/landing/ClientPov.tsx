"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Logo } from "../assets/Logo";
import {
  ArrowRight,
  ChartColumn,
  Check,
  Copy,
  FolderUp,
  MessageSquare,
  MessageSquareQuote,
  Settings,
  ShoppingBag,
  Store,
  Video,
} from "lucide-react";
import Image from "next/image";
// ... (tes imports lucide et ui)

export function ClientPov() {
  // On remplace le useEffect par un état contrôlé par le clic
  const [hasOrdered, setHasOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = () => {
    setIsLoading(true);
    // On simule un petit temps de paiement pour le réalisme
    setTimeout(() => {
      setIsLoading(false);
      setHasOrdered(true);
    }, 500);
  };

  return (
    <div className="relative w-full min-h-187 flex items-center justify-center overflow-visible">
      {/* 1. CURSEUR : On l'utilise pour GUIDER l'oeil vers le bouton si l'user ne clique pas */}

      <motion.div layout className="flex items-center justify-center gap-12">
        {/* === VUE TÉLÉPHONE === */}
        <motion.div layout className="z-20">
          <div className="w-72 h-145 bg-white rounded-[40px] flex flex-col shadow-2xl border border-zinc-200 overflow-hidden relative">
            <div className="p-6 flex flex-col h-full">
              {hasOrdered ? (
                /* ÉTAT B : LE PORTAIL CLIENT (Après achat) */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
                    <div className="relative p-4 rounded-2xl mb-6 overflow-hidden bg-zinc-900 shadow-inner">
                      {/* Effet de brillance en arrière-plan */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-3xl"></div>

                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                          <Check
                            className="text-zinc-900"
                            size={20}
                            strokeWidth={3}
                          />
                        </div>
                        <div>
                          <h3 className="text-sm text-white font-bold tracking-tight">
                            Paiement confirmé
                          </h3>
                          <p className="text-[10px] text-zinc-400">
                            Commande #4902 • Studio Martin
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-6">
                      <div>
                        <h2 className="text-lg font-bold text-zinc-900 tracking-tight">
                          Bienvenue,{" "}
                          <span className="text-primary underline decoration-2 underline-offset-4">
                            John
                          </span>{" "}
                          👋
                        </h2>
                        <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                          Commençons votre projet. Déposez vos fichiers pour que
                          l&apos;équipe puisse démarrer le montage.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                          Action requise
                        </p>

                        {/* Zone d'upload style "Glassmorphism" */}
                        <div className="p-6 bg-primary/[0.03] rounded-2xl border-2 border-primary/20 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/[0.06] transition-all group">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                            <FolderUp className="text-primary" size={20} />
                          </div>
                          <p className="text-[10px] font-bold text-primary">
                            Envoyer les rushs (Max 5Go)
                          </p>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-zinc-100 shadow-sm flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-zinc-50 rounded-lg text-zinc-400">
                            <MessageSquare size={14} />
                          </div>
                          <p className="text-[11px] text-zinc-700 font-bold">
                            Chat avec le monteur
                          </p>
                        </div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                      </div>
                    </div>

                    {/* Tab Bar Mobile stylisée */}
                    <div className="mt-auto -mx-6 px-6 h-16 grid grid-cols-4 border-t border-zinc-50 pt-2 bg-white/80 backdrop-blur-md">
                      {[
                        { label: "PROJET", active: true },
                        { label: "CHAT", active: false },
                        { label: "FILES", active: false },
                        { label: "CONFIG", active: false },
                      ].map((tab) => (
                        <div
                          key={tab.label}
                          className="flex flex-col items-center justify-center gap-1"
                        >
                          <div
                            className={`text-[8px] font-black tracking-tighter ${tab.active ? "text-zinc-900" : "text-zinc-300"}`}
                          >
                            {tab.label}
                          </div>
                          {tab.active && (
                            <div className="w-1 h-1 bg-zinc-900 rounded-full"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* ÉTAT A : LA BOUTIQUE */
                <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-6 text-center">
                    <div className="bg-zinc-900 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/meufPP.jpg"
                        alt="Profile picture"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                      Sarah design
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium">
                      Production Vidéo Premium
                    </p>
                  </div>

                  <div className="space-y-4 flex-1">
                    {/* Carte Produit avec "Image" Preview */}
                    <div className="group relative bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
                      <div className="w-full h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                        <Video
                          className="text-white/90 drop-shadow-lg"
                          size={32}
                        />
                        <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2 py-1 rounded-md text-[9px] text-white font-bold uppercase tracking-wider">
                          Populaire
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="font-bold text-zinc-900 text-sm">
                          Pack Starter TikTok
                        </p>
                        <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
                          3 vidéos montées avec sous-titres dynamiques et Sound
                          Design.
                        </p>
                        <div className="flex justify-between items-center mt-3">
                          <p className="font-bold text-zinc-900 text-base">
                            150 €
                          </p>
                          <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">
                            Dispo
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Badge de réassurance */}
                    {/* <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center gap-2">
                      <div className="bg-green-100 p-1 rounded-full">
                        <CheckCircle2 size={12} className="text-green-600" />
                      </div>
                      <p className="text-[10px] text-zinc-600 font-semibold italic">
                        Satisfait ou retouché jusqu'à validation
                      </p>
                    </div> */}
                  </div>

                  <Button
                    onClick={handleOrder}
                    disabled={isLoading}
                    className="py-7 text-md font-bold w-full bg-zinc-900 rounded-2xl transition-all active:scale-95 overflow-hidden animate-bounce"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        <Settings size={20} />
                      </motion.div>
                    ) : (
                      <span className="flex items-center gap-2">
                        Commander <ArrowRight size={18} />
                      </span>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* === VUE PC (Freelance) === */}
        <AnimatePresence mode="popLayout">
          {hasOrdered && (
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="hidden lg:block"
            >
              {/* Le Dashboard Freelance qui reçoit la notif */}
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
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-tighter">
                        Système opérationnel
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs font-bold text-zinc-900 italic">
                          Sarah Design
                        </p>
                        <p className="text-[10px] text-zinc-400 font-medium">
                          Pro Plan
                        </p>
                      </div>
                      <div className="h-9 w-9 rounded-full bg-linear-to-tr from-zinc-200 to-zinc-50 border border-zinc-200 shadow-sm overflow-hidden flex items-center justify-center">
                        <span className="text-xs font-bold text-zinc-500">
                          SD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Body */}
                  <div className="p-8 overflow-y-auto">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
                        Bonjour Sarah 👋
                      </h2>
                      <p className="text-sm text-zinc-500">
                        Voici l&apos;activité de votre boutique
                        aujourd&apos;hui.
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
                          <p className="text-xl font-bold text-zinc-900">
                            {s.val}
                          </p>
                          <p
                            className={`text-[10px] font-bold ${s.color} mt-1`}
                          >
                            {s.trend}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Project Section */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-zinc-900">
                          Missions prioritaires
                        </h3>
                        <button className="text-xs font-bold text-primary hover:underline">
                          Voir tout
                        </button>
                      </div>

                      {[
                        {
                          title: "Refonte Site Web",
                          client: "Cabinet Dupuis",
                          progress: 80,
                          tag: "En cours",
                          tagCol: "bg-blue-50 text-blue-600",
                        },
                        {
                          title: "Identité Visuelle",
                          client: "Thomas Coaching",
                          progress: 35,
                          tag: "Attente brief",
                          tagCol: "bg-amber-50 text-amber-600",
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
