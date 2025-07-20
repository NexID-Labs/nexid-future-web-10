import { Target, Users, Zap, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that set you apart from the competition."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to understand your vision and bring it to life."
    },
    {
      icon: Zap,
      title: "Speed & Quality", 
      description: "Fast delivery without compromising quality. We use agile methodologies to ensure rapid, reliable results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project, from initial concept to final deployment and beyond."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="text-gradient">About</span> NexID Labs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking digital agency that bridges the gap between cutting-edge technology 
            and exceptional user experiences. Founded on the principles of innovation and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold font-space mb-6 text-foreground">
              Who We Are
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              NexID Labs is more than just a development agency – we're digital architects who craft 
              immersive experiences that captivate audiences and drive business growth. Our team of 
              experts combines technical excellence with creative vision to deliver solutions that 
              aren't just functional, but revolutionary.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From 3D interactive websites that push the boundaries of web experiences to AI-powered 
              platforms that automate and optimize business processes, we specialize in technologies 
              that define the future of digital interaction.
            </p>
          </div>

          <div className="animate-on-scroll">
            <div className="glass p-8 rounded-2xl border border-primary/20 interactive-card">
              <h4 className="text-2xl font-bold font-space mb-4 text-gradient">Our Edge in Tech</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Advanced WebGL and Three.js expertise
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  AI/ML integration and automation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Real-time data visualization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                  Progressive Web App development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-light rounded-full"></div>
                  Blockchain and fintech solutions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="glass interactive-card border-primary/20 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-4 shadow-neon">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold font-space mb-3 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;