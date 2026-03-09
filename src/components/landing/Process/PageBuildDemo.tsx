import Image from "next/image";

export default function PageBuildDemo() {
  return (
    <div className="lg:col-span-6 relative w-full aspect-4/3 flex rounded-4xl ">
      <Image
        src="/images/PageBuilder.png"
        alt="Page Build Demo"
        fill
        className="object-contain rounded-4xl"
      />
    </div>
  );
}
