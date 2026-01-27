import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Database, Terminal, Layout, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "React, Vue, Next.js, Tailwind CSS, Framer Motion",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express, PostgreSQL, Prisma, GraphQL",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Prototyping, Design Systems",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Expo, iOS, Android",
  },
  {
    icon: Terminal,
    title: "DevOps",
    description: "Docker, AWS, CI/CD, Git, Linux",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "TypeScript, Testing, Linting, Best Practices",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolset for building modern, scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
