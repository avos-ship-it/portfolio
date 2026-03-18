export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  problem: string;
  role: string;
  approach: string;
  results: string[];
  skills: string[];
  tools: string[];
  imageUrl: string;
  featured?: boolean;
  assets?: { url: string; title: string; previewUrl?: string; caption?: string }[];
  embedUrl?: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
}
