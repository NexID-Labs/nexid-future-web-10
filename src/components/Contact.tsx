import { useState } from "react";
import { Send, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvgqzwwn', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast.success("Thank you! We'll get back to you within 24 hours.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          message: ""
        });
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Global Presence",
      content: "Remote-first agency serving clients worldwide",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@nexidlabs.com",
      color: "text-secondary"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch with our team to discuss 
            your project and discover how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass border-primary/20 animate-on-scroll">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-space mb-6 text-gradient">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="glass border-primary/30 focus:border-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="glass border-primary/30 focus:border-primary/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="glass border-primary/30 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <Input
                      type="text"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="e.g., 3D Website, AI Platform"
                      className="glass border-primary/30 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and requirements..."
                    className="glass border-primary/30 focus:border-primary/50 min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="btn-neon w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-on-scroll">
            <div className="glass p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold font-space mb-6 text-gradient">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help you transform your digital presence. Whether you need a 
                cutting-edge 3D website, AI-powered platform, or custom SaaS solution, 
                our team is ready to bring your vision to life.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface/50 ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass p-6 rounded-2xl border border-primary/20">
              <h4 className="text-xl font-bold font-space mb-4 text-foreground">
                Quick Contact
              </h4>
              <p className="text-muted-foreground mb-4">
                Need immediate assistance? We're available for urgent consultations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="btn-ghost flex-1" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button className="btn-ghost flex-1" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass p-6 rounded-2xl border border-primary/20">
              <h4 className="text-xl font-bold font-space mb-4 text-foreground">
                Business Hours
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;