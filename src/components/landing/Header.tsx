import { Logo } from "@/components/assets/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="stick flex justify-between px-6 md:px-12 py-2 items-center w-full bg-bgWhite sticky top-0 z-50 border-b">
      <div className="flex items-center">
        <Logo />
        <p className="font-bold text-4xl tracking-tight text-primary">
          Vendy<span className="text-primary">.</span>
        </p>
      </div>
      <ul className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-primary font-bold hover:text-primary/80 transition">
          Home
        </Link>
        <Link href="mission" className="text-primary font-bold hover:text-primary/80 transition">
          Notre mission
        </Link>
        
      </ul>
      <p className="text-primary">Contact</p>
    </header>
  );
}
