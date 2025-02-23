
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";

const courses = [
  {
    title: "Python Foundation Course",
    image: "/placeholder.svg",
    type: "Recorded Course",
    progress: 0,
  },
  {
    title: "DSA in Java (Special Batch)",
    image: "/placeholder.svg",
    type: "Recorded Course",
    progress: 35,
    tag: "Popular",
  },
  {
    title: "C Foundation Course",
    image: "/placeholder.svg",
    type: "Recorded Course",
    progress: 0,
  },
  {
    title: "MentiBY Live Sessions [All Sections]",
    image: "/placeholder.svg",
    type: "Cohort-Based Course",
    progress: 0,
    tag: "Featured",
  },
  {
    title: "Web Dev Foundation Course",
    image: "/placeholder.svg",
    type: "Recorded Course",
    progress: 15,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
