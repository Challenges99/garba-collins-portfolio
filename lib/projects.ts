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
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "champions-league-poster",
    title: "Champions League Poster",
    category: "Sport Posters",
    description:
      "Bold typographic poster for a UEFA Champions League match night. High-contrast, editorial layout built around the tension of the fixture.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
  },
  {
    slug: "fa-cup-semifinal-poster",
    title: "FA Cup Semi-Final",
    category: "Sport Posters",
    description:
      "Cinematic matchday poster for an FA Cup semi-final. Dark background, team colour accents, condensed bold typography.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
  },
  {
    slug: "premier-league-matchday-poster",
    title: "Premier League Matchday",
    category: "Sport Posters",
    description:
      "Premium matchday poster series for a Premier League club. Consistent visual language across home and away fixtures.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
  },
  {
    slug: "matchday-programme-nnl",
    title: "NNL Matchday Programme",
    category: "Matchday Design",
    description:
      "Full matchday programme design for a National Non-League club. Typography-led layout, sponsor integration, player stats pages.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
  },

  {
    slug: "team-sheet-design",
    title: "Teamsheet Design System",
    category: "Matchday Design",
    description:
      "Reusable teamsheet template with club branding, lineup presentation, and opposition profiles. Adaptable for print and digital.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
  },

  {
    slug: "esports-club-brand",
    title: "Esports Club Brand System",
    category: "Social Rebrand",
    description:
      "Social brand system for a football club's esports division. Dark-mode first, with neon accents and a gaming-native visual language.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
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
  },
  {
    slug: "matchday-player-graphic",
    title: "Player Spotlight Graphic",
    category: "Player Graphics",
    description:
      "Social-first matchday player spotlight graphics. Dynamic cutout photography treatment, key stats, and club branding integrated.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
  },
  {
    slug: "player-of-the-month",
    title: "Player of the Month",
    category: "Player Graphics",
    description:
      "Monthly award graphic series celebrating standout performers. Designed for Instagram feed and story format at 1:1 and 9:16.",
    cover: "/placeholder/cover.jpg",
    images: [
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
      "/placeholder/detail.jpg",
    ],
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
