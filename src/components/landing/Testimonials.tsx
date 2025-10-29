import Image from 'next/image';
import type { Testimonial } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Trusted by Teams Worldwide
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Hear what our happy customers have to say about SkillXpress.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((testimonial) => {
          const avatar = PlaceHolderImages.find(
            (img) => img.id === testimonial.avatarUrl
          );
          return (
            <Card key={testimonial.id} className="p-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground">
                  <p>“{testimonial.comment}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <Avatar>
                    {avatar && (
                      <AvatarImage
                        src={avatar.imageUrl}
                        alt={`Photo of ${testimonial.author}`}
                        data-ai-hint={avatar.imageHint}
                      />
                    )}
                    <AvatarFallback>
                      {testimonial.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </figcaption>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
