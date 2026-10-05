export default function Glasses({ color = "currentColor", className = "" }: { color?: string; className?: string }) {
  return (<svg viewBox="0 0 200 80" className={className} fill="none" stroke={color} strokeWidth="5" aria-hidden="true">
    <circle cx="55" cy="42" r="30" /><circle cx="145" cy="42" r="30" /><path d="M85 38q15-10 30 0M25 36L5 26M175 36l20-10" /></svg>);
}
