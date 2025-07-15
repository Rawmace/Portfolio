import JavaScriptIcon from "../../public/assets/Icons/JavaScript";
import ReactIcon from "../../public/assets/Icons/React";
import TypeScriptIcon from "../../public/assets/Icons/TypeScript";
import NextjsIcon from "../../public/assets/Icons/Nextjs";

import ExpressIcon from "../../public/assets/Icons/Express";

import MongoDBIcon from "../../public/assets/Icons/Mongodb";
import NodejsIcon from "../../public/assets/Icons/Node";
import FirebaseIcon from "../../public/assets/Icons/Firebase";
import TailwindIcon from "../../public/assets/Icons/Tailwind";
import SassIcon from "../../public/assets/Icons/Sass";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "brain-archive",
    title: "Brain Archive",
    description: "A sophisticated document management system with AI-powered vector search, real-time collaboration, and smart document organization using OpenAI embeddings.",
    imageUrl: "/assets/images/Brain-Archive.png",
    technologies: [
      { name: "Next.js", icon: NextjsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind", icon: TailwindIcon }
    ],
    github: "https://github.com/Rawmace/twitter-clone",
    link: "https://twitter-clone.vercel.app/",
    featured: true,
  },
  {
    id: "project-2",
    title: "Portfolio V1",
    description: "A responsive personal portfolio showcasing projects and skills, featuring smooth animations, dynamic content loading, and modern design principles.",
    imageUrl: "/assets/images/portfolio.png",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      {name: "Sass" , icon: SassIcon}
    ],
    github: "https://github.com/Rawmace/Portfolio",
    link: "https://ramesh-devkota.com.np",
    featured: true,
  },
  {
    id: "guff-gaff",
    title: "GuffGaff",
    description: "A feature-rich real-time chat application with instant messaging, user presence tracking, and file sharing capabilities, built on Firebase's scalable infrastructure.",
    imageUrl: "/assets/images/GuffGaff.png",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Node.js", icon: NodejsIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/GuffGaff",
    link: "https://chatapp-e9717.firebaseapp.com",
    featured: true,
  },
  {
    id: "khaja-ghar",
    title: "KhajaGhar",
    description: "A comprehensive food ordering platform with real-time order tracking, secure payment processing, and an intuitive admin dashboard for restaurant management.",
    imageUrl: "/assets/images/KhajaGhar.png",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodejsIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "Express", icon: ExpressIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/KhajaGhar",
    link: "https://khajaaghaar.netlify.app/",
    featured: false,
  },
  {
    id: "visual-sort",
    title: "VisualSort",
    description: "An interactive algorithm visualization tool demonstrating various sorting algorithms with customizable array sizes, speeds, and step-by-step animation controls.",
    imageUrl: "/assets/images/visualsort.gif",
    technologies: [
      { name: "Next.js", icon: NextjsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/visualsort",
    link: "https://visualsort-three.vercel.app/",
    featured: false,
  },
  {
    id: "path-viz",
    title: "PathViz",
    description: "An algorithm visualization tool for pathfinding algorithms, featuring interactive grid-based visualization, multiple algorithms, and adjustable animation speeds.",
    imageUrl: "/assets/images/pathviz.gif",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/pathviz",
    link: "https://pathviz-phi.vercel.app/",
    featured: true,
  },
  {
    id: "mini-project",
    title: "Mini Practice Project",
    description: "A collection of Next.js mini-applications showcasing various web development concepts, state management patterns, and API integration techniques.",
    imageUrl: "/assets/images/mini-project.gif",
    technologies: [
      { name: "Next.js", icon: NextjsIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/Practice_NextJs",
    link: "https://nextjs-mini-projects-iota.vercel.app/",
    featured: false,
  },
];