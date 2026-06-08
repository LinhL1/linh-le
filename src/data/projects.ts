import sheDriveImg from "@/assets/projects/shedrive.png";
import impromptu from "@/assets/projects/impromptu.png";
import mmi from "@/assets/projects/mmi.png";
import phishstx from "@/assets/projects/phishstx.png";
import informed from "@/assets/projects/informed.png";
import jot from "@/assets/projects/jot.png";
import progress from "@/assets/projects/progress.png";
import auralink from "@/assets/projects/auralink.png";

export interface Project {
  title: string;
  type: string;
  category: "personal" | "hackathon" | "other";
  description: string;
  year: string;
  link?: string;
  image?: string;
  tools?: string[];
}

export const projects: Project[] = [
  {
    title: "Jot",
    type: "Web Browser Extension",
    category: "personal",
    description:
      "Common placing + quick notes extension tool",
    year: "2026",
    link: "https://github.com/LinhL1/jot-extension",
    image: jot,
    tools: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Auralink",
    type: "Music Hack Space 2026: Biometric Instrument",
    category: "hackathon",
    description:
      "Joint hackathon project: An adaptive bio-music instrument that translates interpersonal biometrics into generative, synchronized musical structures",
    year: "2026",
    link: "https://github.com/willdaly/Auralink",
    image: auralink,
    tools: ["Python", "Google Deepmind Magenta"]
  },
  {
    title: "INformed",
    type: "Gamified Educational Web App",
    category: "other",
    description:
      "A web/mobile application for the IN Network, providing a gamified learning experience to educate individuals on misinformation and digital media.",
    year: "MAY 2026",
    link: "https://innetwork-informed.vercel.app/",
    image: informed,
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Impromptu",
    type: "Hack the Beanpot: Best Gemini API Integration",
    category: "hackathon",
    description:
      "Joint hackathon project: A fun daily scavenger hunt to keep friends connected through shared mini side quests.",
    year: "FEB 2026",
    link: "https://github.com/LinhL1/Impromptu",
    image: impromptu,
    tools: ["React", "Firebase", "Gemini API", "ElevenLabs API"]

  },
  {
    title: "She Drive",
    type: "Mobile Application",
    category: "other",
    description:
      "A collaborative side project: A full-stack mobile app focused on providing women with a safe and flexible transportation option (Morocco based)",
    year: "JAN 2026",
    link: "https://github.com/haliait/SheDrive",
    image: progress,
    tools: ["Flutter", "Laravel", "Google Maps API", "MySQL"]

  },
  {
    title: "Me, My-Shelf, and I",
    type: "Creative Web App",
    category: "personal",
    description:
      "A cozy digital reading nook to track read books, reading goals, and notes. All you need for an enjoyable reading session in one place.",
    year: "JAN 2026",
    link: "https://just-myshelf.lovable.app/",
    image: mmi,
    tools: ["Lovable", "React", "Supabase"]
  },
  {
    title: "PhishSTX",
    type: "AI/ML",
    category: "other",
    description:
      "An AI4ALL collaborative project: Trained ML models to develop an email phishing detector using NLP techniques.",
    year: "JAN 2026",
    link: "https://phish-stx-deda6n8vytgxa5jzqmmref.streamlit.app/",
    image: phishstx,
    tools: ["Python", "Pandas", "Numpy", "Scikit-learn", "Streamlit"]

  },

];
