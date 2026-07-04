"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="w-full py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary dark:bg-primary/20 dark:text-primary-foreground">
            Booking
          </div>
          <h2 className="text-4xl font-serif tracking-tight sm:text-5xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Ready for your next appointment? Reach out to us via WhatsApp, phone, or email.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto"
        >
          <motion.a
            variants={item}
            href="https://wa.me/918849300600"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-card border border-border rounded-3xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all text-center group relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2 relative z-10">WhatsApp</h3>
            <p className="text-muted-foreground relative z-10">+91 88493 00600</p>
            <span className="mt-6 text-sm font-bold text-primary uppercase tracking-wider relative z-10">Message us</span>
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-3xl" />
          </motion.a>
          
          <motion.a
            variants={item}
            href="tel:+918849300600"
            className="flex flex-col items-center p-8 bg-card border border-border rounded-3xl hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 transition-all text-center group relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
              <Phone className="h-7 w-7 text-secondary-foreground" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2 relative z-10">Phone</h3>
            <p className="text-muted-foreground relative z-10">+91 88493 00600</p>
            <span className="mt-6 text-sm font-bold text-secondary-foreground uppercase tracking-wider relative z-10">Call now</span>
            <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-3xl" />
          </motion.a>
          
          <motion.a
            variants={item}
            href="mailto:hetuprajapati228@gmail.com"
            className="flex flex-col items-center p-8 bg-card border border-border rounded-3xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all text-center group relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2 relative z-10">Email</h3>
            <p className="text-muted-foreground relative z-10">hetuprajapati228@gmail.com</p>
            <span className="mt-6 text-sm font-bold text-primary uppercase tracking-wider relative z-10">Send an email</span>
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-3xl" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
