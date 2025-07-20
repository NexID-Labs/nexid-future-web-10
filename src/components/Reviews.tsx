import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Innovations",
      company: "TechFlow",
      rating: 5,
      review: "NexID Labs transformed our vision into reality with their 3D interactive platform. The level of innovation and attention to detail exceeded our expectations. Our user engagement increased by 300% after launch.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face&auto=format",
      project: "3D Interactive Platform"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, FinanceAI Solutions",
      company: "FinanceAI",
      rating: 5,
      review: "The AI-powered trading dashboard they built for us is absolutely phenomenal. The real-time visualizations and predictive analytics have given us a competitive edge in the market. Exceptional work!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
      project: "AI Trading Dashboard"
    },
    {
      name: "Elena Vasquez",
      role: "Founder, StartupLab",
      company: "StartupLab",
      rating: 5,
      review: "Working with NexID Labs was a game-changer for our SaaS platform. Their expertise in modern web technologies and user experience design helped us launch ahead of schedule with outstanding results.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format",
      project: "SaaS Platform Development"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with NexID Labs 
            and the exceptional results we've delivered together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <Card 
              key={review.name}
              className="glass interactive-card border-primary/20 relative overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{review.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-sm text-primary">{review.company}</p>
                  </div>
                </div>

                {/* Project Badge */}
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {review.project}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-gradient mb-2">5.0★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-gradient mb-2">48h</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-gradient mb-2">30+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-on-scroll">
          <div className="glass p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-space mb-4 text-gradient">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create something extraordinary together. We're committed to delivering 
              exceptional results that exceed your expectations.
            </p>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-neon"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;