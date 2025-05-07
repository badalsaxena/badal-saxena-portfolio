import { ProjectCard } from "@/components/sub/project-card";

export default function TestPage() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-8">Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        <ProjectCard 
          src="/projects/project1.png"
          title="Test Project 1"
          link="https://github.com"
        />
        <ProjectCard 
          src="/projects/project2.jpg"
          title="Test Project 2"
          link="https://github.com"
        />
        <ProjectCard 
          src="/projects/project3.png"
          title="Test Project 3 (Mobile Responsive Test)"
          link="https://github.com"
        />
      </div>
    </div>
  );
} 