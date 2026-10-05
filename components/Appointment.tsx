"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { submitAppointment } from "@/lib/api";
import { SITE, waLink, mapsLink } from "@/lib/config";
const services = ["Eye Test", "Frame Selection", "Lens Consultation", "Sunglasses", "General Enquiry"];
export default function Appointment() {
  const [err, setErr] = useState<Record<string, string>>({}); const [done, setDone] = useState(false); const [busy, setBusy] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>; const er: Record<string, string> = {};
    if ((d.name ?? "").trim().length < 2) er.name = "Please enter your full name.";
    if (!/^\+?[0-9\s-]{10,14}$/.test((d.phone ?? "").trim())) er.phone = "Please enter a valid phone number.";
    if (d.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) er.email = "Please enter a valid email address.";
    if (!d.service) er.service = "Please choose a service.";
    if (!d.date) er.date = "Please choose a date.";
    setErr(er); if (Object.keys(er).length) return;
    setBusy(true); await submitAppointment(d); setBusy(false); setDone(true);
  }
  const F = ({ n, l, children }: { n: string; l: string; children: React.ReactNode }) => <label className="grid gap-1 text-sm font-bold">{l}{children}<span className="min-h-[1em] text-xs font-medium text-red-700" role="alert">{err[n]}</span></label>;
  return (
    <section id="book" className="bg-burgundy px-5 py-24 text-cream"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
      <div><h2 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-none">When was your last eye test?</h2>
        <p className="my-5 max-w-sm text-lg opacity-90">Your vision deserves more than a quick check.</p>
        <div className="flex flex-wrap gap-3"><a href={waLink("Hello Srinivas Opticals, I would like to book an eye test.")} target="_blank" rel="noopener noreferrer" className="btn border-cream bg-cream text-burgundy">Enquire on WhatsApp</a>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn border-cream bg-transparent">Get directions</a></div></div>
      <div className="rounded-3xl bg-cream p-6 text-ink">
        {done ? <div className="py-10 text-center"><span className="mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-burgundy text-burgundy"><Check size={40} /></span>
          <h3 className="mt-4 font-serif text-3xl">Your appointment request has been received.</h3><p className="mt-2 text-ink/70">We will confirm by phone or WhatsApp.</p></div> :
        <form onSubmit={onSubmit} noValidate className="grid gap-2">
          <F n="name" l="Full name"><input name="name" autoComplete="name" className="input" /></F>
          <F n="phone" l="Phone number"><input name="phone" type="tel" autoComplete="tel" className="input" /></F>
          <F n="email" l="Email"><input name="email" type="email" autoComplete="email" className="input" /></F>
          <F n="service" l="Service"><select name="service" className="input" defaultValue=""><option value="" disabled>Select a service</option>{services.map((s) => <option key={s}>{s}</option>)}</select></F>
          <F n="date" l="Preferred date"><input name="date" type="date" className="input" /></F>
          <label className="grid gap-1 text-sm font-bold">Message<textarea name="message" rows={3} className="input" /></label>
          <button disabled={busy} className="btn mt-2">{busy ? "SENDING…" : "BOOK APPOINTMENT"}</button></form>}
      </div></div></section>);
}
