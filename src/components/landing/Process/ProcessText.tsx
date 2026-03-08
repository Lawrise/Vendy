import React, { ReactNode } from "react";

// 1. Définition de l'interface pour une feature individuelle
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

// 2. Extension des props du composant principal
interface ProcessTextProps {
  id: number | string;
  title: string;
  subtitle: string;
  features: Feature[]; // La liste dynamique
  buttonText?: string; // Optionnel, avec une valeur par défaut
}

export default function ProcessText({
  id,
  title,
  subtitle,
  features,
  buttonText = "Get Started For Free",
}: Readonly<ProcessTextProps>) {
  return (
    <div className="lg:col-span-4 space-y-8">
      {/* En-tête */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          <span className="text-slate-400">{id}.</span> {title}
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed">{subtitle}</p>
      </div>

      {/* Liste des Features dynamique */}
      <div className="space-y-6">
        {features.map((feature, index) => (
          <FeatureItem
            key={`${feature.title}-${index}`}
            icon={feature.icon}
            title={feature.title}
            desc={feature.description}
          />
        ))}
      </div>

      {/* CTA */}
      <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all active:scale-95">
        {buttonText}
      </button>
    </div>
  );
}

// Rappel de la structure du sous-composant FeatureItem pour la cohérence
function FeatureItem({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-slate-400 mt-1 flex-shrink-0">{icon}</div>
      <div className="space-y-1">
        <h4 className="font-bold text-slate-900 leading-none">{title}</h4>
        <p className="text-sm text-slate-500 leading-snug">{desc}</p>
      </div>
    </div>
  );
}