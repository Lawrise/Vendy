import { CheckCircle } from "lucide-react";

export function UserPov() {
  return (
    <div className="w-full flex h-full">
      <div className="w-1/3 flex justify-center items-center">
        <ul className="space-y-6">
          <li className="flex items-center gap-3 font-bold text-white">
            <CheckCircle className="text-secondary" size={20} />
            Paiement recu
          </li>
          <li className="flex items-center gap-3 font-bold text-white">
            <CheckCircle className="text-secondary" size={20} />
            Portail client creer
          </li>
          <li className="flex items-center gap-3 font-bold text-white">
            <CheckCircle className="text-secondary" size={20} />
            Client notifie
          </li>
        </ul>
      </div>
      <div className="w-2/3 h-140 bg-white rounded-2xl"></div>
    </div>
  );
}
