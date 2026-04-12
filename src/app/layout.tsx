import Header from "@/components/Header/Header";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Providers } from "./provider";
import { Metadata } from "next";
import { Nunito } from "next/font/google";

const sofia = Nunito({
  subsets: ["latin"],
  weight: ["700"],

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

export const metadata: Metadata = {
  title: "Sylver Crochet",
  description: "Handmade Crochet Products",
  openGraph: {
    title: "Sylver Crochet",
    description: "Handmade Crochet Products",
    url: "https://eeshashahbaz.vercel.app",
    images: [
      {
        url: "og-preview.png",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/Images/favicon.ico" },
      { url: "/Images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/Images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/Images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/Images/site.webmanifest",
};

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
        <Providers>
          <Header />
          {children}
          <ToastContainer />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
