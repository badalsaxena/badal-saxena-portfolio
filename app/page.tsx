import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { AchievementsFace } from "@/components/main/achievements-face";
import { GetInTouch } from "@/components/main/get-in-touch";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12">
        <Hero />
        <Skills />
        <Encryption />
        <AchievementsFace />
        <Projects />
        <GetInTouch />
      </div>
    </main>
  );
}
