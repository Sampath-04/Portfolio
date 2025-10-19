import Link from "next/link";
import DownLoadIcon from "../icons/DownloadIcon";
import { CardTitleDesc } from "./CardTitleDesc";

const ExperienceDetails = [
  {
    duration: "2024 OCT — Present",
    title: "Full Stack Developer - WanderOn",
    desc: "Designing and developing full-stack applications using Next.js, Redux Toolkit, Node.js, and MongoDB. Built scalable backend REST APIs supporting 1000+ API calls/day and optimized UI performance, reducing page load times by ~45% through performance optimization and efficient caching. Collaborating with cross-functional teams to ensure seamless integration.",
    techs: ["Next.js", "Redux Toolkit", "Node.js", "MongoDB"],
    link:"https://www.wanderon.in/"
  },
  {
    duration: "2023 MAY — 2024 OCT",
    title: "Software Engineer - LightCast",
    desc: "Built and maintained critical components for the LightCast site, working closely with cross-functional teams including developers and product managers to implement and advocate for best practices in web development. Integrated APIs, crafted complex GraphQL queries, and ensured a seamless, user-friendly experience.",
    techs: ["TypeScript", "Next.js", "DatoCMS", "GraphQL"],
    link:"https://lightcast.io/"
  },
  {
    duration: "2021 DEC — 2022 APR",
    title: "Full Stack Developer - QuickStay",
    desc: "Developed a robust full-stack application for property search across pan India using the Google Places API. Built the website during the 2nd year of Bachelor's degree, integrating Firebase for backend services and Razorpay for managing payment plans.",
    techs: ["JavaScript", "React.js", "Firebase", "Google Places API"],
    link:"https://quickstayrooms.com/"
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
          href="/Sampath_CV.pdf"
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
