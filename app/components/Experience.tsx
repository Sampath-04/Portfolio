import Link from "next/link";
import DownLoadIcon from "../icons/DownloadIcon";
import { CardTitleDesc } from "./CardTitleDesc";

const ExperienceDetails = [
  {
    duration: "2023 JULY — Present",
    title: "Software Engineer - Lightcast",
    desc: "Build and maintain critical components for the lightcast site, I work closely with cross-functional teams, including developers, and product managers, to implement and advocate for best practices in web development. My role involves integrating APIs, crafting complex GraphQL queries, and ensuring a seamless, user-friendly experience.",
    techs: ["TypeScript", "Next.js", "DatoCMS", "GraphQL"],
  },
  {
    duration: "2021 DEC — 2022 APR",
    title: "React Developer - QuickStay",
    desc: "QuickStay is a startup project where I developed a website featuring property search functionality using the Google Places API. The project also involved integrating Firebase for backend services and Razorpay for managing payment plans.",
    techs: ["JavaScript", "React.js", "Firebase"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 py-5 lg:hidden">Experience </h2>
      <ul className="group/list">
        {
          ExperienceDetails.map((experience,index)=>(
            <CardTitleDesc cardContent={experience} key={index}/>
          ))
        }    
      </ul>
      <div className="mt-12">
        <Link
          href="/resume.pdf"
          target="_blank"
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
