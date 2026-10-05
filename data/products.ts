export type Product = { id: string; name: string; price: number; category: string; shape: string; material: string; colors: string[]; size: string; badge?: string; tone: string };
export const products: Product[] = [
  { id: "aurelia", name: "Aurelia", price: 2499, category: "Optical", shape: "Round", material: "Premium Acetate", colors: ["Black", "Brown", "Transparent"], size: "Medium", badge: "BESTSELLER", tone: "#790D16" },
  { id: "monarch", name: "Monarch", price: 2999, category: "Premium", shape: "Cat-eye", material: "Titanium & Acetate", colors: ["Tortoise", "Navy"], size: "Medium", badge: "NEW", tone: "#9b7a3c" },
  { id: "nova", name: "Nova", price: 2799, category: "Sunglasses", shape: "Aviator", material: "Metal alloy", colors: ["Gold", "Gunmetal"], size: "Large", tone: "#2b3a45" },
  { id: "elite", name: "Elite", price: 3499, category: "Premium", shape: "Rectangle", material: "Beta titanium", colors: ["Black", "Silver"], size: "Medium", badge: "LIMITED", tone: "#171717" },
];
