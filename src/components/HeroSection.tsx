import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hi, I'm <span className="text-gradient">Jamil Malik</span>
          </h1>

          {/* Role */}
          <p
            className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            MERN & MEAN Stack Developer
          </p>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            I build scalable, high-performance web applications using
            <span className="text-primary font-medium"> Angular</span>,
            <span className="text-primary font-medium"> React</span>,
            <span className="text-primary font-medium"> Node.js</span>, and
            <span className="text-primary font-medium"> MongoDB</span>.
            Experienced in RESTful APIs, state management with
            <span className="text-primary font-medium"> NgRx & RxJS</span>,
            authentication systems, reusable component architecture, and
            responsive UI development.
          </p>

          {/* Skills */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              "Angular",
              "React",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "NgRx",
              "RxJS",
              "Bootstrap",
              "Tailwind CSS",
              "REST APIs",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm md:text-base hover:bg-primary hover:text-white transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Hire Me
            </Button>

            <Button variant="hero-outline" size="xl" onClick={scrollToProjects}>
              View Projects
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com/jamilmalik1000"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jamil-malik-6643b1282/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
          >
            <Twitter size={20} />
          </a> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
