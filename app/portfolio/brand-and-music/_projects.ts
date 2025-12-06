export interface BMProject {
  id: string;
  folder: string;
  title: string;
  description: string;
  cover: string; // کاور اصلی پروژه
  media: { type: "image" | "video"; src: string }[];
}

export const brandMusicProjects: BMProject[] = [
  {
    id: "project001",
    folder: "project001",
    title: "Royal Flower – Event Videography & Photography",
    cover: "/portfolio/brand-and-music/project001/cover.webp",
    description:
      "A heartfelt and intimate event captured for Royal Flower, showcasing the warmth, creativity, and feminine charm of the gathering. The video highlights the handcrafted floral crowns, joyful interactions, and serene meditative moments accompanied by live handpan music. Careful attention to cinematography and photography ensures that both the atmosphere and the personalities of the participants are vividly conveyed. Thoughtful music selection and pacing enhance the immersive experience, resulting in a highly engaging visual story that resonated strongly with viewers, garnered impressive reach, and was widely shared by attendees.",
    media: [
      { type: "video", src: "/portfolio/brand-and-music/project001/media001.m4v" },
      { type: "image", src: "/portfolio/brand-and-music/project001/media002.webp" },
      { type: "image", src: "/portfolio/brand-and-music/project001/media003.webp" },
      { type: "image", src: "/portfolio/brand-and-music/project001/media004.webp" },
      { type: "image", src: "/portfolio/brand-and-music/project001/media005.webp" }
    ]
  },
  {
    id: "project002",
    folder: "project002",
    title: "Rihanna Academy – Brand Overview & Promotional Videography",
    cover: "/portfolio/brand-and-music/project002/cover.webp",
    description:
      "A comprehensive collection of promotional, educational, character-driven, and event videography created for Rihanna Academy, providing an extensive visual representation of the brand. Produced over several years by Lumava Studio, these videos reflect meticulous planning, creative direction, and strategic brand-building efforts. Acting as co-founder, Lumava Studio played a pivotal role in shaping the brand identity, executing marketing campaigns, and elevating Rihanna Academy’s presence, successfully growing its social media following to over 130,000 engaged followers. The work demonstrates a harmonious blend of storytelling, visual aesthetics, and audience engagement, highlighting both the brand’s personality and the studio’s expertise in content creation.",
    media: [
      { type: "video", src: "/portfolio/brand-and-music/project002/media001.m4v" },
      { type: "video", src: "/portfolio/brand-and-music/project002/media002.m4v" },
      { type: "video", src: "/portfolio/brand-and-music/project002/media003.m4v" },
      { type: "video", src: "/portfolio/brand-and-music/project002/media004.m4v" },
      { type: "video", src: "/portfolio/brand-and-music/project002/media005.m4v" }
    ]
  },
  {
    id: "project003",
    folder: "project003",
    title: "Collaborative Choral & Music Projects – Lumava Studio",
    cover: "/portfolio/brand-and-music/project003/cover.webp",
    description:
      "A series of collaborative projects with choral groups, including CoralBand and Diyar Choir, where Lumava Studio contributed as a musician, vocalist, and creative director. Responsibilities encompassed music video production, sound recording, direction, and post-production. Key works include Ave Maria by Italian composer Giulio Caccini and the classic Iranian piece Khoshcheh Chin by Rouhollah Khaleghi. These interdisciplinary projects showcase Lumava Studio’s versatility and artistic depth, demonstrating the ability to produce culturally rich, emotionally resonant, and professionally polished audiovisual works.",
    media: [
      { type: "video", src: "/portfolio/brand-and-music/project003/media001.m4v" },
      { type: "image", src: "/portfolio/brand-and-music/project003/media002.webp" },
      { type: "video", src: "/portfolio/brand-and-music/project003/media003.m4v" },
      { type: "image", src: "/portfolio/brand-and-music/project003/media004.webp" }
    ]
  },
];
