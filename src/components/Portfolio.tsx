
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
    },
    {
      "title": "Automated Invoice Processing System",
      "description": "AI-powered system to extract, categorize, and reconcile invoice data from emails and documents, integrating with accounting software.",
      "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4b0e?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Automations",
      "technologies": ["Python", "OCR", "Machine Learning", "Cloud Functions", "API Integration"],
      "status": "Live"
    },
    {
      "title": "Predictive Maintenance for Manufacturing",
      "description": "An AI solution that analyzes sensor data from industrial machinery to predict potential failures and schedule proactive maintenance.",
      "image": "https://images.unsplash.com/photo-1594917411606-5b721e7861b9?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Automations",
      "technologies": ["Python", "IoT", "Time Series Analysis", "Anomaly Detection", "Cloud Platforms"],
      "status": "In Development"
    },
    {
      "title": "Smart Marketing Campaign Optimizer",
      "description": "AI-driven platform that automates campaign adjustments, identifies market trends, and optimizes ad spend for maximum ROI.",
      "image": "https://images.unsplash.com/photo-1621607512214-de626d03a119?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Automations",
      "technologies": ["Python", "Reinforcement Learning", "Big Data Analytics", "Marketing APIs"],
      "status": "Completed"
    },
    {
      "title": "Generative Design for Product Development",
      "description": "An AI service that generates optimized product designs based on specified constraints, materials, and performance goals.",
      "image": "https://images.unsplash.com/photo-1558908852-aa384f676231?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Services",
      "technologies": ["Python", "Generative Adversarial Networks (GANs)", "3D Modeling Libraries", "Cloud GPUs"],
      "status": "Live"
    },
    {
      "title": "SupplyChain.AI Logistics Optimizer",
      "description": "An AI-powered service optimizing supply chain operations, including demand forecasting, inventory management, and route planning.",
      "image": "https://images.unsplash.com/photo-1603579048385-2e6c5a7d6e6d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Services",
      "technologies": ["Python", "Machine Learning", "Optimization Algorithms", "Cloud Computing"],
      "status": "In Development"
    },
    {
      "title": "NLP-as-a-Service Platform",
      "description": "A cloud-based AI service offering advanced Natural Language Processing capabilities for text analysis, sentiment analysis, and entity recognition.",
      "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "AI Services",
      "technologies": ["Python", "NLP Libraries (SpaCy, Hugging Face)", "REST API", "Docker", "Kubernetes"],
      "status": "Live"
    },
    {
      "title": "BIM Model Integration & Clash Detection",
      "description": "A software platform that integrates BIM models for large-scale construction projects, performing automated clash detection and visualization.",
      "image": "https://images.unsplash.com/photo-1600861118335-a6e5a0f5e3b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "3D Structural Designing",
      "technologies": ["C#", "Revit API", "Three.js", "WebGL", "Cloud Databases"],
      "status": "Live"
    },
    {
      "title": "AI-Powered Generative Architecture",
      "description": "A tool leveraging AI to generate diverse architectural and structural designs based on user-defined parameters and environmental data.",
      "image": "https://images.unsplash.com/photo-1517487881594-2787fef5ee43?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "3D Structural Designing",
      "technologies": ["Python", "Rhino/Grasshopper", "Generative AI", "Parametric Design"],
      "status": "In Development"
    },
    {
      "title": "RapidBuild 3D Printing Service",
      "description": "A service specializing in 3D printing large-scale construction components for accelerated and cost-effective building.",
      "image": "https://images.unsplash.com/photo-1594917411606-5b721e7861b9?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "3D Structural Designing",
      "technologies": ["Robotics", "Additive Manufacturing", "Custom G-Code", "Material Science"],
      "status": "Completed"
    },
    {
      "title": "Decentralized Finance (DeFi) Protocol",
      "description": "A blockchain-based platform for decentralized lending, borrowing, and yield farming with smart contract automation.",
      "image": "https://images.unsplash.com/photo-1620241857643-982e2c0e3a47?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Crypto Trading Platform",
      "technologies": ["Solidity", "Ethereum", "Web3.js", "Chainlink", "Truffle"],
      "status": "Live"
    },
    {
      "title": "CryptoEdu Gamified Trading Simulator",
      "description": "An interactive and gamified platform for learning cryptocurrency trading, offering simulated portfolios and market challenges.",
      "image": "https://images.unsplash.com/photo-1640340434855-6f2b45e998bb?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Crypto Trading Platform",
      "technologies": ["React", "Node.js", "WebSocket", "Real-time APIs", "Gamification Engine"],
      "status": "In Development"
    },
    {
      "title": "Zenith Crypto Portfolio & Analytics",
      "description": "A real-time cryptocurrency portfolio management tool with advanced analytics, tax reporting, and market insights.",
      "image": "https://images.unsplash.com/photo-1620241857643-982e2c0e3a47?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Crypto Trading Platform",
      "technologies": ["Next.js", "Python", "Data Visualization", "CoinGecko API", "PostgreSQL"],
      "status": "Completed"
    },
    {
      "title": "AlgoTrade AI Bot Suite",
      "description": "A suite of intelligent algorithmic trading bots for equities and crypto, featuring ML-driven signal generation and risk management.",
      "image": "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Tier 1,2,3 trading bots",
      "technologies": ["Python", "TensorFlow", "Pandas", "NumPy", "QuantConnect"],
      "status": "Live"
    },
    {
      "title": "ArbiBot Low-Latency Arbitrage Engine",
      "description": "A high-frequency trading bot designed for low-latency arbitrage opportunities across multiple cryptocurrency exchanges.",
      "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Tier 1,2,3 trading bots",
      "technologies": ["C++", "Rust", "FPGA", "FIX API", "Co-location"],
      "status": "In Development"
    },
    {
      "title": "StratFlow Backtesting & Optimizer",
      "description": "A platform for developing, backtesting, and optimizing trading strategies across various asset classes using historical data.",
      "image": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "Tier 1,2,3 trading bots",
      "technologies": ["Python", "Zipline", "Jupyter Notebooks", "Cloud Computing"],
      "status": "Completed"
    },
    {
      "title": "HealthConnect Patient Portal Redesign",
      "description": "UI/UX redesign of a healthcare patient portal, focusing on intuitive navigation, accessibility, and streamlined appointment booking.",
      "image": "https://images.unsplash.com/photo-1520697968537-8e6d2b3c2e17?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "UI/UX designing",
      "technologies": ["Figma", "Sketch", "User Research", "Usability Testing", "Accessibility Guidelines"],
      "status": "Completed"
    },
    {
      "title": "ShopSmart E-commerce App UX/UI Revamp",
      "description": "Comprehensive UX/UI revamp for a mobile e-commerce application, aiming to improve user flow, product discovery, and conversion rates.",
      "image": "https://images.unsplash.com/photo-1557804506-669a67965da9?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "UI/UX designing",
      "technologies": ["Adobe XD", "InVision", "A/B Testing", "Heatmaps", "User Journey Mapping"],
      "status": "In Development"
    },
    {
      "title": "Nexus B2B SaaS Design System",
      "description": "Creation of a scalable and consistent UI/UX design system for a complex B2B SaaS platform, including component libraries and style guides.",
      "image": "https://images.unsplash.com/photo-1581456495147-380d0d82d499?w=600&h=400&fit=crop&crop=entropy&auto=format",
      "category": "UI/UX designing",
      "technologies": ["Figma", "Storybook", "Design Tokens", "React Components", "Atomic Design"],
      "status": "Live"
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
