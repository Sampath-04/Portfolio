import { CardTitleDesc } from "./CardTitleDesc";

const projectDetails = [
    {
        imagePath:"/Images/e-tech.png",
        title:"E-Tech",
        desc:"E-tech is built with Next.js and Tailwind CSS, featuring Radix UI for the tabs component and Embla Carousel for the testimonial section. Through this project, I honed my skills in utilizing Tailwind CSS for styling and responsiveness, implementing Embla Carousel, integrating Radix UI, and managing active status using Tailwind CSS classes.",
        techs:["Next.js","Tailwind","Netlify","Radix UI"],
        link:"https://e-tech-sam.vercel.app/"
    },
    {
        imagePath:"/Images/easy-bank.png",
        title:"Easy Bank",
        desc:"Easy Bank, completed as a Frontend Mentor challenge, showcases my skills in HTML, SCSS, and keyframe animations. Through this project, I deepened my understanding of animations, pseudo-elements, and the use of flex and grid layouts. The EasyBank website is a fully responsive",
        techs:["HTML","SCSS","Javascript"],
        link:"https://sampath-ops.github.io/EasyBank/"
    },
    {
        imagePath:"/Images/natours.png",
        title:"Natours",
        desc:"Natours is a comprehensive web application designed to facilitate tour booking and management. Key features include authentication and authorization, user profile management, and tour booking with a detailed map view and reviews. Users can sign up, log in, and update their profiles. Tours can be created and managed by admin users or lead guides, while regular users can book tours, write reviews, and manage their bookings. The project integrates technologies like NodeJS, Express, Mongoose, Pug, JSON Web Token, Stripe, Mailtrap, Heroku, and Mapbox.",
        techs:["MongoDB","Node.js","Express.js","Pug","JavaScript"],
        link:"https://natours-sampath.vercel.app/"
    }
]

const Projects = () => {
    return (
        <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 py-5 lg:hidden">Projects </h2>
        <ul className="group/list">
        {
            projectDetails.map((project,index)=>{
                return(
                    <CardTitleDesc key={index} cardContent={project}/>
                )
            })
        }
        </ul>
        </section>
      );
}
 
export default Projects;