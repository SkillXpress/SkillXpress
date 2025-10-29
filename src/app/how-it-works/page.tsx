import { Search, CalendarCheck, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: '1. Describe Your Need',
    description:
      'Use our AI-powered search to describe the task or skill you need. Be as specific as you like.',
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-primary" />,
    title: '2. Book Your Expert',
    description:
      'Our AI provides a shortlist of top-matched experts. View their profiles, see real-time availability, and book instantly.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: '3. Get It Done',
    description:
      'Collaborate with your expert. Once the task is complete, payment is securely processed. Rate and review your experience.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            How SkillXpress Works
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Getting expert help has never been easier. Just three simple steps.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2">{step.title}</CardTitle>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
