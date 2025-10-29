import type { Expert, Testimonial } from './types';

export const experts: Expert[] = [
  {
    id: '1',
    name: 'Jane Doe',
    title: 'Senior Frontend Developer',
    avatarUrl: 'expert-1',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'GraphQL', level: 'Intermediate' },
    ],
    bio: 'A passionate Frontend Developer with over 8 years of experience in building scalable and responsive web applications. I specialize in the React ecosystem and love crafting beautiful user interfaces.',
    rating: 4.9,
    reviewCount: 124,
    isVerified: true,
    hourlyRate: 95,
    location: 'San Francisco, CA',
    reviews: [
      {
        id: 'r1',
        author: 'Tom Wilson',
        avatarUrl: 'https://picsum.photos/seed/tom/100/100',
        rating: 5,
        comment: 'Jane is an absolute professional. Her expertise in React helped us launch our project ahead of schedule. Highly recommended!',
        date: '2024-05-15',
      },
      {
        id: 'r2',
        author: 'Emily White',
        avatarUrl: 'https://picsum.photos/seed/emily/100/100',
        rating: 5,
        comment: 'Excellent communication and high-quality work. Will definitely hire again.',
        date: '2024-04-22',
      },
    ],
    portfolio: [
        {
            title: 'E-commerce Platform',
            description: 'Developed a full-featured e-commerce platform using Next.js and GraphQL.',
            imageUrl: 'https://picsum.photos/seed/ecomm/600/400'
        }
    ]
  },
  {
    id: '2',
    name: 'John Smith',
    title: 'AI & Machine Learning Engineer',
    avatarUrl: 'expert-2',
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'TensorFlow', level: 'Expert' },
      { name: 'PyTorch', level: 'Advanced' },
      { name: 'Genkit', level: 'Advanced' },
    ],
    bio: 'AI enthusiast and professional with a knack for solving complex problems using machine learning. Experienced in developing and deploying models for natural language processing and computer vision.',
    rating: 4.8,
    reviewCount: 89,
    isVerified: true,
    hourlyRate: 120,
    location: 'Austin, TX',
    reviews: [
      {
        id: 'r3',
        author: 'Chris Green',
        avatarUrl: 'https://picsum.photos/seed/chris/100/100',
        rating: 5,
        comment: "John's understanding of ML concepts is profound. He delivered a highly accurate model for our sentiment analysis task.",
        date: '2024-06-01',
      },
    ],
    portfolio: [
         {
            title: 'Sentiment Analysis API',
            description: 'Built and deployed a high-performance sentiment analysis API for customer feedback.',
            imageUrl: 'https://picsum.photos/seed/sentiment/600/400'
        }
    ]
  },
  {
    id: '3',
    name: 'Alex Ray',
    title: 'Cloud & DevOps Specialist',
    avatarUrl: 'expert-3',
    skills: [
      { name: 'AWS', level: 'Expert' },
      { name: 'Docker', level: 'Expert' },
      { name: 'Kubernetes', level: 'Advanced' },
      { name: 'Terraform', level: 'Advanced' },
    ],
    bio: 'DevOps engineer with a focus on creating robust, scalable, and secure cloud infrastructure. I help companies streamline their development pipelines and optimize their cloud spending.',
    rating: 4.9,
    reviewCount: 150,
    isVerified: false,
    hourlyRate: 110,
    location: 'New York, NY',
    reviews: [],
    portfolio: []
  },
  {
    id: '4',
    name: 'Sarah Chen',
    title: 'UX/UI Designer',
    avatarUrl: 'expert-4',
    skills: [
      { name: 'Figma', level: 'Expert' },
      { name: 'Adobe XD', level: 'Expert' },
      { name: 'User Research', level: 'Advanced' },
      { name: 'Prototyping', level: 'Advanced' },
    ],
    bio: 'Creative and detail-oriented UX/UI designer dedicated to crafting intuitive and engaging digital experiences. I bridge the gap between user needs and business goals.',
    rating: 5.0,
    reviewCount: 210,
    isVerified: true,
    hourlyRate: 85,
    location: 'Remote',
    reviews: [],
    portfolio: []
  },
];

export const featuredExperts = experts.slice(0, 3);

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Lee',
    role: 'Project Manager',
    company: 'Innovate Inc.',
    avatarUrl: 'testimonial-1-avatar',
    comment:
      'SkillXpress revolutionized how we find and hire talent for short-term projects. The AI matching is incredibly accurate and saves us hours of searching. We found the perfect DevOps expert in minutes!',
  },
  {
    id: '2',
    author: 'David Martinez',
    role: 'CTO',
    company: 'Tech-Forward LLC',
    avatarUrl: 'testimonial-2-avatar',
    comment:
      'The quality of experts on SkillXpress is outstanding. The verification process gives us confidence, and the platform is so easy to use. It\'s become our go-to for specialized skills on demand.',
  },
];
