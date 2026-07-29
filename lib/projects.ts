export type Category =
  | "Sport Posters"
  | "Matchday Design"
  | "Social Rebrand"
  | "Player Graphics";

export interface Project {
  slug: string;
  title: string;
  category: Category;
  description: string;
  cover: string;
  heroImage?: string;
  images: string[];
  status?: string;
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    slug: "world-cup-poster",
    title: "World Cup Poster",
    category: "Sport Posters",
    description:
      "Bold typographic poster for a World Cup match night. High-contrast, editorial layout built around the tension of the fixture.",
    cover: "/work/final-design.jpg",
    heroImage: "/work/final-design.jpg",
    images: [
      "/work/final-design.jpg",
      "/work/afcon-qualified.jpg",
      "/work/doue-poster.jpg",
      "/work/vinicius-poster.jpg",
      "/work/yamal-poster.jpg",
    ],
    status: "Complete",
  },
  {
    slug: "matchday-poster",
    title: "Matchday Poster",
    category: "Matchday Design",
    description:
      "Cinematic matchday poster for big games. Dark background, team colour accents, condensed bold typography.",
    cover: "/work/knicks vs spurs.jpg",
    heroImage: "/work/knicks vs spurs.jpg",
    images: [
      "/work/final-design.jpg",
      "/work/barcelona vs r madrid.jpg",
      "/work/knicks vs spurs.jpg",
      "/work/bar vs ath.jpg",
      "/work/mancity-vs-liverpool.jpg",
      "/work/chelsea vs barca.jpg",
      "/work/tpdl final.png",
      "/work/fa cup final.png",
      "/work/liv-vs-che-after.jpg",
    ],
    status: "In Progress",
  },
  {
    slug: "player-sports-posters",
    title: "Player Sports Posters",
    category: "Sport Posters",

    heroImage: "/work/pedro.jpg",
    description:
      "Premium matchday poster series for a Premier League club. Consistent visual language across home and away fixtures.",
    cover: "/work/CADE CUNNIGNHAM.jpg",
    images: [
      "/work/CADE CUNNIGNHAM.jpg",
      "/work/PEDRO.jpg",
      "/work/NAS.jpg",
      "/work/accuf.jpg",
      "/work/edwards.jpg",
      "/work/lobcity.jpg",
      "/work/yamal barca.jpg",
      "/work/hazard.jpg",
    ],
    status: "Complete",
  },
  {
    slug: "photo-manipulation",
    title: "Photo Manipulation Designs",
    category: "Matchday Design",
    description:
      "Full matchday programme design for a National Non-League club. Typography-led layout, sponsor integration, player stats pages.",
    cover: "/work/che-vs-mci.jpg",
    heroImage: "/work/che-vs-mci.jpg",
    images: [
      "/work/che-vs-mci.jpg",
      "/work/chelsea-vs-arsenal-boxing.jpg",
      "/work/5 wins.jpg",
      "/work/kluivert.jpg",
      "/work/cherki.jpg",
      "/work/palmer-returns.jpg",
    ],
    status: "Complete",
  },

  {
    slug: "team-sheet-design",
    title: "Kit Swap design",
    category: "Player Graphics",
    description:
      "Reusable teamsheet template with club branding, lineup presentation, and opposition profiles. Adaptable for print and digital.",
    cover: "/work/gordon.jpg",
    heroImage: "/work/dumfries.jpg",
    images: [
      "/work/dumfries.jpg",
      "/work/gordon.jpg",
      "/work/salbiri.jpg",
      "/work/barco.jpg",
      "/work/dro fernandez.jpg",
    ],
    status: "Complete",
  },

  {
    slug: "football-club-brand-system",
    title: "Football Club Brand System",
    category: "Social Rebrand",
    description:
      "Social brand system for Chelsea football club mens division. Dark-mode first, with neon accents and a gaming-native visual language.",
    cover: "/work/REBRAND INTRO.jpg",
    heroImage: "/work/REBRAND INTRO.jpg",
    images: [
      "/work/MATCHDAY.jpg",
      "/work/STARTING XI.jpg",
      "/work/GOAL.jpg",
      "/work/HALF-TIME.jpg",
      "/work/FULL-TIME.jpg",
      "/work/POTM.jpg",
      "/work/SUBS.jpg",
    ],
    status: "Complete",
  },
  {
    slug: "player-cv-nnl",
    title: "NNL Player CV",
    category: "Player Graphics",
    description:
      "Professional player CV for National Non-League athletes. Stats-forward layout, scouting-ready format, built for agent submissions.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
    status: "In Progress",
    hidden: true,
  },
  {
    slug: "matchday-player-graphic",
    title: "Player Spotlight Graphic",
    category: "Player Graphics",
    description:
      "Social-first matchday player spotlight graphics. Dynamic cutout photography treatment, key stats, and club branding integrated.",
    cover: "/work/yamal-poster.jpg",
    heroImage: "/work/yamal-poster.jpg",
    images: [
      "/work/doue-poster.jpg",
      "/work/vinicius-poster.jpg",
      "/work/yamal-poster.jpg",
    ],
    status: "In Progress",
  },
  {
    slug: "non-professional-player-graphics",
    title: "Non-professional player Graphics",
    category: "Player Graphics",
    description:
      "Professional Graphics for Non-Professional athletes(Academy players). Trial Graphics, New Club signings, built for athletes .",
    cover: "/work/MBUSO POSTER.jpg",
    images: [
      "/work/MBUSO POSTER.jpg",
      "/work/lukas berg.jpg",
      "/work/malanga.jpg",
      "/work/biko1.jpg",
      "/work/EVAN.jpg",
      "/placeholder/detail.jpg",
    ],
    status: "In Progress",
  },
];

export const categories: Category[] = [
  "Sport Posters",
  "Matchday Design",
  "Social Rebrand",
  "Player Graphics",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
