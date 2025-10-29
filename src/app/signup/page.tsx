"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Chrome } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-14rem)] py-12">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle>Create an Account</CardTitle>
                    <CardDescription>Join SkillXpress today.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                    <Button className="w-full">Sign Up</Button>
                    <div className="relative w-full">
                        <Separator className="absolute top-1/2 left-0 w-full" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">OR</span>
                    </div>
                    <Button variant="outline" className="w-full">
                        <Chrome className="mr-2 h-4 w-4" />
                        Sign up with Google
                    </Button>
                     <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary hover:underline">
                            Log In
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
