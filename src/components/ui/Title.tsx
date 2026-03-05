interface TitleProps {
  title: string;
  surligne?: string;
  description?: string;
}

export default function Title({ title, surligne, description }: TitleProps) {
  return (
    <div className="w-full mb-12 flex flex-col items-center text-center">
      <h1 className="text-6xl font-semibold font-heading mb-4 tracking-tight max-w-4xl text-pretty">
        {title}
        {surligne && <span className="text-primary"> {surligne}</span>}
      </h1>

      {description && (
        <p className="text-2xl max-w-2xl text-slate-800">{description}</p>
      )}
    </div>
  );
}
