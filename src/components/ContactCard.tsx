import { Card, CardContent } from "@/components/ui/card";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";

interface ContactCardProps {
  name: string;
  position: string;
  onClick: () => void;
}

const ContactCard = ({ name, position, onClick }: ContactCardProps) => {
  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md hover:border-primary"
      onClick={onClick}
    >
      <CardContent className="flex items-center gap-4 p-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-muted">
          <img
            src={avatarPlaceholder}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base truncate">{name}</h3>
          <p className="text-sm text-muted-foreground truncate">{position}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
