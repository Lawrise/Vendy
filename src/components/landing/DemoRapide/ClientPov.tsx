"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TelOnboardView from "./TelOnboardView";
import TelStoreView from "./TelStoreView";
import PcViewDemo from "./PcViewDemo";
// ... (tes imports lucide et ui)

export function ClientPov() {
  // On remplace le useEffect par un état contrôlé par le clic
  const [hasOrdered, setHasOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = () => {
    setIsLoading(true);
    // On simule un petit temps de paiement pour le réalisme
    setTimeout(() => {
      setIsLoading(false);
      setHasOrdered(true);
    }, 500);
  };

  return (
    <div className="relative w-full min-h-187 flex items-center justify-center overflow-visible">
      <motion.div layout className="flex items-center justify-center gap-12">
        {/* === VUE TÉLÉPHONE === */}
        <motion.div layout className="z-20">
          <div className="w-72 h-145 bg-white rounded-[40px] flex flex-col shadow-2xl border border-zinc-200 overflow-hidden relative">
            <div className="flex flex-col h-full">
              {hasOrdered ? (
                /* ÉTAT B : LE PORTAIL CLIENT (Après achat) */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col h-full"
                >
                  <TelOnboardView />
                </motion.div>
              ) : (
                /* ÉTAT A : LA BOUTIQUE */
                <TelStoreView handleOrder={handleOrder} isLoading={isLoading} />
              )}
            </div>
          </div>
        </motion.div>

        {/* === VUE PC (Freelance) === */}
        <AnimatePresence mode="popLayout">
          {hasOrdered && (
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="hidden lg:block"
            >
              {/* Le Dashboard Freelance qui reçoit la notif */}
              <PcViewDemo setHasOrdered={setHasOrdered} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
