import Hero from "@/components/landing/hero/Hero";
import Why from "@/components/landing/Why";
import { StoreToDash } from "@/components/landing/DemoRapide/StoreToDash";
import WaitingList from "@/components/landing/WaitingList";
import Footer from "@/components/landing/Footer";
import AllFeature from "@/components/landing/Features/AllFeature";
import Process from "@/components/landing/Process/Process";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-myBlack  flex  flex-col items-center">
      <Hero />
      <main className="flex flex-col justify-center items-center gap-y-45 w-full mt-24">
        <StoreToDash />
        <Process />
        <AllFeature />
        <Why />
        <WaitingList />
      </main>
      <Footer />
    </div>
  );
}
