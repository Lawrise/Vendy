import { HoverEffect } from "../ui/card-hover-effect";
import { FEATURES } from "@/app/data/AllFeatures";
import Title from "../ui/Title";
import { Logo } from "../assets/Logo";
import {
  Archive,
  ChartColumn,
  ChevronsUp,
  Copy,
  LogOutIcon,
  MessageSquareQuote,
  PanelLeftOpen,
  Plus,
  Settings,
  ShoppingBag,
  Store,
  Triangle,
} from "lucide-react";

export default function AllFeature() {
  return (
    <div className="max-w-6xl">
      <Title
        title="Tout vos outils connectés en"
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
        <div className="w-4/5 p-8 bg-white relative overflow-hidden">
          {/* En-tête du Dashboard */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-800">Bonjour Sarah !</h3>
          </div>

          {/* Simulation de stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col justify-center items-start p-4 border border-gray-100 rounded-xl bg-gray-100">
              <p className="mb-2 text-gray-500">REVENUE TOTAL</p>
              <div className="flex items-center gap-4">
                <p>$4,056.00</p>
                <div className="flex items-center font-bold">
                  <Triangle className="inline h-3 w-4 text-green-500 fill-green-500" />
                  <p className="text-green-500">56%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start p-4 border border-gray-100 rounded-xl bg-gray-100">
              <p className="mb-2 text-gray-500">COMMANDES TOTALES</p>
              <div className="flex items-center gap-4">
                <p>562</p>
                <div className="flex items-center font-bold">
                  <Plus className="inline h-3 w-4 text-green-500 fill-green-500" />
                  <p className="text-green-500">52 ce mois</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start p-4 border border-gray-100 rounded-xl bg-gray-100">
              <p className="mb-2 text-gray-500">Vue de boutique</p>
              <div className="flex items-center gap-4">
                <p>18 923</p>
                <div className="flex items-center font-bold">
                  <Triangle className="inline h-3 w-4 text-green-500 fill-green-500" />
                  <p className="text-green-500">56%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-800">
              Projets en cours
            </h3>
          </div>
          <div className="border border-gray-200 rounded-2xl p-4 mb-8 bg-gray-50/30">
            Montage de rush

          </div>
          {/* Simulation d'un graphique ou d'une liste */}
          <div className="w-full h-64 border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 bg-gray-50/30">
            <ChartColumn className="h-10 w-10 mb-2 opacity-20" />
            <p className="text-sm">Données en cours de synchronisation...</p>
          </div>
        </div>
      </div>
      <HoverEffect items={FEATURES} />
    </div>
  );
}
