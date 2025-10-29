import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const plans = [
  {
    name: 'Customer',
    price: '₹299',
    period: '/month',
    description: 'Access our full network of experts for your tasks.',
    features: [
      'Unlimited AI-powered searches',
      'Secure payments',
      'Real-time booking',
      'Standard support',
    ],
    cta: 'Choose Customer Plan',
    image: PlaceHolderImages.find((img) => img.id === 'pricing-basic'),
  },
  {
    name: 'Provider',
    price: '₹499',
    period: '/month onwards',
    description: 'List your skills and get hired by clients worldwide.',
    features: [
      'Premium profile listing',
      'AI-driven job recommendations',
      'Secure payment withdrawals',
      'Access to premium clients',
    ],
    cta: 'Choose Provider Plan',
    popular: true,
    image: PlaceHolderImages.find((img) => img.id === 'pricing-pro'),
  },
  {
    name: 'Corporate',
    price: 'Contact Us',
    period: '',
    description: 'Custom solutions for your business needs.',
    features: [
      'Bulk booking discounts',
      'Dedicated account manager',
      'Custom expert sourcing',
      'Enterprise-grade security & SLA',
    ],
    cta: 'Contact Sales',
    image: PlaceHolderImages.find((img) => img.id === 'pricing-enterprise'),
  },
];

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Find the perfect plan for your needs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple and transparent pricing for everyone.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary ring-2 ring-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 right-4">Most Popular</Badge>
              )}
              {plan.image && (
                <div className="aspect-video relative w-full">
                    <Image
                        src={plan.image.imageUrl}
                        alt={plan.image.description}
                        data-ai-hint={plan.image.imageHint}
                        fill
                        className="object-cover rounded-t-lg"
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
