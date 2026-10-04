export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Dragongrove Wiki",
  shortName: "Dragongrove",
  logoText: "D",
  tagline: "Dragon Guides, Gameplay Tips & Updates",
  description: "Dragongrove is a fantasy adventure game focused on exploring magical environments, discovering dragons, and building connections with mythical creatures.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dragongrove.top",
  supportEmail: "support@dragongrove.top",
  gameUrl: "https://www.meta.com/en-gb/experiences/dragon-grove/8994417270670799",
  heroVideoId: "xSs4guNANkU", // Dragon Grove - Announcement Trailer (Schell Games)
  social: {
    discord: "https://discord.gg/schellgames",
    youtube: "https://www.youtube.com/@SchellGames",
    twitter: "https://x.com/schellgames",
    tiktok: "https://www.tiktok.com/@schellgames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
