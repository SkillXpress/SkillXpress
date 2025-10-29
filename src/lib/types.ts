export type Skill = {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
};

export type Review = {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  date: string;
};

export type Expert = {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  skills: Skill[];
  bio: string;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  hourlyRate: number;
  location: string;
  reviews: Review[];
  portfolio: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
};

export type Testimonial = {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  comment: string;
};
