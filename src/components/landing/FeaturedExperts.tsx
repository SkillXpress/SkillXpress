import type { Expert } from '@/lib/types';
import { ExpertCard } from '@/components/experts/ExpertCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface FeaturedExpertsProps {
  experts: Expert[];
}

const FeaturedExperts = ({ experts }: FeaturedExpertsProps) => {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Meet Our Top Experts
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Hand-picked professionals verified for quality and expertise.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/experts">
              Explore All Experts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperts;
