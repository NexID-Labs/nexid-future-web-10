import { Box, Brain, TrendingUp, Layers, Smartphone, Palette, Monitor, Gamepad2, Building, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Services = () => {
  const services = [
    {
      icon: Box,
      title: "3D Interactive Website Development",
      description: "Immersive web experiences using WebGL, Three.js, and advanced 3D technologies that captivate users and set your brand apart.",
      features: ["WebGL Integration", "Three.js Expertise", "Interactive 3D Models", "VR/AR Ready"],
      color: "primary"
    },
    {
      icon: Brain,
      title: "Complete AI Software Development",
      description: "End-to-end AI software solutions including intelligent chatbots, process automation, and custom AI applications tailored to your business needs.",
      features: ["Custom AI Software", "Intelligent Chatbots", "Process Automation", "AI Integration"],
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Asset & Trading Management Platforms",
      description: "Sophisticated frontend solutions for asset management and trading platforms with real-time data visualization and analytics.",
      features: ["Real-time Analytics", "Portfolio Dashboards", "Risk Management UI", "Compliance Tools"],
      color: "accent"
    },
    {
      icon: Layers,
      title: "SaaS Products",
      description: "End-to-end SaaS development from concept to deployment, including scalable architecture and user-friendly interfaces.",
      features: ["Scalable Architecture", "Multi-tenant Design", "API Integration", "Analytics Dashboard"],
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Custom AI Web Integration",
      description: "Seamless integration of AI capabilities into existing web applications, including chatbots, automation, and smart features.",
      features: ["ChatGPT Integration", "Custom AI Models", "Process Automation", "Smart Analytics"],
      color: "secondary"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, functional designs that prioritize user experience while maintaining cutting-edge aesthetics and usability.",
      features: ["User Research", "Prototyping", "Design Systems", "Accessibility Focus"],
      color: "accent"
    },
    {
      icon: Monitor,
      title: "Mobile Application Development",
      description: "Cross-platform mobile apps for iOS and Android with native performance, modern UI, and seamless user experiences.",
      features: ["React Native", "Flutter", "Native Performance", "Cross-Platform"],
      color: "primary"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Interactive gaming experiences using Unity, Unreal Engine, and web-based game technologies for multiple platforms.",
      features: ["Unity Development", "WebGL Games", "Mobile Gaming", "3D Graphics"],
      color: "secondary"
    },
    {
      icon: Building,
      title: "3D Architectural Design",
      description: "Stunning 3D architectural visualizations and interactive walkthroughs for real estate, construction, and design projects.",
      features: ["3D Modeling", "Virtual Tours", "Architectural Visualization", "CAD Integration"],
      color: "accent"
    },
    {
      icon: Shield,
      title: "Security & CMS/ERP Systems",
      description: "Robust security solutions and comprehensive content management and enterprise resource planning systems for businesses.",
      features: ["Cybersecurity", "CMS Development", "ERP Solutions", "Data Protection"],
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 border-primary/30 hover:border-primary/50';
      case 'secondary':
        return 'bg-secondary/10 border-secondary/30 hover:border-secondary/50';
      case 'accent':
        return 'bg-accent/10 border-accent/30 hover:border-accent/50';
      default:
        return 'bg-primary/10 border-primary/30 hover:border-primary/50';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions that leverage the latest technologies 
            to create exceptional user experiences and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`glass interactive-card border transition-smooth animate-on-scroll ${getColorClasses(service.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${service.color === 'primary' ? 'bg-gradient-primary' : service.color === 'secondary' ? 'bg-secondary/20' : 'bg-accent/20'} shadow-neon`}>
                  <service.icon className={`w-8 h-8 ${service.color === 'primary' ? 'text-primary-foreground' : getIconColor(service.color)}`} />
                </div>
                <CardTitle className="text-xl font-bold font-space text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge 
                      key={feature} 
                      variant="secondary" 
                      className={`${service.color === 'primary' ? 'bg-primary/20 text-primary border-primary/30' : service.color === 'secondary' ? 'bg-secondary/20 text-secondary border-secondary/30' : 'bg-accent/20 text-accent border-accent/30'} border`}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="glass p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-space mb-4 text-gradient">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our expertise can help bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-neon"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;