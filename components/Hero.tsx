"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  
  return (
    <section ref={ref} className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary dark:bg-primary/20 dark:text-primary-foreground">
                Premium Nail Art & Services
              </div>
              <h1 className="text-5xl font-serif tracking-tight sm:text-6xl xl:text-7xl/none">
                Elegance at your <span className="text-primary italic">fingertips.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
                Your nails, your canvas. Let's create a masterpiece together. Nailing perfection, one stroke at a time.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <a
                href="https://wa.me/918849300600"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow transition-transform hover:scale-105 active:scale-95"
              >
                Book on WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary/20 hover:text-secondary-foreground"
              >
                See prices
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[400px] lg:max-w-none aspect-[4/5] lg:aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.div style={{ y, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
              <Image
                src="/images/real-gallery-7.jpeg"
                alt="Beautiful gel nails"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-bottom transition-transform duration-700 hover:scale-105"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full -z-10 opacity-60 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10 opacity-50 dark:opacity-10 pointer-events-none" />
    </section>
  );
}
