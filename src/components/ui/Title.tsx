interface TitleProps {
  title: string;
  surligne?: string;
  description?: string;
}

export default function Title({ title, surligne, description }: TitleProps) {
  return (
    <div className="w-full max-w-3xl mb-12">
      <h1 className="text-6xl font-extrabold text-start mb-4 tracking-tight max-w-3xl">
        {title}
        {surligne && <span className="text-primary"> {surligne}</span>}
      </h1>

      {description && (
        <p className="text-2xl text-slate-800">{description}</p>
      )}
    </div>
  );
}
