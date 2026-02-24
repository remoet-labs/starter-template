import type { PortfolioData } from "./types";
import { getSocialLinks } from "./social";

export function buildPersonJsonLd(
  data: PortfolioData
): Record<string, unknown> {
  const name = data.profile.name?.value || "Developer";
  const summary = data.profile.summary?.value;
  const avatarUrl = data.profile.avatarUrl?.value;
  const siteUrl = data.profile.url?.value;
  const location = data.profile.location?.value;
  const socialLinks = getSocialLinks(data.profile);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    ...(summary && { description: summary }),
    ...(avatarUrl && { image: avatarUrl }),
    ...(siteUrl && { url: siteUrl }),
    ...(location && {
      address: {
        "@type": "PostalAddress",
        addressLocality: location,
      },
    }),
  };

  if (socialLinks.length > 0) {
    jsonLd.sameAs = socialLinks.map((l) => l.url);
  }

  const jobs = data.jobs ?? [];

  if (jobs.length > 0) {
    jsonLd.hasOccupation = jobs.map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: {
        "@type": "Place",
        name: job.isRemote ? "Remote" : "On-site",
      },
      ...(job.description && { description: job.description }),
      ...(job.technologies.length > 0 && {
        skills: job.technologies.join(", "),
      }),
    }));

    const currentJob = jobs.find((j) => j.isCurrent);
    if (currentJob) {
      jsonLd.worksFor = {
        "@type": "Organization",
        name: currentJob.companyName,
        ...(currentJob.companyUrl && { url: currentJob.companyUrl }),
      };
    }
  }

  const allTechnologies = new Set<string>();
  jobs.forEach((j) => j.technologies.forEach((t) => allTechnologies.add(t)));
  (data.projects ?? []).forEach((p) => p.technologies.forEach((t) => allTechnologies.add(t)));
  if (allTechnologies.size > 0) {
    jsonLd.knowsAbout = Array.from(allTechnologies);
  }

  return jsonLd;
}

export function safeJsonLdStringify(jsonLd: Record<string, unknown>): string {
  return JSON.stringify(jsonLd)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
