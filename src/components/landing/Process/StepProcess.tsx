interface StepLayoutProps {
  children: React.ReactNode;
}

export default function StepLayout({ children }: Readonly<StepLayoutProps>) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
          {children}
        </div>
      </div>
    </section>
  );
}