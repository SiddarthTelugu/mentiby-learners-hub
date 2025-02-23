
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  title: string;
  image: string;
  type: string;
  progress?: number;
  tag?: string;
}

const CourseCard = ({ title, image, type, progress = 0, tag }: CourseCardProps) => {
  return (
    <div className="course-card overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {tag && (
          <Badge className="absolute top-4 right-4 bg-primary text-white">
            {tag}
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-text-muted text-sm mb-4">{type}</p>
        {progress > 0 && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-text-muted text-sm">{progress}% Complete</p>
          </div>
        )}
        <button className="btn-primary w-full mt-4">
          {progress > 0 ? "Continue Learning" : "Start Learning"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
