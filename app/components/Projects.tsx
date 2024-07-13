import { CardTitleDesc } from "./CardTitleDesc";

const projectDetails = [
    {
        imagePath:"/Images/e-tech.png",
        title:"E-Tech",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio officiis eveniet delectus adipisci? Dolores ex tempora accusamus inventore ullam mollitia itaque sit qui voluptas corporis voluptatum voluptatibus maxime consequatur, voluptates quasi, consectetur cupiditate officia repudiandae distinctio dignissimos rerum necessitatibus?",
        techs:["React.js","Tailwind","Netlify"],
        link:"#"
    },
    {
        imagePath:"/Images/natours.png",
        title:"Natours",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio officiis eveniet delectus adipisci? Dolores ex tempora accusamus inventore ullam mollitia itaque sit qui voluptas corporis voluptatum voluptatibus maxime consequatur, voluptates quasi, consectetur cupiditate officia repudiandae distinctio dignissimos rerum necessitatibus?",
        techs:["MongoDB","Node.js","Express","Pug","JavaScript"],
        link:"#"
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