import Hero from "@/components/landing/Hero";
import Why from "@/components/landing/Why";
import { Flow } from "@/components/landing/Flow";
import { Outils } from "@/components/landing/Outils";
import WaitingList from "@/components/landing/WaitingList";
import Footer from "@/components/landing/Footer";
import AllFeature from "@/components/landing/AllFeature";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-myBlack  flex  flex-col items-center">
     
      <Hero />
      <main className="flex flex-col justify-center items-center gap-y-45 w-full mt-24">
        <Flow />
        <AllFeature />
        <Why />
        <WaitingList />
      </main>
      <Footer />
    </div>
  );
}
