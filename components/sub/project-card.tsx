import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  link,
}: ProjectCardProps) => {
  return (
    <div className="w-full relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition flex flex-col">
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-t-lg object-center"
          style={{ objectPosition: src.includes("project3") ? "center" : "left top" }}
        />
      </div>

      <div className="relative p-4 flex flex-col flex-grow">
        <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
        
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-auto bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all hover:scale-105 flex items-center justify-center"
        >
          View Project <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};
