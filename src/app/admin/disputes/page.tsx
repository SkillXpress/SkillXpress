
'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const disputes = [
  {
    id: 'DISPUTE-001',
    bookingId: 'BOOK-123',
    customer: 'John Smith',
    expert: 'Jane Doe',
    reason: 'Service not as described',
    status: 'Open',
    date: '2024-07-20',
  },
  {
    id: 'DISPUTE-002',
    bookingId: 'BOOK-124',
    customer: 'Emily White',
    expert: 'Alex Ray',
    reason: 'Expert did not show up',
    status: 'Resolved',
    date: '2024-07-18',
  },
  {
    id: 'DISPUTE-003',
    bookingId: 'BOOK-125',
    customer: 'Chris Green',
    expert: 'Sarah Chen',
    reason: 'Payment issue',
    status: 'In Progress',
    date: '2024-07-21',
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Open':
      return 'destructive';
    case 'In Progress':
      return 'secondary';
    case 'Resolved':
      return 'default';
    default:
      return 'outline';
  }
};

export default function DisputeResolutionPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Dispute Resolution</h2>
      <Card>
        <CardHeader>
          <CardTitle>Reported Disputes</CardTitle>
          <CardDescription>
            Manage and resolve disputes between customers and experts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dispute ID</TableHead>
                <TableHead>Booking ID</TableHead>
                <TableHead>Parties Involved</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputes.map((dispute) => (
                <TableRow key={dispute.id}>
                  <TableCell className="font-medium">{dispute.id}</TableCell>
                  <TableCell>{dispute.bookingId}</TableCell>
                  <TableCell>
                    C: {dispute.customer} <br /> E: {dispute.expert}
                  </TableCell>
                  <TableCell>{dispute.reason}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(dispute.status)}>
                      {dispute.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DialogTrigger asChild>
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>View/Edit</DropdownMenuItem>
                          </DialogTrigger>
                          <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                       <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                          <DialogTitle>Manage Dispute: {dispute.id}</DialogTitle>
                          <DialogDescription>
                            Review details, add notes, and update status.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="reason" className="text-right">Reason</Label>
                                <p id="reason" className="col-span-3">{dispute.reason}</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="notes" className="text-right">Admin Notes</Label>
                                <Textarea id="notes" placeholder="Add internal notes here..." className="col-span-3"/>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline">Update Status</Button>
                            <Button type="submit">Save Notes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
