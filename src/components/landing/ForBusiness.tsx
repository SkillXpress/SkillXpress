
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ForBusiness = () => {
  const enterpriseImage = PlaceHolderImages.find((img) => img.id === 'pricing-enterprise');
  return (
    <div className="container mx-auto px-6">
      <div className="relative rounded-lg overflow-hidden p-8 md:p-12 bg-secondary/50">
        {enterpriseImage && (
            <Image
                src={enterpriseImage.imageUrl}
                alt={enterpriseImage.description}
                data-ai-hint={enterpriseImage.imageHint}
                fill
                className="object-cover opacity-10"
            />
        )}
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm mb-4">
              <Building className="w-4 h-4" />
              <span>For Business</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Power Up Your Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Scale your workforce on-demand. SkillXpress for Business provides curated expert teams, seamless integration, and enterprise-grade security to help you accelerate projects and drive innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/corporate">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/corporate">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;
