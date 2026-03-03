import { CLientPov } from "@/components/landing/ClientPov";
import Bentogrid from "../../components/landing/bentoGrid";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Why from "@/components/landing/Why";
import { Button } from "@/components/ui/button";
import { Flow } from "@/components/landing/Flow";

export default function Home() {
  return (
    <div className="min-h-screen bg-bgWhite text-myBlack font-sans flex  flex-col items-center">
      <Header />
      <Hero />
      <main className="flex flex-col gap-y-48 w-full">
        <Why />
        <div>
          <h1 className="text-4xl font-bold text-center mb-12">
            Les outils pour une reussite digitale
          </h1>
          <Bentogrid />
        </div>
        {/* Contenu au-dessus du fond */}
        <Flow />
      </main>
      <footer className="h-96"></footer>
    </div>
  );
}
