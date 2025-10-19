const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 py-5 lg:hidden">About </h2>
      <p className="mb-4 text-gray-500">
        I'm a Full-Stack Developer with <span className="font-medium text-slate-200">2.5+ years</span> of experience building scalable web applications. 
        I started my journey in <span className="font-medium text-slate-200">2020</span> during the 2nd year of my Bachelor's degree with{" "}
        <a
          href="https://www.quickstayrooms.com/"
          target="_blank"
          className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
        >
          Quickstay
        </a>
        , where I developed a robust full-stack application for property search across pan India 
        using the Google Places API. I then worked for <span className="font-medium text-slate-200">1.5 years</span> at{" "}
        <a
          href="https://lightcast.io/"
          target="_blank"
          className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
        >
          LightCast
        </a>
        , contributing to their main site development.
      </p>
      <p className="mb-4 text-gray-500">
        Currently, I'm working at{" "}
        <a
          href="https://www.wanderon.in/"
          target="_blank"
          className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
        >
          WanderOn
        </a>
        {" "}for <span className="font-medium text-slate-200">1+ years</span>, designing full-stack applications with Next.js, Redux Toolkit, Node.js, and MongoDB. 
        I've built REST APIs handling 1000+ calls/day and reduced page load times by ~45% through performance optimization and efficient caching.
      </p>
      <p className="mb-4 text-gray-500">
        I also have exposure to Spring Boot, microservice architecture, and Spring AI, continuously 
        expanding my knowledge in modern backend technologies and AI-powered solutions.
      </p>
      <p className="mb-4 text-gray-500">
        Outside of work, I enjoy listening to music, maintaining a healthy lifestyle, and spending time 
        with loved ones.
      </p>
    </section>
  );
};

export default About;
