import { CheckCircle } from "lucide-react";

export function UserPov() {
  return (
    <div className="w-full flex h-full">
      <div className="w-2/3 h-140 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-zinc-200"></div>
      <div className="w-1/3 flex justify-center items-center">
        <ul className="space-y-6">
          <li className="flex items-center gap-3 font-bold text-2xl">
            <CheckCircle className="text-primary" size={20} />
            Paiement recu
          </li>
          <li className="flex items-center gap-3 font-bold text-2xl">
            <CheckCircle className="text-primary" size={20} />
            Portail client creer
          </li>
          <li className="flex items-center gap-3 font-bold text-2xl">
            <CheckCircle className="text-primary" size={20} />
            Client notifie
          </li>
        </ul>
      </div>
    </div>
  );
}
