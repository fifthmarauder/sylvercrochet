import { ReactNode } from "react";

export const metadata = {
  title: "Sylver Crochet - Custom Order",
  description:
    "Need a cute crochet item which is not in our shop yet? Describe it and we will do our best to make it for you!",
};

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
