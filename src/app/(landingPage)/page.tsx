import Hero from "@/components/landing/Hero";
import Why from "@/components/landing/Why";
import { Flow } from "@/components/landing/Flow";
import { Outils } from "@/components/landing/Outils";
import WaitingList from "@/components/landing/WaitingList";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bgWhite text-myBlack  flex  flex-col items-center">
     
      <Hero />
      <main className="flex flex-col justify-center items-center gap-y-54 w-full mt-24">
        <Why />
        <Flow />
        <Outils />
        <WaitingList />
      </main>
      <Footer />
    </div>
  );
}
