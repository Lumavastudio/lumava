// app/portfolio/photography/_projects.ts

export type MediaType = "image" | "video";

export interface MediaItem {
  type: MediaType;
  src: string; // مسیر از ریشه public
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
    title: "Bela – Portrait Photography",
    description: "A professional studio portrait series highlighting the elegance, personality, and subtle femininity of the model Bela. Carefully crafted lighting, dynamic angles, and expressive poses demonstrate a strong command of studio photography and a keen eye for detail, showcasing both technical expertise and artistic vision.",
    cover: "/portfolio/photography/project001/photo01.webp",
    media: [
      { type: "image", src: "/portfolio/photography/project001/photo01.webp" },
      { type: "image", src: "/portfolio/photography/project001/photo02.webp" },
      { type: "image", src: "/portfolio/photography/project001/photo03.webp" },
      { type: "image", src: "/portfolio/photography/project001/photo04.webp" },
      { type: "image", src: "/portfolio/photography/project001/photo05.webp" },
      { type: "image", src: "/portfolio/photography/project001/photo06.webp" },
      { type: "image", src: "/portfolio/photography/project001/photo07.webp" },
      { type: "image", src: "/portfolio/photography/project001/photo08.webp" },
      { type: "image", src: "/portfolio/photography/project001/photo09.webp" },
      { type: "video", src: "/portfolio/photography/project001/photo10.m4v" }
    ]
  },
  {
    id: "project002",
    folder: "project002",
    title: "Marina – Musician Portrait Series",
    description: "A natural-light portrait project featuring Marina, a handpan musician and artisan. The session blends environmental portraiture with authentic artistic expression, capturing both the personal essence of the subject and the musical storytelling.",
    cover: "/portfolio/photography/project002/photo01.webp",
    media: [
      { type: "image", src: "/portfolio/photography/project002/photo01.webp" },
      { type: "image", src: "/portfolio/photography/project002/photo02.webp" },
      { type: "image", src: "/portfolio/photography/project002/photo03.webp" },
      { type: "image", src: "/portfolio/photography/project002/photo04.webp" },
      { type: "image", src: "/portfolio/photography/project002/photo05.webp" },
      { type: "image", src: "/portfolio/photography/project002/photo06.webp" },
      { type: "image", src: "/portfolio/photography/project002/photo07.webp" },
      { type: "image", src: "/portfolio/photography/project002/photo08.webp" },
      { type: "video", src: "/portfolio/photography/project002/photo09.m4v" },
    ],
  },
  {
    id: "project003",
    folder: "project003",
    title: "Ira – Studio Fine-Art Portrait Series",
    description: "A refined studio portrait project featuring Ira, photographed through layers of delicate tulle fabric to create softness, depth, and emotional texture. The session emphasizes fine details, controlled lighting, and artistic composition.",
    cover: "/portfolio/photography/project003/photo01.webp",
    media: [
      { type: "image", src: "/portfolio/photography/project003/photo01.webp" },
      { type: "image", src: "/portfolio/photography/project003/photo02.webp" },
      { type: "image", src: "/portfolio/photography/project003/photo03.webp" },
      { type: "image", src: "/portfolio/photography/project003/photo04.webp" },
      { type: "image", src: "/portfolio/photography/project003/photo05.webp" },
      { type: "video", src: "/portfolio/photography/project003/photo06.m4v" },
    ],
  },
  {
    id: "project004",
    folder: "project004",
    title: "Reyhan – Travel Portrait Collection (Zurich, Paris, Bali)",
    description: "A global portrait series capturing Reyhan across Zurich, Paris, and Bali. The project combines travel, culture, and personal storytelling through photography, balancing environmental context and subject focus.",
    cover: "/portfolio/photography/project004/photo01.webp",
    media: [
      { type: "image", src: "/portfolio/photography/project004/photo01.webp" },
      { type: "image", src: "/portfolio/photography/project004/photo02.webp" },
      { type: "image", src: "/portfolio/photography/project004/photo03.webp" },
      { type: "video", src: "/portfolio/photography/project004/photo04.m4v" },
      { type: "image", src: "/portfolio/photography/project004/photo05.webp" },
      { type: "image", src: "/portfolio/photography/project004/photo06.webp" },
      { type: "image", src: "/portfolio/photography/project004/photo07.webp" },
      { type: "image", src: "/portfolio/photography/project004/photo08.webp" },
      { type: "image", src: "/portfolio/photography/project004/photo09.webp" },
      { type: "image", src: "/portfolio/photography/project004/photo10.webp" },
      { type: "video", src: "/portfolio/photography/project004/photo11.m4v" },
    ],
  },
  {
    id: "project005",
    folder: "project005",
    title: "Fashion & Accessories – Editorial Lookbook Series",
    description: "An editorial photography project showcasing handcrafted accessories and fashion details. Each frame emphasizes craftsmanship, texture, and styling through dynamic compositions and lighting.",
    cover: "/portfolio/photography/project005/photo01.webp",
    media: [
      { type: "image", src: "/portfolio/photography/project005/photo01.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo02.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo03.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo04.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo05.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo06.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo07.webp" },
      { type: "video", src: "/portfolio/photography/project005/photo08.m4v" },
      { type: "image", src: "/portfolio/photography/project005/photo09.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo10.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo11.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo12.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo13.webp" },
      { type: "image", src: "/portfolio/photography/project005/photo14.webp" },
    ],
  },
  {
    id: "project006",
    folder: "project006",
    title: "Sepideh – Urban & Nature Portrait Series",
    description: "A dual-environment portrait project featuring the model Sepideh, blending urban textures and natural landscapes. The project combines expressive poses, environmental storytelling, and detailed composition to create a dynamic and visually compelling narrative.",
    cover: "/portfolio/photography/project006/photo01.webp",
    media: [
      { type: "image", src: "/portfolio/photography/project006/photo01.webp" },
      { type: "video", src: "/portfolio/photography/project006/photo02.m4v" },
      { type: "image", src: "/portfolio/photography/project006/photo03.webp" },
      { type: "image", src: "/portfolio/photography/project006/photo04.webp" },
      { type: "image", src: "/portfolio/photography/project006/photo05.webp" },
      { type: "image", src: "/portfolio/photography/project006/photo06.webp" },
      { type: "image", src: "/portfolio/photography/project006/photo07.webp" },
      { type: "image", src: "/portfolio/photography/project006/photo08.webp" },
    ],
  }
];
