import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Star } from 'lucide-react';
import type { Expert } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ExpertCardProps {
  expert: Expert;
}

export const ExpertCard = ({ expert }: ExpertCardProps) => {
  const avatar = PlaceHolderImages.find((img) => img.id === expert.avatarUrl);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="flex flex-row items-start gap-4 p-4">
        <Avatar className="w-16 h-16 border-2 border-primary/50">
          {avatar && (
            <AvatarImage
              src={avatar.imageUrl}
              alt={expert.name}
              data-ai-hint="person portrait"
            />
          )}
          <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg font-bold">{expert.name}</CardTitle>
            {expert.isVerified && (
              <ShieldCheck className="h-5 w-5 text-accent" fill="hsl(var(--accent) / 0.2)" />
            )}
          </div>
          <CardDescription>{expert.title}</CardDescription>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-bold">{expert.rating.toFixed(1)}</span>
            </div>
            <span className="text-muted-foreground">({expert.reviewCount} reviews)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {expert.bio}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {expert.skills.slice(0, 3).map((skill) => (
            <Badge key={skill.name} variant="secondary">
              {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/30">
        <Button asChild className="w-full">
          <Link href={`/experts/${expert.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
