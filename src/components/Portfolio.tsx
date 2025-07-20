import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "AI LandingSite.ai Platform",
      description: "Revolutionary AI-powered landing page generator with automated content optimization and real-time performance analytics.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "AI Platform",
      technologies: ["React", "Next.js", "GPT-4", "TensorFlow", "WebGL"],
      status: "Live"
    },
    {
      title: "3D Interactive Trading Dashboard",
      description: "Immersive 3D trading interface with real-time market visualization and advanced portfolio management tools.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Fintech",
      technologies: ["Three.js", "WebGL", "React", "D3.js", "Socket.io"],
      status: "In Development"
    },
    {
      title: "Smart Asset Management Suite",
      description: "Comprehensive SaaS platform for digital asset management with AI-driven insights and automated reporting.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "SaaS",
      technologies: ["Vue.js", "Python", "Machine Learning", "PostgreSQL"],
      status: "Completed"
    },
    {
      title: "Interactive Product Showcase",
      description: "3D product visualization platform with AR capabilities and interactive configuration tools for e-commerce.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "E-commerce",
      technologies: ["Three.js", "AR.js", "React", "WebXR", "Blender API"],
      status: "Live"
    },
    {
      title: "Fintech Analytics Dashboard",
      description: "Real-time financial data visualization with predictive analytics and risk assessment tools.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Analytics",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      status: "Completed"
    },
    {
      title: "AI-Powered Content Platform",
      description: "Intelligent content management system with automated SEO optimization and personalized user experiences.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "CMS",
      technologies: ["React", "Node.js", "OpenAI", "MongoDB", "Elasticsearch"],
      status: "Live"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects showcasing cutting-edge technology, innovative design, 
            and exceptional user experiences across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass interactive-card border-primary/20 overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-surface/90 text-foreground border-primary/30">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-space mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="bg-primary/10 text-primary border-primary/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge 
                      variant="outline" 
                      className="bg-muted/20 text-muted-foreground border-muted/30 text-xs"
                    >
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="btn-ghost flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/30 text-primary">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Showcase Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-gradient mb-2">95%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-gradient mb-2">15+</div>
            <div className="text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <div className="glass p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-space mb-4 text-gradient">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing together. We're always excited to work on innovative projects 
              that push the boundaries of what's possible.
            </p>
            <Button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-neon group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;