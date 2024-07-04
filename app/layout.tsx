import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CusorBubble from "./components/CursorBubble";
import "./components/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SampathKumar",
  description: "SampathKumar is a web developer who specializes in creating applications with friendly user interfaces, ensuring accessibility and inclusivity. He excels in building responsive, interactive, and user-centric digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-950 leading-relaxed text-white selection:bg-slate-400 selection:text-zinc-800`}
      >
        <CusorBubble/>
        {children}
      </body>
    </html>
  );
}
