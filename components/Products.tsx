"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import Glasses from "./Glasses";
import { products, type Product } from "@/data/products";
import { waLink } from "@/lib/config";
const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
export default function Products() {
  const [wish, setWish] = useState<string[]>([]); const [sel, setSel] = useState<Product | null>(null);
  useEffect(() => { try { setWish(JSON.parse(localStorage.getItem("so-wish") ?? "[]")); } catch {} }, []);
  const toggle = (id: string) => setWish((w) => { const n = w.includes(id) ? w.filter((x) => x !== id) : [...w, id]; try { localStorage.setItem("so-wish", JSON.stringify(n)); } catch {} return n; });
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setSel(null); addEventListener("keydown", k); document.body.style.overflow = sel ? "hidden" : ""; return () => removeEventListener("keydown", k); }, [sel]);
  return (
    <section id="eyewear" className="bg-beige/40 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-none">The new frame edit</h2>
        <p className="mb-10 mt-3 text-ink/70">Meet the frames defining the season. {wish.length > 0 && <b className="text-burgundy">{wish.length} saved.</b>}</p>
        <div className="-mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {products.map((p, i) => (
            <motion.article key={p.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08, duration: .8 }}
              className="relative w-[78%] shrink-0 snap-start md:w-auto">
              {p.badge && <span className="absolute left-3 top-3 z-10 rounded-full bg-burgundy px-3 py-1 text-[10px] font-bold tracking-widest text-white">{p.badge}</span>}
              <button aria-pressed={wish.includes(p.id)} aria-label={`Save ${p.name}`} onClick={() => toggle(p.id)} className="absolute right-2 top-2 z-10 grid h-11 w-11 place-items-center text-burgundy transition active:scale-125">
                <Heart fill={wish.includes(p.id) ? "currentColor" : "none"} /></button>
              <button onClick={() => setSel(p)} aria-label={`View ${p.name}`} className="group grid aspect-square w-full place-items-center rounded-2xl bg-white transition hover:-translate-y-2 hover:shadow-xl">
                <Glasses color={p.tone} className="w-4/5 transition duration-500 group-hover:scale-110 group-hover:-rotate-3" /></button>
              <div className="mt-3 flex items-baseline justify-between"><div><p className="text-xs text-ink/50">0{i + 1} · {p.shape}</p><h3 className="font-serif text-2xl">{p.name}</h3></div><p className="font-bold">{inr(p.price)}</p></div>
            </motion.article>))}
        </div>
      </div>
      <AnimatePresence>{sel && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)} className="fixed inset-0 z-[80] grid place-items-center bg-black/60 p-4">
          <motion.div role="dialog" aria-modal="true" aria-label={sel.name} initial={{ scale: .92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .95 }} onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[92vh] w-full max-w-3xl overflow-auto rounded-3xl bg-cream md:grid-cols-2">
            <button autoFocus aria-label="Close" onClick={() => setSel(null)} className="absolute right-2 top-2 grid h-11 w-11 place-items-center"><X /></button>
            <div className="grid place-items-center bg-beige p-8"><Glasses color={sel.tone} className="w-full" /></div>
            <div className="p-8"><h3 className="font-serif text-4xl">{sel.name}</h3><p className="my-2 text-2xl font-bold">{inr(sel.price)}</p>
              <dl className="my-5 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 text-sm"><dt className="text-ink/60">Frame type</dt><dd className="font-bold">{sel.shape}</dd><dt className="text-ink/60">Material</dt><dd className="font-bold">{sel.material}</dd><dt className="text-ink/60">Colors</dt><dd className="font-bold">{sel.colors.join(", ")}</dd><dt className="text-ink/60">Size</dt><dd className="font-bold">{sel.size}</dd></dl>
              <div className="flex flex-wrap gap-3"><a href="#book" onClick={() => setSel(null)} className="btn">BOOK A FITTING</a>
                <a href={waLink(`Hello Srinivas Opticals, I would like to know more about the ${sel.name} frame (${inr(sel.price)}).`)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">ENQUIRE ON WHATSAPP</a></div></div>
          </motion.div></motion.div>)}</AnimatePresence>
    </section>);
}
