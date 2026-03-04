import Title from "../ui/Title";
import BentoGridVendy from "./bentoGrid";

export function Outils() {
  return (
    <div className=" w-full flex justify-center">
      <div className="max-w-6xl">
        <Title
          title="Tout vos outils connectés en"
          surligne="un seul endroit"
          description="Un portail de marque blanche qui rassure vos clients et valorise votre travail."
        />

        <BentoGridVendy />
      </div>
    </div>
  );
}
