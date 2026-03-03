"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { ClientPov } from "./ClientPov";
import { UserPov } from "./UserPov";

type Pov = "client" | "vous";

export function Flow() {
  const [activePov, setActivePov] = useState<Pov>("vous");
  return (
    <div className="w-full flex justify-center mt-46  text-center mb-12 py-48 bg-primary clip-slant-both">
      {/* Fond full-bleed + penché */}
      {/* <div className="absolute w-screen left-1/2 -translate-x-1/2 inset-0 bg-primary skew-y-3 origin-top-left" /> */}
      <div className="mx-auto p-4 max-w-6xl w-full flex flex-col justify-center items-center">
        <h1 className="relative text-4xl font-bold inline text-white mb-12 w-full">
          Passez du paiement à la collaboration{" "}
          <span className="relative inline-block overflow-visible">
            en un éclair.
            <svg
              width="1113"
              height="113"
              viewBox="0 0 1113 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-16 left-0 w-full overflow-visible z-20"
            >
              <path
                d="M20 24.7065C87.3003 25.2585 154.601 25.8106 294.768 26.0949C434.936 26.3793 645.932 26.3793 781.91 25.2753C917.889 24.1712 972.457 21.9632 1013.3 20.8257C1054.14 19.6882 1079.61 19.6882 1090 21.0683C1103.29 22.8334 1049.29 34.1242 961.378 46.3605C914.087 52.9425 858.911 58.5967 769.867 63.9328C680.822 69.269 558.954 73.6851 467.98 75.96C320.927 79.6373 255.248 79.339 247.862 82.1158C244.399 83.4177 255.028 85.9966 269.689 87.9621C284.351 89.9276 306.178 91.5836 372.9 92.4367C439.621 93.2899 550.576 93.2899 634.109 91.6338C717.641 89.9778 770.39 86.6657 813.025 83.0275C855.659 79.3892 886.581 75.5251 918.44 71.5439"
                stroke="#2EE6A6"
                strokeWidth="40"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <h2 className="text-2xl text-white mb-20 text-center max-w-xl">
           Un portail de
          marque blanche qui rassure vos clients et valorise votre travail.
        </h2>
        <div className="flex justify-center gap-x-6 mb-20">
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
    </div>
  );
}
