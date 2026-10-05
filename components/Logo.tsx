import Image from "next/image";
export default function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  // mix-blend-multiply removes the logo's white background on cream surfaces
  return <Image src="/logo.jpeg" alt="Srinivas Opticals" width={1600} height={535} priority className={`${className} mix-blend-multiply`} />;
}
