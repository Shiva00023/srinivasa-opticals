import Logo from "./Logo";
import { SITE, waLink, mapsLink } from "@/lib/config";
export default function Footer() {
  return (
    <footer id="contact" className="bg-ink px-5 pb-28 pt-16 text-cream md:pb-12"><div className="mx-auto max-w-7xl">
      <div className="inline-block rounded-2xl bg-white px-4 py-2"><Logo className="h-12 w-auto" /></div>
      <p className="mt-4 font-serif text-2xl italic">See clear. Look better.</p>
      <div className="mt-10 grid gap-8 text-sm opacity-90 sm:grid-cols-3">
        <div className="grid gap-1"><b>Explore</b><a href="#eyewear">Eyewear</a><a href="#why">Why us</a><a href="#book">Book eye test</a></div>
        <div className="grid gap-1"><b>Services</b><span>Eye testing</span><span>Frames and lenses</span><span>Sunglasses and kids eyewear</span></div>
        <div className="grid gap-1"><b>Contact</b><a href={`tel:+${SITE.phone}`}>{SITE.phoneDisplay}</a><a href={waLink("Hello Srinivas Opticals")} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={`mailto:${SITE.email}`}>{SITE.email}</a><a href={mapsLink} target="_blank" rel="noopener noreferrer">Directions</a></div></div>
      <p className="mt-10 border-t border-white/15 pt-6 text-xs opacity-70">© 2026 Srinivas Opticals. All Rights Reserved.</p></div>
      <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 flex gap-1 bg-burgundy p-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] md:hidden">
        {[["Book eye test", "#book"], ["WhatsApp", waLink("Hello Srinivas Opticals")], ["Call", `tel:+${SITE.phone}`]].map(([l, h]) => <a key={l} href={h} className="grid min-h-[44px] flex-1 place-items-center text-xs font-bold text-white">{l}</a>)}</nav>
    </footer>);
}
