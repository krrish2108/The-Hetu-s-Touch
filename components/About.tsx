"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="w-full py-24 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-serif tracking-tight sm:text-5xl">
                Meet <span className="text-primary">Hetu</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hi, I'm Hetu Prajapati, the founder and lead nail technician at The Hetu's Touch. My passion is transforming ordinary nails into extraordinary works of art. With years of experience and a keen eye for detail, I ensure every client leaves with nails they absolutely love.
              </p>
              <div className="relative pl-6 py-2 border-l-4 border-secondary mt-8">
                <p className="text-xl font-medium italic text-foreground/90 font-serif">
                  "I don't just do nails; I craft confidence, one stunning set at a time."
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-background shadow-2xl z-10">
              <Image
                src="/images/hetu-profile.jpeg"
                alt="Hetu Prajapati"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Decorative blob behind profile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
