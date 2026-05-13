import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2023 - Present",
    title: "Senior Web Developer",
    company: "Freelance",
    description: "Building custom e-commerce solutions and web applications for clients worldwide.",
    icon: Briefcase,
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Tech Startup",
    description: "Led development of multiple SaaS products using React, Node.js, and cloud technologies.",
    icon: Briefcase,
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Developed responsive websites and Shopify stores for various clients.",
    icon: Briefcase,
  },
  {
    year: "2015 - 2019",
    title: "Bachelor's in Computer Science",
    company: "University",
    description: "Graduated with honors, focusing on web technologies and software engineering.",
    icon: GraduationCap,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate developer with 5+ years of experience creating digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-primary p-1 mx-auto lg:mx-0">
                  <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 lg:right-auto lg:left-40 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>

              <div className="space-y-4 text-center lg:text-left">
                <h3 className="font-display text-2xl font-semibold">John Doe</h3>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    San Francisco, CA
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    5+ Years Experience
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate software engineer specializing in building exceptional digital experiences. 
                  My focus is on creating fast, accessible, and visually appealing websites that help businesses grow.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="font-display text-xl font-semibold text-center lg:text-left mb-8">
                My Journey
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-16">
                      {/* Icon */}
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                        <item.icon size={20} className="text-primary" />
                      </div>

                      {/* Content */}
                      <div className="bg-card/50 rounded-xl p-5 border border-border hover:border-primary/30 transition-colors duration-300">
                        <span className="text-xs font-medium text-primary">{item.year}</span>
                        <h4 className="font-semibold mt-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
