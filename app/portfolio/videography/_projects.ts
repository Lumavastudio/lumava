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
    title: "Rihanna Academy – Promotional Videography",
    description:
      "A dynamic promotional video series created for Rihanna Academy, a professional permanent makeup academy. The project highlights meticulous attention to detail, featuring close-up shots of tools, step-by-step processes, and artistic compositions combining fast and slow-paced sequences. Strategic rhythm and music-driven editing were employed to enhance viewer engagement and evoke a strong emotional impact. Additionally, the project included designing the brand’s logo and logotype, seamlessly integrated into the visuals to reinforce brand identity. This work demonstrates both technical precision in videography and a keen sense of creative direction for brand storytelling.",
    cover: "/portfolio/videography/project001/cover.webp",
    media: [
      { type: "video", src: "/portfolio/videography/project001/v01.m4v" },
      { type: "video", src: "/portfolio/videography/project001/v02.m4v" },
      { type: "video", src: "/portfolio/videography/project001/v03.m4v" },
      { type: "video", src: "/portfolio/videography/project001/v04.m4v" }
    ]
  },
  {
    id: "project002",
    folder: "project002",
    title: "Personal Promotional Videos – Artists & Professionals",
    description:
      "A series of personalized promotional videos created for various artists, musicians, and business owners. Each video highlights the unique personality, artistic identity, and professional essence of the subject, using carefully crafted frames, cinematic composition, and dynamic pacing. The work emphasizes storytelling through visual aesthetics and emotional connection, ensuring each individual’s character and brand are showcased with impact and authenticity.",
    cover: "/portfolio/videography/project002/cover.webp",
    media: [
      { type: "video", src: "/portfolio/videography/project002/video001new.m4v" },
      { type: "image", src: "/portfolio/videography/project002/video002.webp" },
      { type: "video", src: "/portfolio/videography/project002/video003.m4v" },
      { type: "image", src: "/portfolio/videography/project002/video004.webp" },
      { type: "video", src: "/portfolio/videography/project002/video005.m4v" },
      { type: "image", src: "/portfolio/videography/project002/video006.webp" },
      { type: "video", src: "/portfolio/videography/project002/video007.m4v" },
      { type: "image", src: "/portfolio/videography/project002/video008.webp" }
    ]
  },
  {
    id: "project003",
    folder: "project003",
    title: "Rihanna Beauty Studio – Promotional Video Campaign",
    description:
      "A high-impact promotional video campaign created for Rihanna Beauty Studio, blending “before & after” sequences with detailed process shots. The project emphasizes rapid editing, precise rhythm, and music-driven pacing to captivate viewers and maximize scroll-stopping potential. Each clip showcases intricate detail shots, highlighting professional techniques and artistry. Designed to engage and convert, these videos have collectively garnered tens of thousands of views, demonstrating both technical mastery in videography and a strategic approach to brand-driven visual storytelling.",
    cover: "/portfolio/videography/project003/cover.webp",
    media: [
      { type: "video", src: "/portfolio/videography/project003/video001.m4v" },
      { type: "video", src: "/portfolio/videography/project003/video002.m4v" },
      { type: "video", src: "/portfolio/videography/project003/video003.m4v" },
      { type: "video", src: "/portfolio/videography/project003/video004.m4v" },
      { type: "video", src: "/portfolio/videography/project003/video005.m4v" },
      { type: "video", src: "/portfolio/videography/project003/video006.m4v" },
      { type: "video", src: "/portfolio/videography/project003/video007.m4v" }
    ]
  },
  {
    id: "project004",
    folder: "project004",
    title: "Rihanna Beauty Studio – Informative & Motivational Video Series",
    description:
      "A cinematic and engaging video series created for Rihanna Beauty Studio, designed to inform and inspire viewers. Combining carefully crafted lighting, spatial composition, and rhythmic motion, each video guides the audience through a visually dynamic journey. Strategic visual and audio accents maintain attention throughout, while subtle motion graphics enhance storytelling and reinforce brand identity. These videos highlight both creative cinematography and a refined understanding of audience engagement, demonstrating expertise in producing compelling brand-focused content.",
    cover: "/portfolio/videography/project004/cover.webp",
    media: [
      { type: "video", src: "/portfolio/videography/project004/video001.m4v" },
      { type: "image", src: "/portfolio/videography/project004/video002.webp" },
      { type: "video", src: "/portfolio/videography/project004/video003.m4v" },
      { type: "image", src: "/portfolio/videography/project004/video004.webp" },
      { type: "video", src: "/portfolio/videography/project004/video005.m4v" },
      { type: "image", src: "/portfolio/videography/project004/video006.webp" }
    ]
  },
  {
    id: "project005",
    folder: "project005",
    title: "Rihanna Academy – Influencer Promotional Videos",
    description:
      "A series of promotional videos for Rihanna Academy featuring influencers undergoing permanent makeup procedures to authentically showcase the brand. Beyond capturing visually appealing compositions, dynamic editing, and harmonious music integration, these videos emphasize the genuine connection between clients and specialists, fostering trust and creating an intimate, engaging atmosphere for the audience. Behind the scenes, careful planning ensured a comfortable and collaborative environment for influencers, highlighting both production management skills and the ability to craft compelling, relationship-driven brand content. These videos achieved significant reach, with multiple videos surpassing 600,000 views, demonstrating high audience engagement and impact.",
    cover: "/portfolio/videography/project005/cover.webp",
    media: [
      { type: "video", src: "/portfolio/videography/project005/video001.m4v" },
      { type: "video", src: "/portfolio/videography/project005/video002.m4v" },
      { type: "video", src: "/portfolio/videography/project005/video003.m4v" },
      { type: "video", src: "/portfolio/videography/project005/video004.m4v" }
    ]
  },
  {
    id: "project006",
    folder: "project006",
    title: "Rihanna Academy – Creative & Humorous Promotional Videos",
    description:
      "A collection of humorous and indirect promotional videos for Rihanna Academy, designed to engage audiences in a playful yet professional manner. Strategic lighting, set design, camera movements, and angles were carefully orchestrated to enhance storytelling, while precise synchronization with music and sound effects amplified viewer engagement. Each video achieved significant reach, with over 50,000 views per piece, demonstrating both creative vision and the ability to produce high-impact, brand-focused content that resonates with a wide audience.",
    cover: "/portfolio/videography/project006/cover.webp",
    media: [
      { type: "video", src: "/portfolio/videography/project006/video001.m4v" },
      { type: "video", src: "/portfolio/videography/project006/video002.m4v" },
      { type: "video", src: "/portfolio/videography/project006/video003.m4v" }
    ]
  }
];
