import { ReactNode } from "react";

export const metadata = {
  title: "Sylver Crochet - Your Cart",
  description: "Your crochet dolls, plushies and more are displayed here!",
};

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
