import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
    tags: ["React", "TypeScript", "Recharts", "Supabase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    description: "Next-generation content creation tool powered by OpenAI's GPT-4, helping writers overcome writer's block.",
    tags: ["Next.js", "OpenAI API", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with Kanban boards, real-time updates, and team chat functionality.",
    tags: ["Vue.js", "Firebase", "Pinia", "Sass"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent work, showcasing my ability to solve complex problems with elegant code.
            </p>
          </div>
          <Button variant="outline" className="border-white/10">
            View All Projects
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card/50 border-white/5 hover:border-primary/50 transition-all h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-0">
                  <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-primary hover:text-white hover:border-primary">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                  <Button variant="ghost" size="icon" className="border border-white/10">
                    <Github className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
