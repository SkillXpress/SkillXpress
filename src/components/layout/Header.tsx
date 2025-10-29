'use client';

import Link from 'next/link';
import { Menu, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experts', label: 'Find Experts' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/corporate', label: 'Corporate' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="mb-6 flex items-center">
                  <Logo />
                </Link>
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === link.href
                          ? 'text-foreground'
                          : 'text-foreground/60'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:block">
            <Link href="/" className="md:hidden">
              <Logo />
            </Link>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
            <Link href="/onboarding/expert">
              <Button variant="outline" size="sm" className="ml-2">
                <Sparkles className="mr-2 h-4 w-4 text-accent" />
                Become an Expert
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
