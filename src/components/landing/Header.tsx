import { Logo } from "@/components/assets/Logo";

export default function Header() {
  return (
    <header className="flex justify-between px-6 md:px-12 py-6 items-center w-full bg-primary">
      <div className="flex items-center gap-2">
        <Logo />
        <p className="font-bold text-4xl tracking-tight text-white">
          Vendy<span className="text-indigo-500">.</span>
        </p>
      </div>
      <p>Contact</p>
    </header>
  );
}
