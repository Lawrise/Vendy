import Bentogrid from "../../components/landing/bentoGrid";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Why from "@/components/landing/Why";

export default function Home() {
  return (
    <div className="min-h-screen bg-bgWhite text-myBlack font-sans flex flex-col items-center">
      <Header />
      <Hero />
      <main className="mx-6 md:mx-12 max-w-6xl flex flex-col gap-y-24">
        <Why />
        <div>
          <h1 className="text-4xl font-bold text-center mb-12">
            Les outils pour une reussite digitale
          </h1>
          <Bentogrid />
        </div>
      </main>
      <footer className="h-96"></footer>
    </div>
  );
}
