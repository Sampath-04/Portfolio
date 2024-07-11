import Image from "next/image";

export const CardTitleDesc = ({ cardContent }:any) => {
    return (
      <li className="mb-12 cursor-pointer">
        <div className="grid lg:grid-cols-[auto,1fr] lg:gap-8 relative group transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
          {cardContent?.duration && (
            <header className="relative z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {cardContent.duration}
            </header>
          )}
          {cardContent?.imagePath && (
            <Image
              src={cardContent.imagePath}
              alt={cardContent.title}
              width={120}
              height={80}
              className="rounded border-2 z-10 border-slate-200/10 transition group-hover:border-slate-200/30"
            />
          )}
          <div className="z-10 relative">
            <h3 className="font-medium leading-snug text-slate-200">
              {cardContent.title}
            </h3>
            <p className="mt-2 text-sm leading-normal text-gray-500 group-hover:text-white">
              {cardContent.desc}
            </p>
            <ul className="mt-2 flex flex-wrap">
              {cardContent.techs.map((tech:any, index:number) => {
                return (
                  <li className="mr-1.5 mt-2" key={index}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-white ">
                      {tech}{" "}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </li>
    );
  };