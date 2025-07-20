import { Code, Database, Cpu, Globe, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const TechStack = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern frameworks and libraries for exceptional user experiences",
      technologies: [
        { name: "React", logo: "⚛️" },
        { name: "Vue.js", logo: "🔮" },
        { name: "Next.js", logo: "▲" },
        { name: "TypeScript", logo: "🔷" },
        { name: "Tailwind CSS", logo: "🎨" },
        { name: "Three.js", logo: "🟦" }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "Scalable server architectures and efficient data management",
      technologies: [
        { name: "Node.js", logo: "🟢" },
        { name: "Python", logo: "🐍" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "MongoDB", logo: "🍃" },
        { name: "Redis", logo: "🔴" },
        { name: "GraphQL", logo: "🔺" }
      ]
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI integration and intelligent automation",
      technologies: [
        { name: "OpenAI GPT", logo: "🤖" },
        { name: "TensorFlow", logo: "🧠" },
        { name: "PyTorch", logo: "🔥" },
        { name: "Langchain", logo: "⛓️" },
        { name: "Hugging Face", logo: "🤗" },
        { name: "Pinecone", logo: "🌲" }
      ]
    },
    {
      icon: Globe,
      title: "3D & WebGL",
      description: "Immersive 3D experiences and interactive visualizations",
      technologies: [
        { name: "Three.js", logo: "🟦" },
        { name: "WebGL", logo: "🎯" },
        { name: "Blender", logo: "🔶" },
        { name: "R3F", logo: "🎭" },
        { name: "A-Frame", logo: "🕶️" },
        { name: "WebXR", logo: "🥽" }
      ]
    },
    {
      icon: Zap,
      title: "Performance & Optimization",
      description: "Tools and techniques for maximum performance and efficiency",
      technologies: [
        { name: "Vite", logo: "⚡" },
        { name: "Webpack", logo: "📦" },
        { name: "Docker", logo: "🐳" },
        { name: "AWS", logo: "☁️" },
        { name: "Vercel", logo: "🔼" },
        { name: "Cloudflare", logo: "🛡️" }
      ]
    },
    {
      icon: Shield,
      title: "Security & Analytics",
      description: "Robust security measures and comprehensive analytics",
      technologies: [
        { name: "Auth0", logo: "🔐" },
        { name: "JWT", logo: "🎟️" },
        { name: "Stripe", logo: "💳" },
        { name: "Analytics", logo: "📊" },
        { name: "Sentry", logo: "🚨" },
        { name: "Mixpanel", logo: "📈" }
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and industry-leading tools to build scalable, 
            secure, and high-performance digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="glass interactive-card border-primary/20 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-neon">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-space text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 p-3 bg-surface/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-smooth cursor-pointer"
                    >
                      <div className="text-2xl">{tech.logo}</div>
                      <div className="text-xs text-muted-foreground text-center font-medium">
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Tools */}
        <div className="text-center animate-on-scroll">
          <h3 className="text-2xl font-bold font-space mb-8 text-foreground">
            Our Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { name: "React", logo: "⚛️", color: "text-blue-400" },
              { name: "Three.js", logo: "🟦", color: "text-green-400" },
              { name: "TypeScript", logo: "🔷", color: "text-blue-500" },
              { name: "OpenAI", logo: "🤖", color: "text-purple-400" },
              { name: "WebGL", logo: "🎯", color: "text-red-400" },
              { name: "Python", logo: "🐍", color: "text-yellow-400" },
              { name: "Node.js", logo: "🟢", color: "text-green-500" },
              { name: "AWS", logo: "☁️", color: "text-orange-400" }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 glass p-4 rounded-xl border border-primary/20 hover:shadow-neon transition-smooth animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl">{tech.logo}</div>
                <div className={`font-semibold ${tech.color}`}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-on-scroll">
          <div className="glass p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-space mb-4 text-gradient">
              Technology Meets Innovation
            </h3>
            <p className="text-muted-foreground mb-6">
              Our expertise in modern technologies allows us to create solutions that are not just 
              current but future-ready. Let's build something extraordinary together.
            </p>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-neon"
            >
              Discuss Your Tech Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;