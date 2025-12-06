export type MediaItem = {
  type: "image" | "video";
  src: string; // relative to /public, e.g. "/portfolio/photography/project-rose/img1.jpg"
  orientation?: "vertical" | "horizontal"; // helps auto-layout; optional but recommended for images
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  client?: string;
  year?: string | number;
  tools?: string[]; // e.g. ["RED", "Premiere", "After Effects"]
  cover: string; // path to cover image
  media: MediaItem[]; // ordered media for the project
  category: "photography" | "videography" | "motion-design" | "brand-and-music";
};

export const PORTFOLIO: Project[] = [
  {
    slug: "project-rose",
    title: "Project Rose",
    description: "A cinematic portrait series blending analog lighting and modern color grading.",
    client: "Rose Studio",
    year: 2024,
    tools: ["Canon", "Lightroom"],
    cover: "/portfolio/photography/project-rose/cover.jpg",
    category: "photography",
    media: [
      { type: "image", src: "/portfolio/photography/project-rose/img1.jpg", orientation: "vertical" },
      { type: "image", src: "/portfolio/photography/project-rose/img2.jpg", orientation: "horizontal" },
      { type: "video", src: "/portfolio/photography/project-rose/reel.mp4" },
    ],
  },

  {
    slug: "project-wave",
    title: "Project Wave",
    description: "Short-form cinematic pieces for a surf brand — fast cuts and moody tones.",
    client: "Wave Co",
    year: 2023,
    tools: ["RED", "Premiere"],
    cover: "/portfolio/videography/project-wave/cover.jpg",
    category: "videography",
    media: [
      { type: "video", src: "/portfolio/videography/project-wave/clip1.mp4" },
      { type: "image", src: "/portfolio/videography/project-wave/thumb.jpg", orientation: "horizontal" },
    ],
  },

  {
    slug: "project-flare",
    title: "Project Flare",
    description: "Motion-design exploration with fluid transitions and 3D elements.",
    client: "Flare",
    year: 2025,
    tools: ["After Effects", "Cinema 4D"],
    cover: "/portfolio/motion-design/project-flare/cover.jpg",
    category: "motion-design",
    media: [
      { type: "image", src: "/portfolio/motion-design/project-flare/img1.jpg", orientation: "horizontal" },
      { type: "image", src: "/portfolio/motion-design/project-flare/img2.jpg", orientation: "vertical" },
    ],
  },

  {
    slug: "project-note",
    title: "Project Note",
    description: "Brand & music identity for a boutique label — visual and sonic alignment.",
    client: "Note Records",
    year: 2024,
    tools: ["Ableton", "Illustrator"],
    cover: "/portfolio/brand-and-music/project-note/cover.jpg",
    category: "brand-and-music",
    media: [
      { type: "image", src: "/portfolio/brand-and-music/project-note/img1.jpg", orientation: "horizontal" },
      { type: "video", src: "/portfolio/brand-and-music/project-note/reel.mp4" },
    ],
  },
];
