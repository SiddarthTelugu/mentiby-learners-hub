
import { Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Social Media Dashboard",
    description: "A React-based social media analytics dashboard",
    tech: ["React", "TypeScript", "Tailwind"],
    downloads: 1200,
    size: "2.5 MB",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with admin panel",
    tech: ["Node.js", "React", "MongoDB"],
    downloads: 850,
    size: "4.2 MB",
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management applications",
    tech: ["Express", "PostgreSQL", "JWT"],
    downloads: 650,
    size: "1.8 MB",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Download className="w-8 h-8 text-primary" />
            My Downloadable Projects
          </h1>
          <p className="text-text-secondary text-lg">
            Download and explore complete project solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-4 text-sm text-text-muted">
                  <span>{project.downloads} downloads</span>
                  <span>{project.size}</span>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download Project
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
