const items = [["Precision eye testing", "Professional vision assessment."], ["Expert frame fitting", "Frames selected around your face and comfort."], ["Premium lenses", "Reliable lenses for everyday vision."], ["Personalized service", "Guidance from selection to aftercare."]];
export default function Why() {
  return (
    <section id="why" className="px-5 py-24"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
      <div className="grid aspect-[4/5] place-items-center rounded-3xl bg-softblue text-center font-serif text-2xl text-ink/60 md:sticky md:top-24 md:self-start">Add optician photo here</div>
      <div><p className="text-xs font-bold tracking-[.2em] text-burgundy">WHY SRINIVAS?</p>
        <h2 className="mb-4 mt-3 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-none">More than just glasses.</h2>
        <p className="mb-8 max-w-md text-ink/70">From accurate eye testing to carefully selected frames, we make eyewear personal.</p>
        {items.map(([t, d]) => <div key={t} className="border-t border-burgundy/20 py-6"><h3 className="font-serif text-2xl text-burgundy">{t}</h3><p className="text-ink/70">{d}</p></div>)}</div>
    </div></section>);
}
