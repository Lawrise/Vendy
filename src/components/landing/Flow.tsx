"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { ClientPov } from "./ClientPov";
import { UserPov } from "./UserPov";
import Title from "../ui/Title";

type Pov = "client" | "vous";

export function Flow() {
  const [activePov, setActivePov] = useState<Pov>("vous");
  return (
    <div className=" flex flex-col  max-w-6xl w-full justify-center items-start bg-white px-8 rounded-4xl">
      {/* Fond full-bleed + penché */}
      {/* <div className="absolute w-screen left-1/2 -translate-x-1/2 inset-0 bg-primary skew-y-3 origin-top-left" /> */}
      {/* <h1 className="relative text-6xl font-bold text-start tracking-tight text-black mb-4 w-full">
            Passez du paiement à la collaboration{" "}
            <span className="text-primary">en un éclair.</span>
          </h1>
          <h2 className="text-2xl text-start w-full">
            Un portail de marque blanche qui rassure vos clients et valorise
            votre travail.
          </h2> */}
      <Title
        title="Passez du paiement à la collaboration"
        surligne="en un éclair."
        description="Un portail de marque blanche qui rassure vos clients et valorise votre travail."
      />

      <div className="flex justify-center gap-x-6 mb-20 w-full">
        <Button
          variant={activePov === "client" ? "default" : "outline"}
          onClick={() => setActivePov("client")}
          className="py-8 px-16 text-2xl"
        >
          Cote client
        </Button>
        <Button
          variant={activePov === "vous" ? "default" : "outline"}
          onClick={() => setActivePov("vous")}
          className="py-8 px-16 text-2xl"
        >
          Votre dashboard
        </Button>
      </div>
      {activePov === "client" ? <ClientPov /> : <UserPov />}

      {/* Freelance POV */}
    </div>
  );
}
