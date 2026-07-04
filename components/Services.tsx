"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Gel Polish",
      price: "₹250",
      description: "Long-lasting, high-gloss gel polish in a wide array of premium colors.",
      features: ["Cuticle care", "Nail shaping", "Gel application", "Lasts 2-3 weeks"],
      popular: false,
    },
    {
      title: "Nail Extension",
      price: "₹600",
      description: "Flawless, durable extensions to give your nails the perfect length and shape.",
      features: ["Custom length", "Expert shaping", "Premium finish", "Lasts 3-4 weeks"],
      popular: true,
    },
    {
      title: "Toe Gel",
      price: "₹250",
      description: "Elegant gel application for your toes, perfect for any open-toe occasion.",
      features: ["Cuticle care", "Toe nail shaping", "Gel application", "Lasts 4+ weeks"],
      popular: false,
    },
  ];

  return (
    <section id="services" className="w-full py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary dark:bg-primary/20 dark:text-primary-foreground">
            Pricing
          </div>
          <h2 className="text-4xl font-serif tracking-tight sm:text-5xl md:text-5xl">
            Premium Services
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Choose from our specialized nail treatments designed to make you feel confident and beautiful.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 bg-card rounded-3xl shadow-sm border ${
                service.popular ? "border-primary shadow-primary/20 shadow-2xl scale-105 z-10" : "border-border mt-0 md:mt-4 mb-0 md:mb-4"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="space-y-2 mb-6">
                <h3 className="font-serif font-bold text-2xl">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="mb-6 pb-6 border-b border-border">
                <span className="text-4xl font-extrabold font-serif">{service.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/40 flex items-center justify-center">
                      <Check className="h-3.5 w-3.5 text-secondary-foreground dark:text-secondary" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/918849300600?text=Hi Hetu, I'm interested in booking a ${service.title} appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-12 items-center justify-center rounded-full font-bold transition-transform hover:scale-105 active:scale-95 w-full ${
                  service.popular
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/40 text-secondary-foreground hover:bg-secondary/60"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
