import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  onClick: () => void;
}

const CategoryCard = ({ icon: Icon, title, onClick }: CategoryCardProps) => {
  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary"
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
