import { Suspense } from "react";
import OrderSuccessContent from "./OrderSuccessContent";

export const metadata = {
  title: "Sylver Crochet – Handmade Anime Plushies & Keychains",
  description:
    "Shop handmade crochet anime and game character plushies, amigurumi and keychains. Custom orders available.",
};
export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
