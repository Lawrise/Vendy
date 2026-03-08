import { Video, ArrowRight, Settings, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TelStoreViewProps {
  handleOrder: () => void;
  isLoading: boolean;
}

const TelStoreView = ({ handleOrder, isLoading }: TelStoreViewProps) => {
  return (
    <div className="flex flex-col h-full relative overflow-hidden animate-in fade-in duration-700">
      {/* Background Stylisé : Mesh Gradient Soft */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[40%] bg-violet-200/40 blur-[80px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[40%] bg-fuchsia-100/50 blur-[80px] rounded-full" />
        <div className="absolute inset-0 bg-zinc-50/20 backdrop-blur-[2px]" />
      </div>

      {/* Header / Profil */}
      <div className="relative z-10 pt-6 pb-6 px-6 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative inline-block mb-4"
        >
          {/* Ring d'accentuation autour de l'avatar */}
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-violet-500 to-fuchsia-500 animate-spin-slow opacity-20 blur-[2px]" />

          <div className="relative w-24 h-24 rounded-full border-[3px] border-white shadow-2xl overflow-hidden mx-auto">
            <Image
              src="/images/meufPP.jpg"
              alt={"sarah"}
              width={400}
              height={200}
              className="object-cover w-full h-full scale-105"
            />
          </div>

          <div className="absolute bottom-1 right-1 bg-emerald-500 w-6 h-6 rounded-full border-[3px] border-white flex items-center justify-center shadow-lg">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </div>
        </motion.div>

        <h3 className="text-xl font-black text-zinc-900 tracking-tight leading-none mb-2">
          Sarah design
        </h3>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/50 border border-white shadow-sm rounded-full">
          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
          <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">
            Production Vidéo Premium
          </p>
        </div>
      </div>

      {/* Liste de Produits - Glassmorphism */}
      <div className="relative z-10 flex-1 px-5 space-y-5  pb-4">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="group bg-white/70 backdrop-blur-md rounded-[2rem] border border-white shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden transition-all active:scale-[0.98]"
        >
          {/* Visual Preview */}
          <div className="relative w-full h-20 bg-zinc-900 flex items-center justify-center overflow-hidden">
            {/* Overlay dégradé sur l'image de preview */}
            <div className="absolute inset-0 bg-linear-to-tr from-violet-900/40 to-transparent z-10" />
            <Video
              className="text-white/90 drop-shadow-2xl relative z-20"
              size={38}
            />

            <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
              <p className="text-[9px] text-zinc-900 font-black uppercase tracking-tight italic">
                Best Seller
              </p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-black text-zinc-900 text-sm tracking-tight uppercase">
                Pack TikTok
              </h4>
              <span className="px-2 py-1 bg-violet-600 text-white text-[11px] font-black rounded-lg shadow-md shadow-violet-200">
                150€
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
              Transformez vos idées en vidéos virales avec un montage dynamique
              et sound design.
            </p>

            {/* <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-100/50">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border-2 border-white bg-zinc-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[9px] font-bold text-zinc-400">
                Join 400+ creators
              </p>
            </div> */}
          </div>
        </motion.div>

        {/* Badge Confiance */}
        <div className="flex items-center justify-center gap-2 opacity-60">
          <ShieldCheck size={12} className="text-zinc-400" />
          <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-tighter">
            Garantie satisfaction • Stripe Secure
          </p>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="relative z-10 p-6 mt-auto bg-white/30 backdrop-blur-lg border-t border-white/40">
        <button
          onClick={handleOrder}
          disabled={isLoading}
          className="relative h-14 w-full bg-zinc-900 rounded-4xl flex items-center justify-center transition-all active:scale-95 shadow-xl shadow-zinc-200 group overflow-hidden"
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="text-white"
            >
              <Settings size={22} />
            </motion.div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-white">
              <span className="font-black text-xs tracking-[0.1em]">
                PRENDRE CE PACK
              </span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          )}

          {/* Shimmer Effect */}
          <motion.div
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
          />
        </button>
      </div>
    </div>
  );
};

export default TelStoreView;
