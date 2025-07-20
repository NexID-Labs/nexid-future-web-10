import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Services: [
      "3D Interactive Websites",
      "AI-Powered Platforms",
      "Asset Management",
      "SaaS Development",
      "Custom AI Integration",
      "UI/UX Design"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Blog",
      "Case Studies",
      "Contact"
    ],
    Resources: [
      "Documentation",
      "API Reference",
      "Tutorials",
      "Community",
      "Support",
      "FAQs"
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="relative overflow-hidden bg-surface border-t border-primary/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold font-space text-gradient mb-4">
                NexID Labs
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building the Future, One Platform at a Time
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              We're a forward-thinking digital agency specializing in 3D interactive websites, 
              AI-powered platforms, and innovative SaaS solutions that transform digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface-light border border-primary/20 hover:border-primary/50 hover:shadow-neon transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-lg font-bold font-space text-foreground">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-bold font-space mb-4 text-foreground">
              Stay Updated
            </h4>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest insights on web development, 
              AI technologies, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-surface-light border border-primary/20 focus:border-primary/50 focus:outline-none text-foreground"
              />
              <button className="btn-neon px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 NexID Labs. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Crafted with ❤️ using cutting-edge technology
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Cookies
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary shadow-neon hover:shadow-glow transition-smooth"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;