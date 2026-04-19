import { ReactNode } from "react";

export const metadata = {
  title: "Sylver Crochet - Admin Login",
  description: "Login to view your crocheted products!",
};

export default function AdminLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
