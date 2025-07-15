import { ReactNode } from "react";
export interface Technology {
  name: string;
  icon: string | (() => ReactNode);
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  link?: string;
  github?: string;
  featured?: boolean;
}
