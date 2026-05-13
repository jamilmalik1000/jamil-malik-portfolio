import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "Dec 2025 - May 2026",
    title: "Front End Developer",
    company: "Syntecx Solution",
    description:
      "Worked with React, Angular, TypeScript, RxJS, NgRx, REST APIs, and responsive UI development.",
    icon: Briefcase,
  },
  {
    year: "Apr 2026 - May 2026",
    title: "Angular Developer",
    company: "Halqa",
    description:
      "Focused on OnPush, custom directives and pipes, HTTP interceptors, and RxJS optimization.",
    icon: Briefcase,
  },
  {
    year: "Jan 2025 - Nov 2025",
    title: "Backend Developer",
    company: "Teachify",
    description:
      "Built backend systems with Node.js, Express.js, MongoDB, JWT auth, and modular APIs.",
    icon: Briefcase,
  },
  {
    year: "Jun 2025 - Aug 2025",
    title: "Frontend Trainee",
    company: "AJK IT Board",
    description: "Worked with React, components, and core frontend development fundamentals.",
    icon: GraduationCap,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Web Developer with experience in Angular, React, TypeScript, JavaScript, and scalable web application development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-primary p-1 mx-auto lg:mx-0">
                  <img
                    src="/IMG-20231104-WA0047-01-removebg-preview (1).png"
                    alt="Jamil Malik"
                    className="w-full h-full rounded-2xl bg-secondary object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 lg:right-auto lg:left-40 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>

              <div className="space-y-4 text-center lg:text-left">
                <h3 className="font-display text-2xl font-semibold">Jamil Malik</h3>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    Muzaffarabad, AJK
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    2025 - 2026 Experience
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Web Developer experienced in building responsive and modular applications using Angular, TypeScript, JavaScript, HTML, CSS, Bootstrap, and React.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Worked with REST APIs, RxJS, NgRx, authentication systems, and performance optimization, with additional backend exposure in Node.js, Express.js, and MongoDB.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-xl font-semibold text-center lg:text-left mb-8">
                My Journey
              </h3>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                        <item.icon size={20} className="text-primary" />
                      </div>

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
