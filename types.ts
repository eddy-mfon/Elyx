
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  tags: string[];
  videoUrl?: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  company: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export enum NavLinkType {
  ANCHOR = 'ANCHOR',
  ROUTE = 'ROUTE'
}

export interface NavItem {
  label: string;
  href: string;
  type: NavLinkType;
}
