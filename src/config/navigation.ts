export type NavItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "updates", path: "/updates", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
