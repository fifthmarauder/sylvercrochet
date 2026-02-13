import Header from "@/components/Header/Header";
import "./globals.css";

import localFont from "next/font/local";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

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

const noodle = localFont({
  src: [
    {
      style: "normal",
      path: "../../public/Fonts/VAGRundschriftD.ttf",
    },
  ],
  variable: "--font-noodle",
  display: "swap",
});

const knotNoodle = localFont({
  src: [
    {
      style: "normal",
      path: "../../public/Fonts/Knotnoodle-Regular.ttf",
    },
  ],
  variable: "--font-knotnoodle",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${sofia.variable}  ${noodle.variable} ${knotNoodle.variable}`}
    >
      <body>
        <Header />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
