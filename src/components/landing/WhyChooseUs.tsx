
'use client';
import { Award, Clock, Sparkles, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: 'AI-Powered Matching',
    description: 'Our intelligent algorithm connects you with the perfect expert for your task in seconds, saving you time and effort.',
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Verified Experts',
    description: 'Every expert on our platform is thoroughly vetted for skill, experience, and professionalism, ensuring top-quality results.',
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: 'Real-Time Availability',
    description: 'No more back-and-forth scheduling. See experts\' availability in real-time and book instantly for immediate help.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Flexible Solutions',
    description: 'Whether you need a quick consultation or a multi-day project, our platform supports tasks of any size and complexity.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-6 bg-secondary/30 py-16 rounded-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Why Choose SkillXpress?
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          The fastest, most reliable way to access top-tier talent.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="text-center border-2 border-transparent hover:border-accent transition-all duration-300">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                {feature.icon}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
