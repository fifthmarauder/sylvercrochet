import { ReactNode } from "react";

export const metadata = {
  title: "Sylver Crochet - Admin",
  description: "Manage your crochet products",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
