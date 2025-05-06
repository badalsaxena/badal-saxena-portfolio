'use client';

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

// Create a combined and de-duplicated skill set
const COMBINED_SKILLS = [
  // Frontend Skills
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
    category: "Frontend"
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
    category: "Frontend"
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 70,
    height: 70,
    category: "Frontend"
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 70,
    height: 70,
    category: "Frontend"
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
    category: "Frontend"
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
    category: "Frontend"
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
    category: "Frontend"
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
    category: "Frontend"
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
    category: "Frontend"
  },
  // Backend Skills
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
    category: "Backend"
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
    category: "Backend"
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 70,
    height: 70,
    category: "Backend"
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
    category: "Other"
  }
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-row flex-wrap justify-center items-center gap-x-10 gap-y-16 mt-8 px-4 sm:px-8 md:px-16 max-w-7xl">
        {COMBINED_SKILLS.map((skill, i) => (
          <SkillDataProvider
            key={`${skill.skill_name}-${i}`}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
