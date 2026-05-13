const skills = [
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "MySQL", icon: "🐬", category: "Database" },
  { name: "Git", icon: "📦", category: "Tools" },
  { name: "GitHub", icon: "🐙", category: "Tools" },
  { name: "WordPress", icon: "📝", category: "CMS" },
  { name: "Shopify", icon: "🛒", category: "E-commerce" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-card/50 rounded-xl p-4 lg:p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 text-center"
              >
                <div className="text-3xl lg:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-sm lg:text-base">{skill.name}</h3>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
            ))}
          </div>

          {/* Additional Skills Bar */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Also experienced with: PHP, Laravel, REST APIs, GraphQL, Docker, AWS, Firebase, Figma
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
