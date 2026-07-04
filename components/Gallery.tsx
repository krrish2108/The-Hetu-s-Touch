"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Gallery() {
  const photos = [
    { src: "/images/real-gallery-1.jpeg", className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" },
    { src: "/images/real-gallery-2.jpeg", className: "col-span-1 row-span-1" },
    { src: "/images/real-gallery-3.jpeg", className: "col-span-1 row-span-1" },
    { src: "/images/real-gallery-4.jpeg", className: "col-span-2 row-span-2 md:col-span-1 md:row-span-2" },
    { src: "/images/real-gallery-5.jpeg", className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" },
    { src: "/images/real-gallery-6.jpeg", className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="gallery" className="w-full py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary dark:bg-primary/20 dark:text-primary-foreground">
            Our Work
          </div>
          <h2 className="text-4xl font-serif tracking-tight sm:text-5xl md:text-5xl">
            Nail Art Gallery
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            A glimpse into the stunning nail art and extensions we've created.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-4 md:gap-6 max-w-5xl mx-auto auto-rows-[180px] md:auto-rows-[240px]"
        >
          {photos.map((photo, idx) => (
            <motion.div 
              variants={item}
              key={idx} 
              className={`relative rounded-3xl overflow-hidden group bg-muted border border-border/50 ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={`Nail art work ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary-foreground/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium bg-white/20 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
