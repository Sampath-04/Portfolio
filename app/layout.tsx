import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./components/style.css";
import { IntersectionProvider } from "./Context/IntersectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SampathKumar",
  description:
    "SampathKumar is a web developer who specializes in creating applications with friendly user interfaces, ensuring accessibility and inclusivity. He excels in building responsive, interactive, and user-centric digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-950 leading-relaxed text-white selection:bg-slate-400 selection:text-zinc-800`}
      >
       <IntersectionProvider>
       {children}
       </IntersectionProvider>
      </body>
    </html>
  );
}
