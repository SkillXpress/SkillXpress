import { experts } from '@/lib/placeholder-data';
import { ExpertCard } from '@/components/experts/ExpertCard';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function ExpertsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
            Explore Our Network of Experts
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find the perfect match for your project from our pool of verified, world-class professionals.
          </p>
        </div>
        <div className="mt-12 mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
                <Input placeholder="Search by skill (e.g., React, Python)" className="pl-10 h-11"/>
            </div>
            <Select>
                <SelectTrigger className="w-full md:w-[180px] h-11">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="rate-low-high">Rate: Low to High</SelectItem>
                    <SelectItem value="rate-high-low">Rate: High to Low</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    </div>
  );
}
