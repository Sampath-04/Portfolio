const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 py-5 lg:hidden">About </h2>
      <p className="mb-4 text-gray-500">
        I began my journey in web development as a beginner in 2020. My passion
        and dedication led me to work on a startup project,  <a
          href="https://www.quickstayrooms.com/"
          target="_blank"
          className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
        >
          Quickstay
        </a>, where I
        developed a website with property search functionality utilizing the
        Google Places API. This project significantly boosted my recognition as
        a web developer.
      </p>
      <p className="mb-4 text-gray-500">
        Currently, I am a part of the team at{" "}
        <a
          href="https://lightcast.io/"
          target="_blank"
          className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
        >
          LightCast
        </a>
        , where I contribute to the development of their main site. I am
        committed to staying abreast of the latest technologies and continuously
        expanding my skill set.
      </p>
      <p className="mb-4 text-gray-500">
        Outside of my professional life, I enjoy listening to music, maintaining
        a healthy lifestyle, and spending time with loved ones.
      </p>
    </section>
  );
};

export default About;
