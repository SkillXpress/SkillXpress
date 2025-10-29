
import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 40"
      width="110"
      height="32"
      {...props}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      
      {/* Icon */}
      <path 
        d="M20 5 C 5 15, 5 25, 20 35 S 35 25, 20 15" 
        stroke="url(#logo-grad)" 
        strokeWidth="3.5" 
        fill="none" 
        strokeLinecap="round"
      />
      <path 
        d="M20 5 L25 0"
        stroke="hsl(var(--accent))" 
        strokeWidth="3.5" 
        fill="none" 
        strokeLinecap="round"
      />

      {/* Text */}
      <text
        x="40"
        y="27"
        fontFamily="Sora, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
        className="font-headline"
      >
        SkillXpress
      </text>
    </svg>
  );
};

export default Logo;
