import type { Metadata } from "next";
import { Roboto_Condensed, Open_Sans } from "next/font/google";
import { global } from "../constants/headers";
import "../index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = global;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
