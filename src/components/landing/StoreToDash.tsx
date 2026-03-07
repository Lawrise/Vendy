import { ClientPov } from "./ClientPov";
import Title from "../ui/Title";

export function StoreToDash() {
  return (
    <div className=" flex flex-col  max-w-6xl w-full justify-center items-start">
      <Title
        title="Passez du paiement à la collaboration"
        surligne="en un éclair."
        description="Un portail de marque blanche qui rassure vos clients et valorise votre travail."
      />
      <ClientPov />
    </div>
  );
}
