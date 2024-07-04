"use client";
import Link from "next/link";
import GitIcon from "../icons/GitIcon";
import Linkedicon from "../icons/LinkedinIcon";
import InstaIcon from "../icons/InstaIcon";
import EmailIcon from "../icons/EmailIcon";
import { useState } from "react";

const HeroMenu = () => {
  const [activeMenu, setActiveMenu] = useState("About");
  console.log("activeMenu",activeMenu)

  return (
    <section className="lg:flex lg:justify-between lg:gap-4">
      <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            SampathKumar
          </h1>
          <h3 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            MERN Stack Developer
          </h3>
          <p className="mt-4 max-w-xs leading-normal">
            Dedicated to creating accessible and engaging digital interfaces for
            seamless user experiences.
          </p>
          <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
              <li>
                <a href="#about" className="group flex items-center py-3" onClick={()=>setActiveMenu("About")}>
                  <span
                    className={`mr-4 rounded  transition-all group-hover:w-16  group-hover:h-px group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:h-px group-focus-visible:bg-slate-200 ${activeMenu === "About" ? "w-16 bg-slate-200 h-[1px]": "h-[5px] w-[5px] bg-slate-600"}`}
                  ></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    ABOUT
                  </span>
                </a>
              </li>
              <li>
                <a href="#experience" className="group flex items-center py-3" onClick={()=>setActiveMenu("Experience")}>
                  <span className={`mr-4 rounded  transition-all group-hover:w-16  group-hover:h-px group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:h-px group-focus-visible:bg-slate-200 ${activeMenu === "Experience" ? "w-16 bg-slate-200 h-[1px]": "h-[5px] w-[5px] bg-slate-600"}`}></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    EXPERIENCE
                  </span>
                </a>
              </li>
              <li>
                <a href="#projects" className="group flex items-center py-3" onClick={()=>setActiveMenu("Projects")}>
                  <span className={`mr-4 rounded  transition-all group-hover:w-16  group-hover:h-px group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:h-px group-focus-visible:bg-slate-200 ${activeMenu === "Projects" ? "w-16 bg-slate-200 h-[1px]": "h-[5px] w-[5px] bg-slate-600"}`}></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    PROJECTS
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center">
          <li className="mr-5 text-xs shrink-0">
            {" "}
            <Link href={"#"} className="block hover:text-slate-200">
              <GitIcon />
            </Link>
          </li>
          <li className="mr-5 text-xs shrink-0">
            {" "}
            <Link href={"#"} className="block hover:text-slate-200">
              <Linkedicon />
            </Link>
          </li>
          <li className="mr-5 text-xs shrink-0">
            {" "}
            <Link href={"#"} className="block hover:text-slate-200">
              <InstaIcon />
            </Link>
          </li>
          <li className="mr-5 text-xs shrink-0">
            {" "}
            <Link href={"#"} className="block hover:text-slate-200">
              <EmailIcon />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroMenu;
