import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
            Available for freelance work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              experiences
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I'm a Full Stack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend art with code.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5">
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex gap-6">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Abstract visual element on the right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative z-10 bg-card/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="space-y-4">
                <div className="h-2 w-20 bg-primary/40 rounded-full" />
                <div className="space-y-2">
                  <div className="h-24 bg-white/5 rounded-lg" />
                  <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                </div>
                <div className="flex gap-4 pt-4">
                  <div className="h-10 w-24 bg-primary/40 rounded-md" />
                  <div className="h-10 w-24 bg-white/5 rounded-md" />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
