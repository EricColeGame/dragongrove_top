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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dragongrove.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://schellgames.com/portfolio/dragon-grove",
  heroVideoId: "xSs4guNANkU", // Dragon Grove - Announcement Trailer (Schell Games)
  social: {
    youtube: "https://www.youtube.com/@SchellGames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
