"use client";
import { motion } from "framer-motion";
import Glasses from "./Glasses";
import { products } from "@/data/products";
const ease = [0.22, 1, 0.36, 1] as const;
export default function Hero() {
  const words = ["SEE THE", "WORLD", "DIFFERENTLY."];
  return (
    <section id="top" className="relative grid min-h-svh items-center overflow-hidden bg-cream px-5 pb-16 pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="text-xs font-bold tracking-[.2em] text-burgundy">VISION • STYLE • COMFORT</motion.p>
          <h1 className="mt-4 font-serif text-[clamp(3rem,9vw,8rem)] leading-[.95]">
            {words.map((w, i) => <span key={w} className="block overflow-hidden"><motion.span className={`block ${i === 2 ? "italic text-burgundy" : ""}`} initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease, delay: .3 + i * .12 }}>{w}</motion.span></span>)}
          </h1>
          <p className="my-6 max-w-md text-lg text-ink/70">Discover eyewear designed around your vision, your personality and your everyday style.</p>
          <div className="flex flex-wrap gap-3"><a href="#eyewear" className="btn">EXPLORE EYEWEAR</a><a href="#book" className="btn btn-ghost">BOOK EYE TEST</a></div>
        </div>
        <motion.div initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.3, ease, delay: .4 }}
          className="relative mx-auto grid aspect-[4/5] w-full max-w-md place-items-center rounded-t-[200px] rounded-b-3xl bg-beige">
          <Glasses color="#790D16" className="w-[88%]" />
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -left-4 bottom-8 rounded-2xl bg-white/70 p-4 shadow-xl backdrop-blur-md">
            <p className="text-[10px] font-bold tracking-widest text-burgundy">NEW ARRIVAL</p><p className="font-serif text-xl">Aurelia 01</p>
            <p className="text-sm text-ink/60">Premium Acetate · ₹{products[0].price.toLocaleString("en-IN")}</p></motion.div>
        </motion.div>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-6 border-t border-burgundy/20 pt-8 md:grid-cols-4">
        {[["10+", "Years of trust"], ["5,000+", "Happy customers"], ["50+", "Premium collections"], ["100%", "Vision care"]].map(([n, l]) => <div key={l}><p className="font-serif text-4xl text-burgundy">{n}</p><p className="text-sm text-ink/60">{l}</p></div>)}
      </div>
    </section>);
}
