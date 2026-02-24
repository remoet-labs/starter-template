import type { UserProfile, DataField } from "./types";

type SocialUrlKey = "githubUrl" | "linkedinUrl" | "twitterUrl" | "youtubeUrl" | "facebookUrl" | "url";

export interface SocialLink {
  key: SocialUrlKey;
  label: string;
  url: string;
}

const defs: { key: SocialUrlKey; label: string }[] = [
  { key: "githubUrl", label: "GitHub" },
  { key: "linkedinUrl", label: "LinkedIn" },
  { key: "twitterUrl", label: "Twitter" },
  { key: "youtubeUrl", label: "YouTube" },
  { key: "facebookUrl", label: "Facebook" },
  { key: "url", label: "Website" },
];

export function getSocialLinks(profile: UserProfile): SocialLink[] {
  const links: SocialLink[] = [];

  for (const { key, label } of defs) {
    const field: DataField = profile[key];
    if (field.value) {
      links.push({ key, label, url: field.value });
    }
  }

  return links;
}
