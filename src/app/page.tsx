
'use client';
import { motion } from 'framer-motion';

import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import FeaturedExperts from '@/components/landing/FeaturedExperts';
import Testimonials from '@/components/landing/Testimonials';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import SkillCategories from '@/components/landing/SkillCategories';
import ForBusiness from '@/components/landing/ForBusiness';
import Faq from '@/components/landing/Faq';

import {
  featuredExperts,
  testimonials,
} from '@/lib/placeholder-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
    className="py-20 md:py-24"
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>
      
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      <AnimatedSection>
        <SkillCategories />
      </AnimatedSection>

      <AnimatedSection>
        <FeaturedExperts experts={featuredExperts} />
      </AnimatedSection>
      
      <AnimatedSection>
        <Testimonials testimonials={testimonials} />
      </AnimatedSection>
      
      <AnimatedSection>
        <ForBusiness />
      </AnimatedSection>
      
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
      
      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container text-center max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl font-headline"
            >
                Ready to Get Started?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-muted-foreground"
            >
                Join thousands of users and experts on SkillXpress.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/experts">Book an Expert <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/onboarding/expert">Become a Provider</Link>
              </Button>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
