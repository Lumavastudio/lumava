// app/portfolio/motion-design/_projects.ts

export type MediaType = "image" | "video";

export interface MediaItem {
  type: MediaType;
  src: string;
  alt?: string;
}

export interface Project {
  id: string;
  folder: string;
  title: string;
  description: string;
  cover?: string;
  media: MediaItem[];
}

export const projects: Project[] = [
  {
    id: "project001",
    folder: "project001",
    title: "Rihanna Beauty Studio – Motion Design Series",
    description:
      "A five-video motion design series created for Rihanna Beauty Studio, showcasing high-end visual storytelling through logo animations, shape transitions, and brand-focused motion aesthetics. Each clip highlights advanced rhythm-based editing, dynamic typography, and clean visual design.",
    cover: "/portfolio/motion-design/project001/cover.webp",
    media: [
      { type: "video", src: "/portfolio/motion-design/project001/motion001.m4v" },
      { type: "video", src: "/portfolio/motion-design/project001/motion002.m4v" },
      { type: "video", src: "/portfolio/motion-design/project001/motion003.m4v" },
      { type: "video", src: "/portfolio/motion-design/project001/motion004.m4v" },
      { type: "video", src: "/portfolio/motion-design/project001/motion005.m4v" }
    ]
  },

  {
    id: "project002",
    folder: "project002",
    title: "Character Showcase – Motion Graphic Videos",
    description:
      "A four-video collection of motion graphic sequences emphasizing character, atmosphere, and emotional expression. Each piece merges client visuals with custom animation layers and music-driven rhythm.",
    cover: "/portfolio/motion-design/project002/cover.webp",
    media: [
      { type: "video", src: "/portfolio/motion-design/project002/motion001.m4v" },
      { type: "video", src: "/portfolio/motion-design/project002/motion002.m4v" },
      { type: "video", src: "/portfolio/motion-design/project002/motion003.m4v" }
    ]
  },

  {
    id: "project003",
    folder: "project003",
    title: "Lumava Studio – Color Grading & Visual Enhancement",
    description:
      "A two-video series focused on color grading demonstrations and refined visual transformations. The motion clips highlight before-and-after sequences, controlled transitions, and color-driven storytelling.",
    cover: "/portfolio/motion-design/project003/cover.webp",
    media: [
      { type: "video", src: "/portfolio/motion-design/project003/motion001.m4v" },
      { type: "video", src: "/portfolio/motion-design/project003/motion002.m4v" }
    ]
  },

  {
    id: "project004",
    folder: "project004",
    title: "Rihanna Academy & Rihanna Beauty Studio – Motion Graphics Collection",
    description:
      "A five-video motion graphics collection featuring logo animations, infographic segments, and shape-based transitions for Rihanna Academy and Rihanna Beauty Studio.",
    cover: "/portfolio/motion-design/project004/cover.webp",
    media: [
      { type: "video", src: "/portfolio/motion-design/project004/motion001.m4v" },
      { type: "video", src: "/portfolio/motion-design/project004/motion002.m4v" },
      { type: "video", src: "/portfolio/motion-design/project004/motion003.m4v" }
    ]
  },

  {
    id: "project005",
    folder: "project005",
    title: "Lumava Studio – Mixed Motion Graphics & 3D Collection",
    description:
      "A curated collection covering 3D animation, abstract motion sequences, and custom animated calligraphy created in Lumava Studio.",
    cover: "/portfolio/motion-design/project005/cover.webp",
    media: [
      { type: "video", src: "/portfolio/motion-design/project005/motion001.m4v" },
      { type: "video", src: "/portfolio/motion-design/project005/motion002.m4v" },
      { type: "video", src: "/portfolio/motion-design/project005/motion003.m4v" },
      { type: "video", src: "/portfolio/motion-design/project005/motion004.m4v" },
      { type: "video", src: "/portfolio/motion-design/project005/motion005.m4v" }
    ]
  },

  {
    id: "project006",
    folder: "project006",
    title: "Rihanna Beauty Studio – Promotional Motion Graphics",
    description:
      "A three-video promotional series combining logo animation, rhythmic transitions, and match-cut motion techniques tailored for Rihanna Beauty Studio.",
    cover: "/portfolio/motion-design/project006/cover.webp",
    media: [
      { type: "video", src: "/portfolio/motion-design/project006/motion001.m4v" },
      { type: "video", src: "/portfolio/motion-design/project006/motion002.m4v" },
      { type: "video", src: "/portfolio/motion-design/project006/motion003.m4v" }
    ]
  }
];
