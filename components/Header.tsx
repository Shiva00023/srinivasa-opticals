"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
const links = [["Eyewear", "#eyewear"], ["Why us", "#why"], ["Book", "#book"], ["Contact", "#contact"]];
export default function Header() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-cream/85 py-2 shadow-sm backdrop-blur-md" : "py-4"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#top" aria-label="Srinivas Opticals home"><Logo className={`w-auto transition-all ${scrolled ? "h-9" : "h-12"}`} /></a>
        <nav className="hidden gap-8 md:flex" aria-label="Main">{links.map(([l, h]) => <a key={h} href={h} className="text-sm font-medium hover:text-burgundy">{l}</a>)}</nav>
        <div className="flex items-center gap-2"><a href="#book" className="btn hidden md:inline-flex">Book eye test</a>
          <button className="grid h-11 w-11 place-items-center md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      </div>
      {open && <nav className="fixed inset-x-0 top-[64px] flex h-[calc(100svh-64px)] flex-col gap-6 bg-cream p-8 font-serif text-4xl md:hidden">{links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}</nav>}
    </header>);
}
