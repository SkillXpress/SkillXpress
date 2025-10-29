import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import FeaturedExperts from '@/components/landing/FeaturedExperts';
import Testimonials from '@/components/landing/Testimonials';
import {
  featuredExperts,
  testimonials,
} from '@/lib/placeholder-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <FeaturedExperts experts={featuredExperts} />
      <Testimonials testimonials={testimonials} />
      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Join thousands of users and experts on SkillXpress.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/experts">Book an Expert <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/onboarding/expert">Become a Provider</Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
