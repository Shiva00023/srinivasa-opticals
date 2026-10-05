import { products } from "@/data/products";
// Swap these for Strapi / Supabase / REST calls later.
export const getProducts = async () => products;
export const getProductById = async (id: string) => products.find((p) => p.id === id) ?? null;
export async function submitAppointment(data: Record<string, string>) { await new Promise((r) => setTimeout(r, 600)); return { ok: true, data }; }
