import { HoverEffect } from "../ui/card-hover-effect";
import { FEATURES } from "@/app/data/AllFeatures";
import Title from "../ui/Title";
import { Logo } from "../assets/Logo";
import {
  Archive,
  ChartColumn,
  Copy,
  LogOutIcon,
  MessageSquareQuote,
  PanelLeftOpen,
  Settings,
  ShoppingBag,
  Store,
} from "lucide-react";
import Image from "next/image";

export default function AllFeature() {
  return (
    <div className="max-w-6xl">
      <Title
        title="Tous vos outils connectés en"
        surligne="un seul endroit"
        description="Un portail de marque blanche qui rassure vos clients et valorise votre travail."
      />
      <div className="w-full aspect-video rounded-2xl flex shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-zinc-200 mb-10">
        <div className="w-1/5 bg-gray-100 flex flex-col items-center justify-between rounded-l-2xl py-6 px-4">
          <div className=" w-full">
            <div className="flex items-center justify-between w-full mb-6">
              <h2 className="text-2xl text-primary font-heading font-semibold flex items-center">
                <Logo />
                Vendy
              </h2>
              <PanelLeftOpen className="text-gray-500" />
            </div>
            <ul className="flex flex-col gap-y-2 items-start w-full text-gray-500 text-sm">
              <li className="flex items-center gap-2 w-full bg-primary-100 p-2 rounded-lg text-primary">
                <ChartColumn className="h-4 w-4" /> Dashboard
              </li>
              <li className="flex items-center gap-2 w-full  p-2 rounded-lg">
                <Store className="h-4 w-4" /> Ma boutique
              </li>
              <li className="flex items-center gap-2 w-full p-2 rounded-lg">
                <ShoppingBag className="h-4 w-4" /> Produits
              </li>
              <li className="flex items-center gap-2 w-full  p-2 rounded-lg">
                <MessageSquareQuote className="h-4 w-4" /> Messages
              </li>
              <li className="flex items-center gap-2 w-full  p-2 rounded-lg">
                <Archive className="h-4 w-4" /> Archives
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div className="w-full flex items-center justify-center border gap-2 p-2 mb-2 rounded-lg text-gray-500 text-sm mt-6 cursor-pointer hover:bg-gray-200 transition-colors">
              <Copy className="h-4 w-4 text-gray-500" />
              Copy page link
            </div>
            <ul className="flex flex-col gap-y-2 items-start w-full text-gray-500 text-sm">
              <li className="flex items-center gap-2 w-full p-2 rounded-lg">
                <Settings className="h-4 w-4" /> Parametre
              </li>
              <li className="flex items-center gap-2 w-full p-2 rounded-lg">
                <LogOutIcon className="h-4 w-4" /> Déconnexion
              </li>
            </ul>
          </div>
        </div>

        <div className="w-4/5 p-10 bg-white relative overflow-y-hidden h-full font-sans rounded-2xl">
          {/* Header Solopreneur */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                Bonjour Sarah 👋
              </h3>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                3 factures en attente de paiement
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-900">Sarah Design</p>
                <p className="text-[10px] text-gray-400 font-medium px-1.5 py-0.5 bg-gray-100 rounded">
                  Freelance
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-200 border border-gray-100 shadow-sm overflow-hidden">
                <Image
                  src="/images/avatar.svg"
                  alt="Avatar"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Stats Grid - Réaliste (Objectif ~5k€/mois) */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "CHIFFRE D'AFFAIRES (MOIS)",
                value: "5 420 €",
                trend: "+12%",
                color: "text-green-500",
              },
              {
                label: "REVENU NET ESTIMÉ",
                value: "3 250 €",
                trend: "-5% frais",
                color: "text-amber-500",
              },
              {
                label: "TEMPS FACTURÉ",
                value: "124h",
                trend: "82% cap.",
                color: "text-blue-500",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col p-6 border border-gray-100 rounded-2xl bg-white hover:shadow-sm transition-all"
              >
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">
                  {stat.label}
                </p>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                  <span
                    className={`text-[10px] font-bold ${stat.color} bg-gray-50 px-2 py-0.5 rounded-md`}
                  >
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow Section */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Missions en cours
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Suivi de tes livrables client
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Refonte Site Web",
                client: "Cabinet Dupuis",
                progress: 80,
                color: "bg-indigo-500",
                date: "Échéance : 12 Mars",
              },
              {
                title: "Identité Visuelle",
                client: "Thomas (Coaching)",
                progress: 30,
                color: "bg-orange-400",
                date: "Attente retour",
              },
              {
                title: "Maintenance Mensuelle",
                client: "SaaS Start",
                progress: 100,
                color: "bg-green-500",
                date: "Terminé",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group border border-gray-100 p-5 rounded-2xl bg-white hover:border-blue-100 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-10 w-10 rounded-xl ${project.color} flex items-center justify-center font-bold text-white text-xs`}
                    >
                      {project.title.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 tracking-tight">
                        {project.title}
                      </p>
                      <p className="text-xs text-gray-400 italic">
                        Client : {project.client}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                      {project.date}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold text-gray-700">
                        {project.progress}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`${project.color} h-full rounded-full`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HoverEffect items={FEATURES} />
    </div>
  );
}
