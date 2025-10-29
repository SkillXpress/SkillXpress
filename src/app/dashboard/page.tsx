import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Customer Dashboard</h1>
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
            <CardDescription>View and edit your personal details.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Edit Profile</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>SkillXpress Booking Wizard</CardTitle>
            <CardDescription>Find an expert for your task.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Booking wizard will be implemented here.</p>
            <Button>Start Booking</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
