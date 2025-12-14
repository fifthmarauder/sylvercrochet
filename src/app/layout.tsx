import "./globals.css";
import { Borel } from "next/font/google";
import localFont from "next/font/local";

const borel = Borel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-borel",
});

const sofia = localFont({
  src: [
    {
      weight: "700",
      style: "normal",
      path: "../../public/Fonts/Sofia Pro Bold Az.woff",
    },
    {
      weight: "400",
      style: "normal",
      path: "../../public/Fonts/Sofia Pro Regular Az.woff",
    },
  ],
  variable: "--font-sofia",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${borel.variable} ${sofia.variable}`}>
      <body>{children}</body>
    </html>
  );
}
