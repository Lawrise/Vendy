import { HoverEffect } from "../ui/card-hover-effect";
import { FEATURES } from "@/app/data/AllFeatures";
import Title from "../ui/Title";

export default function AllFeature() {
  return (
    <div className="max-w-6xl">
      <Title
        title="Tout vos outils connectés en"
        surligne="un seul endroit"
        description="Un portail de marque blanche qui rassure vos clients et valorise votre travail."
      />
      <HoverEffect items={FEATURES} />
    </div>
  );
}
