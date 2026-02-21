import type { UserProfile } from "./types";

export interface SocialLinkDef {
  key: keyof UserProfile;
  label: string;
}

export const socialLinkDefs: SocialLinkDef[] = [
  { key: "githubUrl", label: "GitHub" },
  { key: "linkedinUrl", label: "LinkedIn" },
  { key: "twitterUrl", label: "Twitter" },
  { key: "youtubeUrl", label: "YouTube" },
  { key: "facebookUrl", label: "Facebook" },
  { key: "url", label: "Website" },
];

export function getPublicSocialLinks(
  profile: UserProfile
): { label: string; url: string }[] {
  const links: { label: string; url: string }[] = [];

  for (const { key, label } of socialLinkDefs) {
    const field = profile[key];
    if (
      typeof field === "object" &&
      field !== null &&
      "value" in field &&
      field.value &&
      field.isPublic
    ) {
      links.push({ label, url: field.value });
    }
  }

  return links;
}
