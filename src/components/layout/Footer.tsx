import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <Logo />
          <p className="max-w-md mx-auto mt-4 text-sm text-foreground/60">
            Instantly match with verified experts for any micro-task.
          </p>
          <div className="flex justify-center mt-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Github">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <hr className="my-6 border-border/40" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} SkillXpress. All Rights Reserved.
          </p>
          <div className="flex mt-3 -mx-2 sm:mt-0">
            <Link href="/terms" className="mx-2 text-sm text-foreground/60 transition-colors duration-300 hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="mx-2 text-sm text-foreground/60 transition-colors duration-300 hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
