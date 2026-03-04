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
    <div className="relative text-center w-full h-160  overflow-hidden flex items-between justify-center">
      {/* TOOLTIP D'AIDE */}

      {/* === VUE PC (Dashboard Freelance) === */}
      <div
        className="absolute transition-all duration-700 ease-in-out left-0 top-16" // 16 d'ecart avec top tel
        style={{
          transform: step === 1 ? " scale(0.9)" : "translateX(55%) scale(1)",
          opacity: step === 1 ? 0 : 1,
        }}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 w-160 h-105">
          <div className="flex w-full h-full">
            <div className="w-1/6 bg-primary rounded-l-2xl border-r border-zinc-200"></div>

            <div className="w-5/6 p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-semibold text-xl text-zinc-900">
                  Votre Dashboard Admin
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-5 bg-white rounded-xl border border-zinc-200">
                  <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                    Revenu total
                  </p>
                  <p className="text-2xl font-semibold text-zinc-900 mt-1">
                    4502 €
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-zinc-200">
                  <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                    Projets actifs
                  </p>
                  <p className="text-2xl font-semibold text-zinc-900 mt-1">
                    12
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-zinc-200">
                  <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                    Mails évités
                  </p>
                  <p className="text-2xl font-semibold text-zinc-900 mt-1">
                    36
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  Activité récente
                </p>

                <div className="flex items-center justify-between p-4 bg-primary rounded-xl border-3 border-primary">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary text-xs">
                      <Check />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        &quot;John Doe vient de payer 150€&quot;
                      </p>
                      <p className="text-[11px] text-zinc-200">
                        Portail client activé automatiquement
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] font-medium text-zinc-200">
                    À l’instant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === VUE TÉLÉPHONE === */}
      <div
        className="absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 left-0"
        // style={{
        //   transform: step === 0 ? "translateX(-100%)" : "translateX(0%)",
        // }}
      >
        <div className="w-72 h-138 bg-white rounded-[40px] flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-zinc-200 p-6 overflow-hidden relative">
          {step === 1 ? (
            /* --- CONTENU BOUTIQUE --- */
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-zinc-900">
                  Studio Martin
                </h3>
                <p className="text-sm text-zinc-500">Services de Montage Pro</p>
              </div>

              <div className="space-y-4 flex-1">
                <div className="p-5 bg-white rounded-2xl border border-zinc-200">
                  <Video className="text-zinc-500 mb-3" size={20} />
                  <p className="font-semibold text-zinc-900">
                    Pack Starter TikTok
                  </p>
                  <p className="text-xs text-zinc-500">
                    3 vidéos montées + sous-titres
                  </p>
                  <p className="mt-3 font-semibold text-zinc-900 text-lg">
                    150 €
                  </p>
                </div>

                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <p className="text-[11px] text-zinc-600 font-medium">
                    Livraison sous 48h garantie
                  </p>
                </div>
              </div>

              <Button
                onClick={() => setStep(0)}
                className="py-7 text-lg w-full bg-primary hover:primary/90 text-white rounded-2xl transition-all"
              >
                Commander
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ) : (
            /* --- CONTENU BIENVENUE (PORTAIL CLIENT) --- */
            <div className="flex flex-col h-full">
              <div className="p-5 rounded-2xl mb-8 flex items-center gap-3  border-2 border-primary bg-primary-100">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  <Check />
                </div>
                <div>
                  <h3 className="text-sm text-black font-semibold ">
                    Paiement envoyé
                  </h3>
                  <p className="text-[11px] text-black">
                    Espace client sécurisé
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-5">
                <h2 className="text-base font-semibold text-zinc-900">
                  Bienvenue, <span className="text-primary">John Doe</span>
                </h2>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  Merci de m’avoir fait confiance. Répondez au formulaire et
                  reconnectez-vous sur Vendy pour suivre l’avancement du projet.
                </p>

                <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
                  Prochaines étapes
                </p>

                <div className="p-5 bg-white rounded-xl border-primary border-2 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary-100 transition-colors">
                  <FolderUp className="text-primary" />
                  <p className="text-[11px] font-semibold text-primary">
                    Déposer vos vidéos brutes
                  </p>
                </div>

                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center gap-3">
                  <MessageSquare size={16} className="text-zinc-500" />
                  <p className="text-[11px] text-zinc-700 font-medium">
                    Chatter avec l’équipe
                  </p>
                </div>
              </div>

              <div className="h-16 grid grid-cols-4 border-t border-zinc-200 pt-4 text-[10px] text-center text-zinc-500 font-medium">
                <div className="text-zinc-900">PROJET</div>
                <div>CHAT</div>
                <div>FILES</div>
                <div>CONFIG</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start justify-end  w-full p-2">
        {step === 1 ? (
          <div className="w-fit h-fit  rounded-full text-md font-bold s">
            Cliquez sur Commander pour tester !
          </div>
        ) : (
          <p
            onClick={() => setStep(1)}
            className="text-black underline select-none"
          >
            Réinitialiser la démo
          </p>
        )}
      </div>
    </div>
  );
}
