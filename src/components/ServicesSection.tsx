import { Code, ShoppingCart, Globe, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, TypeScript, and Node.js. Fast, scalable, and maintainable code.",
    features: ["React & Next.js", "TypeScript", "REST & GraphQL APIs", "Database Design"],
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description: "Professional Shopify stores that convert. Custom themes, app integrations, and performance optimization.",
    features: ["Custom Themes", "App Integration", "Payment Setup", "Inventory Management"],
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Beautiful, fast WordPress websites with custom themes and plugins. Optimized for performance and SEO.",
    features: ["Custom Themes", "Plugin Development", "WooCommerce", "Speed Optimization"],
  },
  {
    icon: Search,
    title: "SEO & Maintenance",
    description: "Keep your website running smoothly with regular updates, security patches, and SEO optimization.",
    features: ["Technical SEO", "Performance Audits", "Security Updates", "Content Strategy"],
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
              Comprehensive web development solutions tailored to your business needs
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
