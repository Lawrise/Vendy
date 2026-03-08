import Title from "@/components/ui/Title";
import {
  CheckCircle,
  CreditCard,
  LayoutGrid,
  Link,
  MessageSquare,
  Palette,
  Plus,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import StepLayout from "./StepProcess";
import ProcessText from "./ProcessText";
import PageBuildDemo from "./PageBuildDemo";

const builderFeatures = [
  {
    icon: <Sparkles size={20} />,
    title: "Easy setup",
    description: "Get a shareable page in minutes",
  },
  {
    icon: <LayoutGrid size={20} />,
    title: "Building blocks",
    description: "Add socials, text, video, affiliate links, forms",
  },
  {
    icon: <Palette size={20} />,
    title: "Personalized style",
    description: "Choose from beautiful themes, colors, fonts, and branding",
  },
];

export default function Process() {
  return (
    <div>
      <Title
        title="Impressioné vos client du début à la fin"
        description="Faite monter vos prix en proposant une experience de travail professionelle à vos client"
      />
      <StepLayout>
        <ProcessText
          id={1}
          title="Construise votre boutique en 30 secondes"
          subtitle="Pas besoin de skills technique, on vous guide pas à pas pour créer et partager votre boutique simplement."
          features={builderFeatures}
        />
        <PageBuildDemo />
      </StepLayout>
      <StepLayout>
        <div className="lg:col-span-6 bg-amber-50 rounded-[2.5rem] h-[500px] flex items-center justify-center">
          <p className="text-amber-400 font-bold italic">
            Ici un autre composant visuel différent...
          </p>
        </div>
        <ProcessText
          id={2}
          title="L'accueil que vos clients méritent"
          subtitle="Remplacez les formulaires austères et les échanges d'emails par un portail client premium qui centralise tout."
          features={[
            {
              icon: <Link />, // ou Share2
              title: "Le Link-in-bio intelligent",
              description:
                "Un point d'entrée unique pour vos réseaux sociaux et vos services payants.",
            },
            {
              icon: <CheckCircle />,
              title: "Onboarding automatisé",
              description:
                "Collectez les informations et le paiement sur une interface qui respire le professionnalisme.",
            },
            {
              icon: <Zap />,
              title: "Zéro friction",
              description:
                "Vos clients savent exactement quoi faire et où ils en sont, dès le premier jour.",
            },
          ]}
        />
      </StepLayout>
      <StepLayout>
        <ProcessText
          id={3}
          title="Collaborez sans friction (et sans emails)"
          subtitle="L'étape où tout se joue. Finis les feedbacks perdus dans des boucles d'emails infinies."
          features={[
            {
              icon: <RefreshCw size={20} />,
              title: "Cycles d'itérations clairs",
              description:
                "Envoyez vos versions (V1, V2...), recevez des retours précis et validez les étapes en un clic.",
            },
            {
              icon: <MessageSquare size={20} />,
              title: "Centralisation des retours",
              description:
                "Tout l'historique de vos échanges et de vos fichiers est stocké au même endroit.",
            },
          ]}
        />
        <div className="lg:col-span-6 bg-blue-50 rounded-[2.5rem] h-[500px] flex items-center justify-center">
          <p className="text-blue-400 font-bold italic">
            Ici un autre composant visuel différent...
          </p>
        </div>
        {/* <IterationDemoVisual />{" "} */}
        {/* Un visuel montrant un bouton "Approve" ou "Request changes" */}
      </StepLayout>
      <StepLayout>
        <div className="lg:col-span-6 bg-green-50 rounded-[2.5rem] h-[500px] flex items-center justify-center">
          {/* Un visuel de facture propre ou une barre de progression de paiement */}
          <p className="text-green-600 font-bold">
            Visuel : Paiement sécurisé & Acomptes
          </p>
        </div>
        <ProcessText
          id={4}
          title="Sécurisez vos revenus automatiquement"
          subtitle="Ne courez plus après vos factures. Automatisez les acomptes pour démarrer sereinement."
          features={[
            {
              icon: <ShieldCheck size={20} />,
              title: "Acomptes obligatoires",
              description:
                "Bloquez automatiquement le début du projet au versement d'un premier paiement.",
            },
            {
              icon: <CreditCard size={20} />,
              title: "Paiements échelonnés",
              description:
                "Proposez du 2x ou 3x sans frais pour lever les barrières à l'achat sur vos gros services.",
            },
          ]}
        />
      </StepLayout>
    </div>
  );
}
