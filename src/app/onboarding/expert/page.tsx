import ExpertOnboardingForm from "@/components/onboarding/ExpertOnboardingForm";

export default function ExpertOnboardingPage() {
  return (
    <div className="bg-secondary/30 min-h-screen py-16 sm:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                Become a SkillSprint Expert
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Join our elite network of professionals. Showcase your skills, set your own rates, and connect with clients worldwide.
            </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
            <ExpertOnboardingForm />
        </div>
      </div>
    </div>
  );
}
