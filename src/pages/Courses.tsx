
import { BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";

const courses = [
  {
    title: "Python Foundation Course",
    image: "/placeholder.svg",
    type: "Recorded Course",
    progress: 65,
    tag: "Bestseller",
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
    title: "MentiBy Live Sessions [All Sections]",
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
  {
    title: "Advanced React Patterns",
    image: "/placeholder.svg",
    type: "Workshop",
    progress: 0,
    tag: "New",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            My Courses
          </h1>
          <p className="text-text-secondary text-lg">
            Track your progress and continue learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
