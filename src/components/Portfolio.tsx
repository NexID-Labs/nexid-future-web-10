
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Import images
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
import image10 from "../assets/images/10.jpg";
import image11 from "../assets/images/11.jpg";
import image12 from "../assets/images/12.jpg";
import image13 from "../assets/images/13.jpg";
import image14 from "../assets/images/14.jpg";
import image15 from "../assets/images/15.jpg";
import image16 from "../assets/images/16.jpg";
import image17 from "../assets/images/17.jpg";
import image18 from "../assets/images/18.jpg";
import image19 from "../assets/images/19.jpg";
import image20 from "../assets/images/20.jpg";
import image21 from "../assets/images/21.jpg";
import image22 from "../assets/images/22.jpg";
import image23 from "../assets/images/23.jpg";
import image24 from "../assets/images/24.jpg";
import image25 from "../assets/images/25.jpg";
import image26 from "../assets/images/26.jpg";
import image27 from "../assets/images/27.jpg";
import image28 from "../assets/images/28.jpg";
import image29 from "../assets/images/29.jpg";
import image30 from "../assets/images/30.jpg";

const Portfolio = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, 
                  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
                  image21, image22, image23, image24, image25, image26, image27, image28, image29, image30];

  const projects = [
    {
      "title": "Interactive Education Platform",
      "description": "A dynamic web platform designed for interactive online courses, featuring live Q&A, progress tracking, and personalized learning paths.",
      "image": image1,
      "category": "Web Dev",
      "technologies": ["React", "Node.js", "Express.js", "PostgreSQL", "Socket.io"],
      "status": "Live"
    },
    {
      "title": "Personal Finance Dashboard Web App",
      "description": "A secure web application for tracking personal finances, budgeting, and visualizing spending habits with interactive charts.",
      "image": image2,
      "category": "Web Dev",
      "technologies": ["Vue.js", "Django", "D3.js", "MongoDB", "OAuth2"],
      "status": "Completed"
    },
    {
      "title": "Local Artisan Marketplace",
      "description": "An e-commerce platform connecting local artisans with buyers, offering customizable storefronts and secure payment processing.",
      "image": image3,
      "category": "Web Dev",
      "technologies": ["Angular", "Spring Boot", "MySQL", "Stripe API", "AWS S3"],
      "status": "In Development"
    },
    {
      "title": "Smart Home Hub Mobile App",
      "description": "A mobile application for controlling and monitoring smart home devices, including lighting, thermostats, and security cameras.",
      "image": image4,
      "category": "App Dev",
      "technologies": ["React Native", "Firebase", "Bluetooth LE", "IoT Core"],
      "status": "Live"
    },
    {
      "title": "Personalized Fitness Coaching App",
      "description": "A mobile app offering AI-driven personalized workout plans, nutrition tracking, and progress visualization.",
      "image": image5,
      "category": "App Dev",
      "technologies": ["Flutter", "TensorFlow Lite", "REST API", "PostgreSQL"],
      "status": "Completed"
    },
    {
      "title": "Community Skill-Share Mobile App",
      "description": "A platform connecting users for peer-to-peer skill sharing, workshops, and collaborative learning experiences.",
      "image": image6,
      "category": "App Dev",
      "technologies": ["Swift", "Kotlin", "AWS Amplify", "GraphQL"],
      "status": "In Development"
    },
    {
      "title": "PropertyPro Management Suite",
      "description": "A comprehensive SaaS platform for property managers to handle leases, tenants, maintenance requests, and financial reporting.",
      "image": image7,
      "category": "SaaS",
      "technologies": ["Ruby on Rails", "React", "AWS Lambda", "Stripe", "PostgreSQL"],
      "status": "Live"
    },
    {
      "title": "SocialPulse Content Scheduler",
      "description": "An AI-enhanced SaaS for scheduling social media posts, analyzing engagement, and identifying optimal posting times.",
      "image": image8,
      "category": "SaaS",
      "technologies": ["Node.js", "Vue.js", "GPT-3", "MongoDB Atlas", "AWS SQS"],
      "status": "In Development"
    },
    {
      "title": "FreelanceFlow Financial Hub",
      "description": "A cloud-based SaaS for freelancers to manage invoices, track expenses, and automate tax calculations.",
      "image": image9,
      "category": "SaaS",
      "technologies": ["Python", "Flask", "React", "PostgreSQL", "QuickBooks API"],
      "status": "Completed"
    },
    {
      "title": "LeadGenius AI Sales Chatbot",
      "description": "An intelligent chatbot designed to qualify sales leads on websites, gather prospect information, and schedule demos automatically.",
      "image": image10,
      "category": "AI Chatbot",
      "technologies": ["Python", "Dialogflow", "GPT-4", "Node.js", "CRM Integration"],
      "status": "Live"
    },
    {
      "title": "E-commerce Product Advisor Bot",
      "description": "A chatbot for online stores providing personalized product recommendations and customer support based on user preferences and browsing history.",
      "image": image11,
      "category": "AI Chatbot",
      "technologies": ["Python", "Natural Language Processing (NLP)", "Reinforcement Learning", "React"],
      "status": "In Development"
    },
    {
      "title": "FinBot Personal Finance Assistant",
      "description": "An AI chatbot that helps users track expenses, create budgets, analyze spending patterns, and get financial insights.",
      "image": image12,
      "category": "AI Chatbot",
      "technologies": ["Python", "NLTK", "TensorFlow", "PostgreSQL", "Mobile Integration"],
      "status": "Completed"
    },
    {
      "title": "Automated Invoice Processing System",
      "description": "AI-powered system to extract, categorize, and reconcile invoice data from emails and documents, integrating with accounting software.",
      "image": image13,
      "category": "AI Automations",
      "technologies": ["Python", "OCR", "Machine Learning", "Cloud Functions", "API Integration"],
      "status": "Live"
    },
    {
      "title": "Predictive Maintenance for Manufacturing",
      "description": "An AI solution that analyzes sensor data from industrial machinery to predict potential failures and schedule proactive maintenance.",
      "image": image14,
      "category": "AI Automations",
      "technologies": ["Python", "IoT", "Time Series Analysis", "Anomaly Detection", "Cloud Platforms"],
      "status": "In Development"
    },
    {
      "title": "Smart Marketing Campaign Optimizer",
      "description": "AI-driven platform that automates campaign adjustments, identifies market trends, and optimizes ad spend for maximum ROI.",
      "image": image15,
      "category": "AI Automations",
      "technologies": ["Python", "Reinforcement Learning", "Big Data Analytics", "Marketing APIs"],
      "status": "Completed"
    },
    {
      "title": "Generative Design for Product Development",
      "description": "An AI service that generates optimized product designs based on specified constraints, materials, and performance goals.",
      "image": image16,
      "category": "AI Services",
      "technologies": ["Python", "Generative Adversarial Networks (GANs)", "3D Modeling Libraries", "Cloud GPUs"],
      "status": "Live"
    },
    {
      "title": "SupplyChain.AI Logistics Optimizer",
      "description": "An AI-powered service optimizing supply chain operations, including demand forecasting, inventory management, and route planning.",
      "image": image17,
      "category": "AI Services",
      "technologies": ["Python", "Machine Learning", "Optimization Algorithms", "Cloud Computing"],
      "status": "In Development"
    },
    {
      "title": "NLP-as-a-Service Platform",
      "description": "A cloud-based AI service offering advanced Natural Language Processing capabilities for text analysis, sentiment analysis, and entity recognition.",
      "image": image18,
      "category": "AI Services",
      "technologies": ["Python", "NLP Libraries (SpaCy, Hugging Face)", "REST API", "Docker", "Kubernetes"],
      "status": "Live"
    },
    {
      "title": "BIM Model Integration & Clash Detection",
      "description": "A software platform that integrates BIM models for large-scale construction projects, performing automated clash detection and visualization.",
      "image": image19,
      "category": "3D Structural Designing",
      "technologies": ["C#", "Revit API", "Three.js", "WebGL", "Cloud Databases"],
      "status": "Live"
    },
    {
      "title": "AI-Powered Generative Architecture",
      "description": "A tool leveraging AI to generate diverse architectural and structural designs based on user-defined parameters and environmental data.",
      "image": image20,
      "category": "3D Structural Designing",
      "technologies": ["Python", "Rhino/Grasshopper", "Generative AI", "Parametric Design"],
      "status": "In Development"
    },
    {
      "title": "RapidBuild 3D Printing Service",
      "description": "A service specializing in 3D printing large-scale construction components for accelerated and cost-effective building.",
      "image": image21,
      "category": "3D Structural Designing",
      "technologies": ["Robotics", "Additive Manufacturing", "Custom G-Code", "Material Science"],
      "status": "Completed"
    },
    {
      "title": "Decentralized Finance (DeFi) Protocol",
      "description": "A blockchain-based platform for decentralized lending, borrowing, and yield farming with smart contract automation.",
      "image": image22,
      "category": "Crypto Trading Platform",
      "technologies": ["Solidity", "Ethereum", "Web3.js", "Chainlink", "Truffle"],
      "status": "Live"
    },
    {
      "title": "CryptoEdu Gamified Trading Simulator",
      "description": "An interactive and gamified platform for learning cryptocurrency trading, offering simulated portfolios and market challenges.",
      "image": image23,
      "category": "Crypto Trading Platform",
      "technologies": ["React", "Node.js", "WebSocket", "Real-time APIs", "Gamification Engine"],
      "status": "In Development"
    },
    {
      "title": "Zenith Crypto Portfolio & Analytics",
      "description": "A real-time cryptocurrency portfolio management tool with advanced analytics, tax reporting, and market insights.",
      "image": image24,
      "category": "Crypto Trading Platform",
      "technologies": ["Next.js", "Python", "Data Visualization", "CoinGecko API", "PostgreSQL"],
      "status": "Completed"
    },
    {
      "title": "AlgoTrade AI Bot Suite",
      "description": "A suite of intelligent algorithmic trading bots for equities and crypto, featuring ML-driven signal generation and risk management.",
      "image": image25,
      "category": "Tier 1,2,3 trading bots",
      "technologies": ["Python", "TensorFlow", "Pandas", "NumPy", "QuantConnect"],
      "status": "Live"
    },
    {
      "title": "ArbiBot Low-Latency Arbitrage Engine",
      "description": "A high-frequency trading bot designed for low-latency arbitrage opportunities across multiple cryptocurrency exchanges.",
      "image": image26,
      "category": "Tier 1,2,3 trading bots",
      "technologies": ["C++", "Rust", "FPGA", "FIX API", "Co-location"],
      "status": "In Development"
    },
    {
      "title": "StratFlow Backtesting & Optimizer",
      "description": "A platform for developing, backtesting, and optimizing trading strategies across various asset classes using historical data.",
      "image": image27,
      "category": "Tier 1,2,3 trading bots",
      "technologies": ["Python", "Zipline", "Jupyter Notebooks", "Cloud Computing"],
      "status": "Completed"
    },
    {
      "title": "HealthConnect Patient Portal Redesign",
      "description": "UI/UX redesign of a healthcare patient portal, focusing on intuitive navigation, accessibility, and streamlined appointment booking.",
      "image": image28,
      "category": "UI/UX designing",
      "technologies": ["Figma", "Sketch", "User Research", "Usability Testing", "Accessibility Guidelines"],
      "status": "Completed"
    },
    {
      "title": "ShopSmart E-commerce App UX/UI Revamp",
      "description": "Comprehensive UX/UI revamp for a mobile e-commerce application, aiming to improve user flow, product discovery, and conversion rates.",
      "image": image29,
      "category": "UI/UX designing",
      "technologies": ["Adobe XD", "InVision", "A/B Testing", "Heatmaps", "User Journey Mapping"],
      "status": "In Development"
    },
    {
      "title": "Nexus B2B SaaS Design System",
      "description": "Creation of a scalable and consistent UI/UX design system for a complex B2B SaaS platform, including component libraries and style guides.",
      "image": image30,
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
