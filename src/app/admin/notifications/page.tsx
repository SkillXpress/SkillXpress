
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Megaphone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function NotificationsPage() {
  const { toast } = useToast();

  const handleBroadcast = () => {
    toast({
      title: 'Notification Broadcast!',
      description: 'Your message has been sent to all users.',
    });
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center gap-4">
        <Megaphone className="h-8 w-8" />
        <h2 className="text-3xl font-bold tracking-tight">
          Broadcast Notifications
        </h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Create a Site-Wide Announcement</CardTitle>
          <CardDescription>
            This message will be displayed as a toast notification to all
            active users on the platform.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your announcement here..."
              rows={5}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="audience">Target Audience</Label>
            <Select defaultValue="all">
              <SelectTrigger id="audience" className="w-[280px]">
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="customers">Customers Only</SelectItem>
                <SelectItem value="experts">Experts Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleBroadcast}>
            <Send className="mr-2 h-4 w-4" />
            Broadcast Message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
