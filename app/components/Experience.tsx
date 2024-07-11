import Link from "next/link";
import DownLoadIcon from "../icons/DownloadIcon";
import { CardTitleDesc } from "./CardTitleDesc";

const ExperienceDetails = [
  {
    duration: "2023 JULY — Present",
    title: "Software Engineer - Lightcast",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam, perspiciatis iure consectetur tempora qui cumque placeat maxime, accusamus provident atque, deserunt libero inventore architecto",
    techs: ["JavaScript", "TypeScript", "Next", "DatoCMS"],
  },
  {
    duration: "2021 DEC — 2022 APR",
    title: "React Developer - QuickStay",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam, perspiciatis iure consectetur tempora qui cumque placeat maxime, accusamus provident atque, deserunt libero inventore architecto",
    techs: ["JavaScript", "React", "Firebase"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ul className="group/list">
        {
          ExperienceDetails.map((experience,index)=>(
            <CardTitleDesc cardContent={experience} key={index}/>
          ))
        }    
      </ul>
      <div className="mt-12">
        <Link
          href="#"
          className="inline-flex items-baseline leading-tight hover:text-[#B0BBC2] focus-visible:text-[#B0BBC2] focus-visible:outline-gray-300 focus-visible:outline font-semibold text-slate-200 group/link text-base"
        >
          <span className="flex">
            Download Resume{" "}
            <DownLoadIcon className="ml-1 transition group-hover/link:translate-x-1 group-focus/link:translate-x-1 leading-tight" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
