import { CardTitleDesc } from "./CardTitleDesc";

const projectDetails = [
    {
        imagePath:"/Images/spring_ai.webp",
        title:"Patient Analyser AI Assistant",
        desc:"AI-powered patient data analyzer using Spring AI with function calling. Query patient records, vital signs, lab results, and medications using natural language. Features include intelligent analysis of medical data with 7 AI tools for patient demographics, vital signs, lab results, and medication management. Built with Spring Boot, H2 database, and local AI models via Docker.",
        techs:["Spring Boot","Spring AI","Java 17","H2 Database","JPA/Hibernate","Docker"],
        link:"https://github.com/Sampath-04/Patient-Analyser-AI-Assistant"
    },
    {
        imagePath:"/Images/natours.png",
        title:"Natours",
        desc:"Natours is a comprehensive web application designed to facilitate tour booking and management. Key features include authentication and authorization, user profile management, and tour booking with a detailed map view and reviews. Users can sign up, log in, and update their profiles. Tours can be created and managed by admin users or lead guides, while regular users can book tours, write reviews, and manage their bookings. The project integrates technologies like NodeJS, Express, Mongoose, Pug, JSON Web Token, Stripe, Mailtrap, Heroku, and Mapbox.",
        techs:["MongoDB","Node.js","Express.js","Pug","JavaScript"],
        link:"https://natours-sampath.vercel.app/"
    },
    {
        imagePath:"/Images/EasyBank.png",
        title:"Easy Bank",
        desc:"Easy Bank, completed as a Frontend Mentor challenge, showcases my skills in HTML, SCSS, and keyframe animations. Through this project, I deepened my understanding of animations, pseudo-elements, and the use of flex and grid layouts. The EasyBank website is a fully responsive",
        techs:["HTML","SCSS","Javascript"],
        link:"https://sampath-04.github.io/EasyBank/"
    },
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