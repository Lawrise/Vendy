"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Video,
  CheckCircle2,
  MessageSquare,
  FolderUp,
  Check,
} from "lucide-react";

export function ClientPov() {
  const [step, setStep] = useState(1); // 1: Boutique, 0: Dashboard

  return (
    <div className="relative  w-full h-160  overflow-hidden flex items-between justify-center">
      {/* TOOLTIP D'AIDE */}

      {/* === VUE PC (Dashboard Freelance) === */}
      <div
        className="absolute transition-all duration-1000 ease-in-out top-16" // 16 d'ecart avec top tel
        style={{
          transform:
            step === 1
              ? "translateX(20%) scale(0.9)"
              : "translateX(35%) scale(1)",
          opacity: step === 1 ? 0 : 1,
        }}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-zinc-200  w-160 h-105">
          <div className="flex w-full h-full">
            <div className="w-1/6 bg-zinc-100 rounded-l-2xl"></div>
            <div className="w-5/6 p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-xl text-zinc-800">
                  Votre Dashboard Admin
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-[10px] text-green-600 font-bold uppercase">
                    Revenu total
                  </p>
                  <p className="text-xl font-bold">1 250 €</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-[10px] text-blue-600 font-bold uppercase">
                    Projets actifs
                  </p>
                  <p className="text-xl font-bold">12</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <p className="text-[10px] text-purple-600 font-bold uppercase">
                    Mails évités
                  </p>
                  <p className="text-xl font-bold">∞ 🚀</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider">
                  Activité récente
                </p>
                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg animate-in slide-in-from-left-4 duration-1000">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      <Check />
                    </div>
                    <div>
                      <p className="text-sm font-medium italic">
                        &quot;John Doe vient de payer 150€&quot;
                      </p>
                      <p className="text-[10px] text-zinc-400 font-medium italic">
                        Portail client activé automatiquement
                      </p>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-zinc-400">
                    À l&apos;instant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === VUE TÉLÉPHONE === */}
      <div
        className="absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 top-0"
        style={{
          transform: step === 0 ? "translateX(-100%)" : "translateX(0%)",
        }}
      >
        <div className="w-72 h-138 bg-white rounded-[40px] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-zinc-900 p-6 overflow-hidden relative">
          {step === 1 ? (
            /* --- CONTENU BOUTIQUE --- */
            <div className="flex flex-col h-full animate-in fade-in duration-500">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-900 italic underline decoration-indigo-500">
                  Studio Martin
                </h3>
                <p className="text-sm text-zinc-500 italic">
                  Services de Montage Pro
                </p>
              </div>

              <div className="space-y-4 flex-1">
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <Video className="text-indigo-600 mb-2" size={20} />
                  <p className="font-bold text-zinc-800 italic">
                    Pack Starter TikTok
                  </p>
                  <p className="text-xs text-zinc-500 italic">
                    3 vidéos montées + sous-titres
                  </p>
                  <p className="mt-2 font-black text-indigo-600 text-lg italic">
                    150 €
                  </p>
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center gap-3 italic">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <p className="text-[10px] text-zinc-500 italic font-medium">
                    Livraison sous 48h garantie
                  </p>
                </div>
              </div>

              <Button
                onClick={() => setStep(0)}
                className="py-8 text-xl w-full bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 group rounded-2xl transition-all"
              >
                Commander{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ) : (
            /* --- CONTENU BIENVENUE (PORTAIL CLIENT) --- */
            <div className="flex flex-col h-full animate-in zoom-in-95 duration-500">
              <div className="bg-green-50 p-4 rounded-2xl mb-6 flex items-center gap-3 border border-green-100">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-sm">
                  <Check />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-green-800 italic">
                    Paiement Envoye !
                  </h3>
                  <p className="text-[10px] text-green-600 font-medium italic underline">
                    Espace client sécurisé
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2>Beinvenue, John Doe !</h2>
                <p className="text-xs">
                  Merci de m&apos;avoir fait confiance. Reponds a mon formulaire
                  et reconnecte toi sur Vendy pour suivre l&apos;avance du projet !
                </p>
                <p className="text-[11px] font-bold text-zinc-400 uppercase">
                  Prochaines étapes
                </p>
                <div className="p-4 bg-white rounded-xl border-2 border-dashed border-indigo-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-indigo-50 transition-colors">
                  <FolderUp className="text-indigo-400" />
                  <p className="text-[10px] font-bold text-indigo-600">
                    Déposer vos vidéos brutes
                  </p>
                </div>
                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center gap-3">
                  <MessageSquare size={16} className="text-zinc-400" />
                  <p className="text-[10px] text-zinc-600 font-medium">
                    Chatter avec l&apos;équipe
                  </p>
                </div>
              </div>

              <div className="h-16 grid grid-cols-4 border-t pt-4 text-[9px] text-center text-zinc-400 font-bold italic underline">
                <div className="text-indigo-600 italic">PROJET</div>
                <div>CHAT</div>
                <div>FILES</div>
                <div>CONFIG</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-end  w-full max-w-xl p-2">
        {step === 1 ? (
          <div className="w-fit h-fit text-white animate-pulse  px-4 py-2 rounded-full text-md font-bold s">
            Cliquez sur Commander pour tester ! 🚀
          </div>
        ) : (
          <p
            onClick={() => setStep(1)}
            className="text-white underline select-none"
          >
            Réinitialiser la démo
          </p>
        )}
      </div>
    </div>
  );
}
