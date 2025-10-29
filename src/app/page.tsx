import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import FeaturedExperts from '@/components/landing/FeaturedExperts';
import Testimonials from '@/components/landing/Testimonials';
import {
  featuredExperts,
  testimonials,
} from '@/lib/placeholder-data';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <FeaturedExperts experts={featuredExperts} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
