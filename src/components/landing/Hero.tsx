'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { Cpu, Loader2, Search, Sparkles, Star, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

import { skillMatcher, SkillMatcherOutput } from '@/ai/flows/skill-matcher-prompt';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

const formSchema = z.object({
  skillRequest: z.string().min(10, 'Please describe the skill you need in at least 10 characters.'),
});

const AISkillMatcher = () => {
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState<SkillMatcherOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skillRequest: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setResults(null);
    startTransition(async () => {
      try {
        const { expertSuggestions, ...rest } = await skillMatcher({
          skillRequest: values.skillRequest,
        });

        if (!expertSuggestions || expertSuggestions.length === 0) {
          toast({
            variant: 'destructive',
            title: 'No Experts Found',
            description: 'Our AI couldn\'t find a match. Please try a different or more detailed request.',
          });
          return;
        }
        setResults({ expertSuggestions, ...rest });
      } catch (error) {
         toast({
            variant: 'destructive',
            title: 'An Error Occurred',
            description: 'There was an issue with the AI matcher. Please try again.',
        });
      }
    });
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
          <div className="flex w-full items-start space-x-2">
            <FormField
              control={form.control}
              name="skillRequest"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative">
                      <Cpu className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Describe a skill you need, e.g., 'a Python developer for a data scraping script'"
                        className="pl-10 h-12 text-base"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="h-12" disabled={isPending}>
              {isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <Search className="mr-2" /> Find Expert
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>

      {isPending && (
        <div className="mt-8 text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">Our AI is finding the best matches for you...</p>
        </div>
      )}

      {results && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold tracking-tight text-center mb-4 flex items-center justify-center gap-2">
            <Sparkles className="text-accent" />
            Top Matches Found by AI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.expertSuggestions.map((expert) => (
              <Card key={expert.expertId} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={`https://picsum.photos/seed/${expert.expertId}/100/100`} data-ai-hint="person portrait" />
                      <AvatarFallback>{expert.expertId.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-bold">{expert.expertId}</p>
                      <div className="flex items-center gap-1 text-sm text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{(expert.matchScore * 5).toFixed(1)}</span>
                        <span className="text-muted-foreground">match score</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                        {expert.expertProfileSummary}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


const Hero = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover object-center opacity-10"
        />
      )}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
            <Sparkles className="mr-2 h-4 w-4 text-accent" />
            Any Skill. Any Time. Anywhere.
          </Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Find Your Perfect Expert, Instantly.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Describe your task, and our AI will instantly match you with verified, top-tier experts ready to start right away. SkillXpress connects you with professionals for coding, design, marketing, and more.
          </p>

          <div className="mt-10 w-full max-w-2xl">
            <AISkillMatcher />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/experts">Book an Expert</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/onboarding/expert">Become a Provider</Link>
              </Button>
               <Button variant="ghost" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/corporate">Contact Us</Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
