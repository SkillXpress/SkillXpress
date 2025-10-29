"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Sparkles, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { generateProfile } from "@/ai/flows/profile-generator";
import { Progress } from "@/components/ui/progress";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email(),
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  qualifications: z.string().min(20, { message: "Please provide a detailed summary of your qualifications." }),
  resume: z.any().optional(),
  profileDraft: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, name: "Personal Information" },
  { id: 2, name: "Qualifications & AI Profile" },
  { id: 3, name: "Review & Submit" },
];

export default function ExpertOnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeDataUri, setResumeDataUri] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useTransition();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      title: "",
      qualifications: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({ variant: 'destructive', title: 'File too large', description: 'Please upload a resume smaller than 2MB.' });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeDataUri(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateProfile = async () => {
    const qualifications = form.getValues('qualifications');
    if (!resumeDataUri) {
      toast({ variant: 'destructive', title: 'Resume required', description: 'Please upload your resume to generate a profile.' });
      return;
    }
     if (!qualifications || qualifications.length < 20) {
      form.trigger('qualifications');
      toast({ variant: 'destructive', title: 'Qualifications required', description: 'Please fill out your qualifications summary.' });
      return;
    }
    
    setIsGenerating(true);
    try {
      const result = await generateProfile({ resumeDataUri, qualifications });
      form.setValue('profileDraft', result.profileDraft);
      toast({ title: 'Profile generated!', description: 'Your AI-powered profile draft is ready.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to generate profile. Please try again.' });
    } finally {
      setIsGenerating(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if(currentStep === 1) fieldsToValidate = ['fullName', 'email', 'title'];
    if(currentStep === 2) fieldsToValidate = ['qualifications'];

    const isValid = await form.trigger(fieldsToValidate);
    if(isValid) setCurrentStep(s => s + 1);
  };
  
  const prevStep = () => setCurrentStep(s => s - 1);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(async () => {
      // Here you would typically send the data to your backend
      console.log("Submitting form data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({ title: "Application Submitted!", description: "We've received your application and will be in touch soon."});
      form.reset();
      setCurrentStep(1);
    });
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <Card>
      <CardHeader>
        <Progress value={progress} className="mb-4" />
        <CardTitle className="text-center">{steps[currentStep - 1].name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {currentStep === 1 && (
              <div className="space-y-4">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="Jane Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Title</FormLabel>
                    <FormControl><Input placeholder="e.g., Senior AI Engineer" {...field} /></FormControl>
                     <FormDescription>This will be displayed on your public profile.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <FormLabel>Upload Resume</FormLabel>
                  <FormControl>
                    <div className="mt-2 flex items-center justify-center w-full">
                       <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary/80">
                           <div className="flex flex-col items-center justify-center pt-5 pb-6">
                               <Upload className="w-8 h-8 mb-3 text-muted-foreground"/>
                               <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                               <p className="text-xs text-muted-foreground">PDF, DOCX (MAX. 2MB)</p>
                           </div>
                           <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx"/>
                       </label>
                    </div>
                  </FormControl>
                  {resumeDataUri && <p className="text-sm text-green-600 mt-2">Resume uploaded successfully.</p>}
                </div>
                 <FormField control={form.control} name="qualifications" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualifications Summary</FormLabel>
                    <FormControl><Textarea rows={5} placeholder="Summarize your key skills, experience, and accomplishments..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="button" variant="secondary" onClick={handleGenerateProfile} disabled={isGenerating}>
                    {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Sparkles className="mr-2 h-4 w-4 text-accent"/>}
                    Generate Profile with AI
                </Button>
                <FormDescription>Use your resume and summary to create a profile draft with AI.</FormDescription>
              </div>
            )}

            {currentStep === 3 && (
               <FormField control={form.control} name="profileDraft" render={({ field }) => (
                  <FormItem>
                    <FormLabel>AI-Generated Profile Draft</FormLabel>
                    <FormControl><Textarea rows={10} placeholder="Your AI-generated profile will appear here. You can edit it before submitting." {...field} /></FormControl>
                    <FormDescription>Review and edit your profile. This will be visible to clients.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />
            )}

            <div className="flex justify-between mt-8">
              {currentStep > 1 && <Button type="button" variant="ghost" onClick={prevStep}>Back</Button>}
              <div />
              {currentStep < steps.length && <Button type="button" onClick={nextStep}>Next</Button>}
              {currentStep === steps.length && <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                Submit Application
              </Button>}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
