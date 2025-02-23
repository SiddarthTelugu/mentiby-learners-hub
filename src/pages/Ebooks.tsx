
import { BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ebooks = [
  {
    title: "Complete Python Programming Guide",
    description: "Master Python from basics to advanced concepts",
    pages: 450,
    format: "PDF",
    category: "Programming",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Essential guide to DSA with Java examples",
    pages: 380,
    format: "PDF",
    category: "Computer Science",
  },
  {
    title: "Web Development Fundamentals",
    description: "HTML, CSS, and JavaScript essentials",
    pages: 320,
    format: "PDF",
    category: "Web Development",
  },
];

const Ebooks = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Ebooks Library
          </h1>
          <p className="text-text-secondary text-lg">
            Access our collection of programming and technology ebooks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((ebook) => (
            <Card key={ebook.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{ebook.title}</CardTitle>
                <CardDescription>{ebook.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">{ebook.category}</Badge>
                  <Badge variant="secondary">{ebook.format}</Badge>
                  <Badge variant="outline">{ebook.pages} pages</Badge>
                </div>
                <button className="btn-primary w-full">Download</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ebooks;
