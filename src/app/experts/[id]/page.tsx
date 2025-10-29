import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  Star,
  MapPin,
  Briefcase,
  Lightbulb,
} from 'lucide-react';

import { experts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RupeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 flex-shrink-0 text-primary"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m19 13-1-1-2 2-2-2-1 1-2 2-2-2-1 1-2 2-2-2-1 1"/><path d="M6 13h12"/></svg>
)

export default function ExpertProfilePage({ params }: { params: { id: string } }) {
  const expert = experts.find((e) => e.id === params.id);

  if (!expert) {
    notFound();
  }

  const avatar = PlaceHolderImages.find((img) => img.id === expert.avatarUrl);

  return (
    <div className="bg-secondary/30">
        <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="md:col-span-1 space-y-8">
                <Card className="overflow-hidden">
                    <CardContent className="p-6 text-center">
                    <Avatar className="w-32 h-32 mx-auto border-4 border-primary/50 shadow-lg">
                        {avatar && (
                        <AvatarImage src={avatar.imageUrl} alt={expert.name} data-ai-hint="person portrait" />
                        )}
                        <AvatarFallback className="text-4xl">{expert.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h1 className="mt-4 text-2xl font-bold flex items-center justify-center gap-2">
                        {expert.name}
                        {expert.isVerified && (
                        <ShieldCheck className="h-6 w-6 text-accent" fill="hsl(var(--accent) / 0.2)" />
                        )}
                    </h1>
                    <p className="text-muted-foreground">{expert.title}</p>
                    <div className="mt-4 flex items-center justify-center gap-4">
                        <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="font-bold text-lg">{expert.rating.toFixed(1)}</span>
                        </div>
                        <span className="text-muted-foreground">({expert.reviewCount} reviews)</span>
                    </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                            <span>{expert.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                            <RupeeIcon />
                            <span><span className="font-bold text-foreground">₹{expert.hourlyRate.toLocaleString('en-IN')}</span> / hour</span>
                        </div>
                        <Button size="lg" className="w-full">Book Now</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Availability</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Calendar
                            mode="single"
                            selected={new Date()}
                            className="rounded-md"
                        />
                    </CardContent>
                </Card>

            </div>

            {/* Right Column */}
            <div className="md:col-span-2">
                <Card>
                    <CardContent className="p-6">
                    <h2 className="text-2xl font-bold">About Me</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{expert.bio}</p>
                    </CardContent>
                </Card>
                
                <Tabs defaultValue="skills" className="mt-8">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="skills"><Lightbulb className="mr-2 h-4 w-4"/>Skills</TabsTrigger>
                        <TabsTrigger value="portfolio"><Briefcase className="mr-2 h-4 w-4"/>Portfolio</TabsTrigger>
                        <TabsTrigger value="reviews"><Star className="mr-2 h-4 w-4"/>Reviews</TabsTrigger>
                    </TabsList>
                    <TabsContent value="skills" className="mt-4">
                        <Card>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {expert.skills.map(skill => (
                                    <div key={skill.name}>
                                        <p className="font-semibold">{skill.name}</p>
                                        <p className="text-sm text-muted-foreground">{skill.level}</p>
                                    </div>
                                ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                     <TabsContent value="portfolio" className="mt-4">
                        <div className="space-y-6">
                          {expert.portfolio.map((item, index) => (
                            <Card key={index} className="overflow-hidden">
                                <div className="aspect-video relative w-full">
                                    <Image src={item.imageUrl} alt={item.title} fill className="object-cover" data-ai-hint="project screenshot"/>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                </div>
                            </Card>
                          ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="reviews" className="mt-4">
                        <div className="space-y-6">
                            {expert.reviews.map(review => (
                            <Card key={review.id}>
                                <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Avatar>
                                    <AvatarImage src={review.avatarUrl} alt={review.author} data-ai-hint="person portrait"/>
                                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold">{review.author}</p>
                                            <p className="text-sm text-muted-foreground">{review.date}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            <Star className="w-4 h-4 fill-current"/>
                                            <span>{review.rating.toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-muted-foreground">{review.comment}</p>
                                    </div>
                                </div>
                                </CardContent>
                            </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
        </div>
    </div>
  );
}
