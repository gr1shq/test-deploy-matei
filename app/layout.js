import {  
  Lato, Comfortaa, 
  Lexend, Plus_Jakarta_Sans, Inter, Karla, Josefin_Sans, Poppins
 } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const lexend = Lexend({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const karla = Karla({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-karla",
});

const josefin = Josefin_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
});

const comfortaa = Comfortaa({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const metadata = {
  title: "12",
  description: "hey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} ${lexend.variable} ${jakarta.variable} ${inter.variable} ${karla.variable} ${josefin.variable} ${comfortaa.variable} `}>
        {children}
      </body>
    </html>
  );
}