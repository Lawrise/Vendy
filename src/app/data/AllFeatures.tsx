import {
  AppWindow,
  ClipboardCheck,
  CreditCard,
  FolderLock,
  GanttChart,
  Layers,
  LayoutList,
  Pen,
} from "lucide-react";

export interface FeatureInterface {
  title: string;
  description: string;
  icon: React.ReactNode;
  replace?: string[];
  blend?: string[];
  withIcon?: React.ReactNode[];
}

export const FEATURES: FeatureInterface[] = [
  {
    title: "Espace Client Marque Blanche",
    description:
      "Finis les fils d'emails interminables. Offrez un portail pro où votre client retrouve ses factures, ses fichiers et l'état du projet.",
    icon: <AppWindow className="h-6 w-6" />,
    replace: ["Emails", "WhatsApp"],
  },
  {
    title: "Onboarding Automatisé",
    description:
      "Gagnez 2h par client. Dès le paiement validé, Vendy envoie votre questionnaire de brief et récupère les assets sans que vous n'ayez rien à faire.",
    icon: <ClipboardCheck className="h-6 w-6" />,
    replace: ["Typeform", "Google Forms"],
  },
  {
    title: "Pipeline de Production",
    description:
      "Visualisez vos revenus et vos deadines en un clin d'œil. Un tableau de bord pensé pour ceux qui gèrent plusieurs missions en solo.",
    icon: <Layers className="h-6 w-6" />,
    replace: ["Trello", "Excel"],
  },
  {
    title: "Paiements Sécurisés",
    description:
      "Ne travaillez plus gratuitement. Vos fichiers finaux ne sont débloqués que lorsque le solde est intégralement réglé par le client.",
    icon: <CreditCard className="h-6 w-6" />,
    replace: ["Relances manuelles"],
  },
  {
    title: "Suivi en Temps Réel",
    description:
      "Réduisez l'anxiété de vos clients. Ils voient l'avancée de leur commande sans avoir besoin de vous envoyer 'Ça en est où ?' tous les deux jours.",
    icon: <LayoutList className="h-6 w-6" />,
    blend: ["Calendly", "Stripe"],
  },
  {
    title: "Coffre-fort de Livraison",
    description:
      "Un espace de stockage sécurisé pour vos livrables. Fini les liens WeTransfer qui expirent au moment où le client en a besoin.",
    icon: <FolderLock className="h-6 w-6" />,
    replace: ["WeTransfer", "Dropbox"],
  },
];
