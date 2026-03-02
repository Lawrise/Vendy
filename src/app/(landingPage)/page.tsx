import Bentogrid from "../../components/landing/bentoGrid";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Why from "@/components/landing/Why";

export default function Home() {
  return (
    <div className="min-h-screen bg-bgWhite text-myBlack font-sans flex flex-col items-center">
      <Header />
      <Hero />
      <main className="mx-6 md:mx-12 max-w-6xl flex flex-col gap-y-48">
        <Why />
        <div>
          <h1 className="text-4xl font-bold text-center mb-12">
            Les outils pour une reussite digitale
          </h1>
          <Bentogrid />
        </div>
        <div className="relative text-center mb-12 h-[900px] pt-48">
          {/* Fond full-bleed + penché */}
          <div className="absolute w-screen left-1/2 -translate-x-1/2 inset-0 bg-electricBlue skew-y-3 origin-top-left z-0" />

          {/* Contenu au-dessus du fond */}
          <h1 className="relative text-4xl font-bold inline text-white">
            De la boutique au portail client -{" "}
            <span className="relative inline-block overflow-visible">
              Instantanément
              <svg
                width="1113"
                height="113"
                viewBox="0 0 1113 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-20 left-0 w-full overflow-visible z-20"
              >
                <path
                  d="M20 24.7065C87.3003 25.2585 154.601 25.8106 294.768 26.0949C434.936 26.3793 645.932 26.3793 781.91 25.2753C917.889 24.1712 972.457 21.9632 1013.3 20.8257C1054.14 19.6882 1079.61 19.6882 1090 21.0683C1103.29 22.8334 1049.29 34.1242 961.378 46.3605C914.087 52.9425 858.911 58.5967 769.867 63.9328C680.822 69.269 558.954 73.6851 467.98 75.96C320.927 79.6373 255.248 79.339 247.862 82.1158C244.399 83.4177 255.028 85.9966 269.689 87.9621C284.351 89.9276 306.178 91.5836 372.9 92.4367C439.621 93.2899 550.576 93.2899 634.109 91.6338C717.641 89.9778 770.39 86.6657 813.025 83.0275C855.659 79.3892 886.581 75.5251 918.44 71.5439"
                  stroke="#2EE6A6"
                  stroke-width="40"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </h1>
        </div>
      </main>
      <footer className="h-96"></footer>
    </div>
  );
}
