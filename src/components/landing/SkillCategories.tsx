
'use client';
import { Code, Brush, Megaphone, Laptop, Mic, BarChart, PenTool } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const categories = [
  { icon: <Code className="w-10 h-10 mx-auto" />, name: 'Coding & Tech' },
  { icon: <Brush className="w-10 h-10 mx-auto" />, name: 'Design' },
  { icon: <PenTool className="w-10 h-10 mx-auto" />, name: 'Writing' },
  { icon: <Megaphone className="w-10 h-10 mx-auto" />, name: 'Marketing' },
  { icon: <Mic className="w-10 h-10 mx-auto" />, name: 'Tutoring' },
  { icon: <Laptop className="w-10 h-10 mx-auto" />, name: 'Tech Support' },
  { icon: <BarChart className="w-10 h-10 mx-auto" />, name: 'Business' },
];

const SkillCategories = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Explore by Category
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Find experts across a wide range of skills.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7 md:gap-6">
        {categories.map((category) => (
          <Link href="/experts" key={category.name}>
             <Card className="group flex flex-col items-center justify-center p-6 text-center h-full hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-primary group-hover:scale-110 transition-transform">{category.icon}</div>
                <p className="mt-4 font-semibold text-sm md:text-base">{category.name}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SkillCategories;
