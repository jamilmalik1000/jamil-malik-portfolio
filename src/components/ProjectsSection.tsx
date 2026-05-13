import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Where Works",
    description: "A frontend web application focused on responsive UI, reusable components, API integration, and scalable structure.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Angular",
    tech: ["Angular", "TypeScript", "RxJS", "Bootstrap"],
    liveUrl: "https://whereworks.vercel.app/login",
    githubUrl: "https://github.com/jamilmalik1000/WhereWorks.git",
  },
  {
    title: "Halqa",
    description: "An Angular-based application improved with OnPush change detection, HTTP interceptors, and better RxJS subscription handling.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    category: "Angular",
    tech: ["Angular", "OnPush", "RxJS", "HTTP Interceptors"],
    liveUrl: "",
    githubUrl: "#",
  },
  {
    title: "Teachify",
    description: "A backend-driven learning platform with REST APIs, authentication, modular routing, and MongoDB data management.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    category: "Backend",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built to present projects, skills, and experience with a modern responsive interface.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    category: "React",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A few selected projects based on my frontend and backend experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card/50 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button variant="hero" size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
