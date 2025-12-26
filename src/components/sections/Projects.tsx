import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Meu Portfólio",
      description:
        "Este site! Um portfólio moderno e responsivo construído com as tecnologias mais recentes.",
      tech: "Next.js, Tailwind CSS, TypeScript",
      image: "/Screenshot_1.png",
      siteUrl: "https://meu-portfolio-one-gilt.vercel.app/",
      githubUrl: "https://github.com/wesleyportugalf5/MeuPortfolio",
    },
    {
      title: "Projeto 2",
      description: "Uma solução inovadora para problemas reais.",
      tech: "React, Node.js",
      siteUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Projeto 3",
      description: "App mobile revolucionário.",
      tech: "React Native, Firebase",
      siteUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
      <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              {project.image ? (
                <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-full h-40 bg-muted rounded-md mb-4 flex items-center justify-center text-muted-foreground">
                  Imagem do Projeto
                </div>
              )}
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.tech}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild className="flex-1">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Site
                </a>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Github
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
