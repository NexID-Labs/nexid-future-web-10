import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
