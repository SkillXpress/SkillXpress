import { Building, Check, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Curated Expert Teams',
    description: 'We assemble and manage teams of experts tailored to your project\'s specific needs, ensuring perfect alignment and synergy.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Seamless Integration',
    description: 'Integrate SkillSprint with your existing workflows through our robust API, enabling seamless talent management within your tools.',
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: 'Enterprise-Grade Security',
    description: 'Benefit from enhanced security protocols, dedicated support, and service-level agreements (SLAs) that meet your corporate standards.',
  },
];

const enterpriseImage = PlaceHolderImages.find((img) => img.id === 'pricing-enterprise');

export default function CorporatePage() {
  return (
    <>
      <section className="relative py-20 md:py-32 bg-secondary/50">
        <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-headline">
                SkillSprint for Business
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                Empower your organization with on-demand access to a global network of verified tech experts. Scale your teams, accelerate projects, and drive innovation with SkillSprint Enterprise.
            </p>
            <Button size="lg" className="mt-8">
                Request a Demo
            </Button>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline">Solutions</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Flexible Talent for the Modern Enterprise
            </h2>
            <p className="mt-6 text-muted-foreground">
              In a fast-paced market, agility is key. SkillSprint provides the flexible, high-quality talent you need to supplement your teams, tackle specialized projects, and stay ahead of the curve without the overhead of traditional hiring.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
             {enterpriseImage && (
                <Image
                    src={enterpriseImage.imageUrl}
                    alt={enterpriseImage.description}
                    data-ai-hint={enterpriseImage.imageHint}
                    fill
                    className="object-cover"
                />
             )}
          </div>
        </div>
      </section>

       <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                Ready to Supercharge Your Team?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Let's discuss how SkillSprint can meet your organization's unique needs.
            </p>
            <Button size="lg" className="mt-8">
                Contact Sales
            </Button>
        </div>
      </section>
    </>
  );
}
