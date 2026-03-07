import Hero from "@/components/landing/Hero";
import Why from "@/components/landing/Why";
import { StoreToDash } from "@/components/landing/StoreToDash";
import WaitingList from "@/components/landing/WaitingList";
import Footer from "@/components/landing/Footer";
import AllFeature from "@/components/landing/AllFeature";
import Process from "@/components/landing/Process";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-myBlack  flex  flex-col items-center">
     
      <Hero />
      <main className="flex flex-col justify-center items-center gap-y-45 w-full mt-24">
        <StoreToDash />
        <AllFeature />
        <Process />
        <Why />
        <WaitingList />
      </main>
      <Footer />
    </div>
  );
}
