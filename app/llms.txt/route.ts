import { fetchPortfolioData } from "@/lib/api";
import {
  PortfolioData,
  UserJob,
  UserProject,
  UserEducation,
} from "@/lib/types";
import { formatDateRange } from "@/lib/dates";
import { formatStudyLevel } from "@/lib/education";
import { getSocialLinks } from "@/lib/social";

function buildProfileSection(data: PortfolioData): string {
  const name = data.profile.name?.value || "Developer";
  const lines: string[] = [`# ${name}`];

  if (data.profile.summary?.value) {
    lines.push("", `> ${data.profile.summary.value}`);
  }

  const details: string[] = [];
  if (data.profile.location?.value) details.push(`Location: ${data.profile.location.value}`);
  if (data.profile.url?.value) details.push(`Website: ${data.profile.url.value}`);

  if (details.length > 0) {
    lines.push("", details.join("  \n"));
  }

  return lines.join("\n");
}

function buildExperienceSection(jobs: UserJob[]): string | null {
  if (jobs.length === 0) return null;

  const lines = ["## Experience", ""];
  for (const job of jobs) {
    const range = formatDateRange(job.startDate, job.endDate, job.isCurrent);
    const remote = job.isRemote ? " (Remote)" : "";
    let entry = `- **${job.title} at ${job.companyName}**${remote}`;
    if (range) entry += ` (${range})`;
    if (job.description) entry += `: ${job.description}`;
    if (job.technologies?.length > 0)
      entry += `. Technologies: ${job.technologies.join(", ")}`;
    lines.push(entry);
  }
  return lines.join("\n");
}

function buildProjectsSection(projects: UserProject[]): string | null {
  if (!projects || projects.length === 0) return null;

  const lines = ["## Projects", ""];
  for (const p of projects) {
    const link = p.demoUrl || p.repoUrl;
    const title = link ? `[${p.title}](${link})` : p.title;
    let entry = `- **${title}**`;
    if (p.shortDescription) entry += `: ${p.shortDescription}`;
    if (p.role) entry += `. Role: ${p.role}`;
    if (p.technologies?.length > 0)
      entry += `. Technologies: ${p.technologies.join(", ")}`;
    if (p.isOpenSource) entry += ". Open source";
    if (p.repoUrl && p.demoUrl) entry += `. Repository: ${p.repoUrl}`;
    lines.push(entry);
  }
  return lines.join("\n");
}

function buildEducationSection(education: UserEducation[]): string | null {
  if (!education || education.length === 0) return null;

  const lines = ["## Education", ""];
  for (const e of education) {
    const range = formatDateRange(e.startDate, e.endDate, e.isCurrent);
    const level = formatStudyLevel(e.studyLevel);
    const field = e.fieldOfStudy ? `in ${e.fieldOfStudy} ` : "";
    let entry = `- **${level ? `${level} ` : ""}${field}at ${e.institution}**`;
    if (range) entry += ` (${range})`;
    if (e.description) entry += `: ${e.description}`;
    lines.push(entry);
  }
  return lines.join("\n");
}

function buildLinksSection(profile: PortfolioData["profile"]): string | null {
  const links = getSocialLinks(profile);
  if (links.length === 0) return null;

  const lines = ["## Links", ""];
  for (const link of links) {
    lines.push(`- [${link.label}](${link.url})`);
  }
  return lines.join("\n");
}

function generateLlmsTxt(data: PortfolioData): string {
  const jobs = data.jobs ?? [];
  const sections = [
    buildProfileSection(data),
    buildExperienceSection(jobs),
    buildProjectsSection(data.projects),
    buildEducationSection(data.education),
    buildLinksSection(data.profile),
  ].filter(Boolean);

  return sections.join("\n\n") + "\n";
}

export async function GET() {
  const data = await fetchPortfolioData();

  if (!data) {
    const body = [
      "# Portfolio",
      "",
      "> A developer portfolio powered by remoet.dev",
      "",
      "This site has not been configured yet.",
    ].join("\n");

    return new Response(body, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const body = generateLlmsTxt(data);

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
