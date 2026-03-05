import Title from "../ui/Title";

export default function WaitingList() {
  return (
    <section className="bg-white rounded-4xl py-24 px-8 w-full max-w-6xl text-center">
      <div className="w-full">
        <Title
          title="Soyez les premiers. Restez organisés."
          description="Vendy arrive bientôt. Rejoignez la bêta privée et simplifiez les paiements et la collaboration client dès le premier jour."
        />

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-150"
          />

          <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition">
            Request Early Access
          </button>
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          No spam. Early members receive exclusive launch benefits.
        </p>
      </div>
    </section>
  );
}
