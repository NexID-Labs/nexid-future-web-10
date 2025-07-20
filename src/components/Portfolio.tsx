
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      "title": "Interactive Education Platform",
      "description": "A dynamic web platform designed for interactive online courses, featuring live Q&A, progress tracking, and personalized learning paths.",
      "image": "https://images.unsplash.com/photo-1549298493-272e25d2b3b7?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Web Dev",
      "technologies": ["React", "Node.js", "Express.js", "PostgreSQL", "Socket.io"],
      "status": "Live"
    },
    {
      "title": "Personal Finance Dashboard Web App",
      "description": "A secure web application for tracking personal finances, budgeting, and visualizing spending habits with interactive charts.",
      "image": "https://images.unsplash.com/photo-1506784849646-7c8a6c8e3b3b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Web Dev",
      "technologies": ["Vue.js", "Django", "D3.js", "MongoDB", "OAuth2"],
      "status": "Completed"
    },
    {
      "title": "Local Artisan Marketplace",
      "description": "An e-commerce platform connecting local artisans with buyers, offering customizable storefronts and secure payment processing.",
      "image": "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Web Dev",
      "technologies": ["Angular", "Spring Boot", "MySQL", "Stripe API", "AWS S3"],
      "status": "In Development"
    },
    {
      "title": "Smart Home Hub Mobile App",
      "description": "A mobile application for controlling and monitoring smart home devices, including lighting, thermostats, and security cameras.",
      "image": "https://images.unsplash.com/photo-1590487985473-b6c8d76d6c6e?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "App Dev",
      "technologies": ["React Native", "Firebase", "Bluetooth LE", "IoT Core"],
      "status": "Live"
    },
    {
      "title": "Personalized Fitness Coaching App",
      "description": "A mobile app offering AI-driven personalized workout plans, nutrition tracking, and progress visualization.",
      "image": "https://images.unsplash.com/photo-1550547640-1ed40f5d0f1b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "App Dev",
      "technologies": ["Flutter", "TensorFlow Lite", "REST API", "PostgreSQL"],
      "status": "Completed"
    },
    {
      "title": "Community Skill-Share Mobile App",
      "description": "A platform connecting users for peer-to-peer skill sharing, workshops, and collaborative learning experiences.",
      "image": "https://images.unsplash.com/photo-1517487881594-2787fef5ee43?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "App Dev",
      "technologies": ["Swift", "Kotlin", "AWS Amplify", "GraphQL"],
      "status": "In Development"
    },
    {
      "title": "PropertyPro Management Suite",
      "description": "A comprehensive SaaS platform for property managers to handle leases, tenants, maintenance requests, and financial reporting.",
      "image": "https://images.unsplash.com/photo-1570710891163-6d3b5c47496b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "SaaS",
      "technologies": ["Ruby on Rails", "React", "AWS Lambda", "Stripe", "PostgreSQL"],
      "status": "Live"
    },
    {
      "title": "SocialPulse Content Scheduler",
      "description": "An AI-enhanced SaaS for scheduling social media posts, analyzing engagement, and identifying optimal posting times.",
      "image": "https://images.unsplash.com/photo-1557426172-0cf952078ce5?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "SaaS",
      "technologies": ["Node.js", "Vue.js", "GPT-3", "MongoDB Atlas", "AWS SQS"],
      "status": "In Development"
    },
    {
      "title": "FreelanceFlow Financial Hub",
      "description": "A cloud-based SaaS for freelancers to manage invoices, track expenses, and automate tax calculations.",
      "image": "https://images.unsplash.com/photo-1591696205602-2f950c417947?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "SaaS",
      "technologies": ["Python", "Flask", "React", "PostgreSQL", "QuickBooks API"],
      "status": "Completed"
    },
    {
      "title": "LeadGenius AI Sales Chatbot",
      "description": "An intelligent chatbot designed to qualify sales leads on websites, gather prospect information, and schedule demos automatically.",
      "image": "https://images.unsplash.com/photo-1550392815-f5c7e0c4f8e5?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Chatbot",
      "technologies": ["Python", "Dialogflow", "GPT-4", "Node.js", "CRM Integration"],
      "status": "Live"
    },
    {
      "title": "E-commerce Product Advisor Bot",
      "description": "A chatbot for online stores providing personalized product recommendations and customer support based on user preferences and browsing history.",
      "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Chatbot",
      "technologies": ["Python", "Natural Language Processing (NLP)", "Reinforcement Learning", "React"],
      "status": "In Development"
    },
    {
      "title": "FinBot Personal Finance Assistant",
      "description": "An AI chatbot that helps users track expenses, create budgets, analyze spending patterns, and get financial insights.",
      "image": "https://images.unsplash.com/photo-1563986768605-da4d148e718d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Chatbot",
      "technologies": ["Python", "NLTK", "TensorFlow", "PostgreSQL", "Mobile Integration"],
      "status": "Completed"
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
