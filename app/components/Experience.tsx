const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ul>
        <li className="mb-12">
          <div className="grid lg:grid-cols-[auto,1fr] lg:gap-8 relative group transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <header className="relative z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              2023 july — Present
            </header>
            <div className="z-10 relative">
              <h3 className="font-medium leading-snug text-slate-200">
                Software Engineer - Lightcast
              </h3>
              <p className="mt-2 text-sm leading-normal text-gray-500 group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quibusdam, perspiciatis iure consectetur tempora qui cumque
                placeat maxime, accusamus provident atque, deserunt libero
                inventore architecto
              </p>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                    JavaScript{" "}
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                    TypeScript{" "}
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                    Next{" "}
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                    DatoCMS{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
