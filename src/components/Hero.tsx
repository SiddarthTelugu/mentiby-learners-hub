
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 to-secondary min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your Future with
            <span className="text-primary"> MentiBy</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8">
            Access world-class education from industry experts and join a community
            of passionate learners.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2">
              Start Learning <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary">View Courses</button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[url('/placeholder.svg')] bg-contain bg-no-repeat bg-right-bottom opacity-10" />
    </div>
  );
};

export default Hero;
