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
  link: string;
  icon: React.ReactNode;
  replace?: string[];
  blend?: string[];
  withIcon?: React.ReactNode[];
}

export const FEATURES: FeatureInterface[] = [
  {
    title: "Portail client",
    description:
      "Ne soyez plus un simple freelance avec un lien PayPal. Offrez à chaque client un espace pro à votre nom et vos couleurs.",
    link: "https://stripe.com",
    icon: <AppWindow className=""/>,
    replace: ["Notion", "Evernote"],
  },
  {
    title: "Onboarding et briefing",
    description:
      "Le projet commence avant même que vous ne parliez au client. Dès le paiement validé, Vendy envoie le formulaire de brief personnalisé.",
    link: "https://netflix.com",
    icon: <ClipboardCheck />,
    replace: ["Obsidian", "Roam Research"],
  },
  {
    title: "Gestion de versions et feedback",
    description:
      "Un tableau de bord qui montre visuellement l'état de chaque commande : Brief reçu, En cours, En révision, Livré.",
    link: "https://meta.com",
    icon: <Layers />,
    blend: ["Google Calendar"],
  },
  {
    title: "Paiement et facturation",
    description:
      "Encaissement sécurisé et déblocage des fichiers haute définition uniquement après validation du paiement final.",
    link: "https://amazon.com",
    icon: <CreditCard />,
    replace: ["Anki"],
  },
  {
    title: "Suivi de Production",
    description:
      "An integration that connects your learning tools and helps you stay on track.",
    link: "https://microsoft.com",
    icon: <LayoutList />,
    blend: ["Coursera", "Udemy"],
  },
  {
    title: "Coffre-fort de livraison",
    description:
      "A learning path that helps you learn new skills and advance your career.",
    link: "https://google.com",
    icon: <FolderLock />,
  },
];
