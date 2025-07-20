import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-glow">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full float animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full float animation-delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full float animation-delay-4000"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary-light rounded-full float animation-delay-1000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`${mounted ? 'slide-up' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-foreground">Where Innovation Meets Identity</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-space mb-6 leading-tight">
            <span className="text-gradient">Building the Future,</span>
            <br />
            <span className="text-foreground">One Platform at a Time</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in cutting-edge 3D interactive websites, AI-powered platforms, 
            and innovative SaaS solutions that transform your digital presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              className="btn-neon group text-lg px-8 py-4"
              size="lg"
            >
              Let's Build Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              onClick={scrollToServices}
              className="btn-ghost text-lg px-8 py-4"
              size="lg"
            >
              Explore Our Universe
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;