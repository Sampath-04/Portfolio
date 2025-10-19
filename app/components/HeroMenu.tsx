"use client";
import Link from "next/link";
import GitIcon from "../icons/GitIcon";
import Linkedicon from "../icons/LinkedinIcon";
import InstaIcon from "../icons/InstaIcon";
import EmailIcon from "../icons/EmailIcon";
import { useContext, useState } from "react";
import { IntersectionContext } from "../Context/IntersectionContext";

const HeroMenu = () => {
  const activeSection = useContext(IntersectionContext);

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          SampathKumar
        </h1>
        <h3 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          MERN | Spring Boot Developer | AI Developer
        </h3>
        <p className="mt-4 max-w-xs leading-normal text-gray-500">
          Dedicated to creating accessible and engaging digital interfaces for
          seamless user experiences.
        </p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a
                href="#about"
                className="group flex items-center py-3"
              >
                <span
                  className={`mr-4 rounded  transition-all group-hover:w-16  group-hover:h-px group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:h-px group-focus-visible:bg-slate-200 ${
                    activeSection === "about"
                      ? "w-16 bg-slate-200 h-[1px]"
                      : "h-[5px] w-[5px] bg-slate-600"
                  }`}
                ></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "about" ? "text-white": "text-gray-500"}`}>
                  ABOUT
                </span>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="group flex items-center py-3"
              >
                <span
                  className={`mr-4 rounded  transition-all group-hover:w-16  group-hover:h-px group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:h-px group-focus-visible:bg-slate-200 ${
                    activeSection === "experience"
                      ? "w-16 bg-slate-200 h-[1px]"
                      : "h-[5px] w-[5px] bg-slate-600"
                  }`}
                ></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "experience" ? "text-white": "text-gray-500"}`}>
                  EXPERIENCE
                </span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="group flex items-center py-3"
              >
                <span
                  className={`mr-4 rounded  transition-all group-hover:w-16  group-hover:h-px group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:h-px group-focus-visible:bg-slate-200 ${
                    activeSection === "projects"
                      ? "w-16 bg-slate-200 h-[1px]"
                      : "h-[5px] w-[5px] bg-slate-600"
                  }`}
                ></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "projects" ? "text-white": "text-gray-500"}`}>
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
          <Link href="https://github.com/sampath-04" target="_blank" className="block hover:text-slate-600">
            <GitIcon />
          </Link>
        </li>
        <li className="mr-5 text-xs shrink-0">
          {" "}
          <Link href="https://www.linkedin.com/in/sampath-kumar-v/" target="_blank" className="block hover:text-slate-600">
            <Linkedicon />
          </Link>
        </li>
        <li className="mr-5 text-xs shrink-0">
          {" "}
          <Link href="https://www.instagram.com/sampath_kumar__04/" target="_blank" className="block hover:text-slate-600">
            <InstaIcon />
          </Link>
        </li>
        <li className="mr-5 text-xs shrink-0">
          {" "}
          <a href="mailto:sampathkaali002@gmail.com" target="_blank" className="block hover:text-slate-600">
            <EmailIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeroMenu;
