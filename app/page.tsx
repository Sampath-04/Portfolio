import { useEffect, useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Gradientdiv from "./components/GradientPosition";
import HeroMenu from "./components/HeroMenu";
import Projects from "./components/Projects";
export default function Home() {

  return (
    <Gradientdiv>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <section className="lg:flex lg:justify-between lg:gap-4">
          <HeroMenu />
          <main className="pt-12 md:pt-24 lg:w-1/2 lg:py-24">
            <About/>
            <Experience/>
            <Projects/>
          </main>
        </section>
      </div>
    </Gradientdiv>
  );
}
