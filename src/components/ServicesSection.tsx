import { Code, Layout, Database, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Responsive and modern user interfaces built with Angular, React, TypeScript, HTML, CSS, and Bootstrap.",
    features: ["Angular", "React", "TypeScript", "Responsive UI"],
  },
  {
    icon: Code,
    title: "Angular Application Development",
    description:
      "Scalable Angular applications with reusable components, RxJS data handling, NgRx state management, and clean architecture.",
    features: ["RxJS", "NgRx", "Reusable Components", "Lazy Loading"],
  },
  {
    icon: Database,
    title: "Backend API Integration",
    description:
      "REST API integration and backend collaboration using Node.js, Express.js, MongoDB, and secure data flow practices.",
    features: ["REST APIs", "Node.js", "Express.js", "MongoDB"],
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Performance",
    description:
      "Authentication flows, route guards, interceptors, and performance improvements for stable and efficient web applications.",
    features: ["JWT/Auth", "Route Guards", "HTTP Interceptors", "OnPush Optimization"],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Development services based on my frontend and backend experience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card/50 rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="group/btn text-primary hover:text-primary p-0 h-auto"
                  onClick={scrollToContact}
                >
                  Order Now
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
