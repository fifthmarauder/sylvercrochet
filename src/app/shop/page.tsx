import ShopClient from "./ShopClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function ShopPage() {
  let initialProducts = [];

  try {
    const res = await fetch(`${API_URL}/api/users/adminProducts`, {
      cache: "no-store",
    });
    initialProducts = await res.json();
  } catch {}

  return <ShopClient initialProducts={initialProducts} />;
}
