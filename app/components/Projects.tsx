import { UserProject } from "@/lib/types";
import { Section } from "./ui/Section";
import { ShowMore } from "./ui/ShowMore";
import { TechTag } from "./ui/TechTag";
import { Badge } from "./ui/Badge";
import { ExternalLink } from "./ui/ExternalLink";

interface ProjectsProps {
  projects: UserProject[];
}

function ProjectCard({ project }: { project: UserProject }) {
  return (
    <div className="border border-border rounded-lg p-5 hover:bg-card transition-colors">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold">{project.title}</h3>
        <div className="flex items-center gap-1.5 shrink-0">
          {project.isOpenSource && <Badge label="Open Source" />}
        </div>
      </div>

      {project.role && (
        <p className="text-sm text-muted mt-1">{project.role}</p>
      )}

      <p className="mt-2 text-sm text-muted leading-relaxed">
        {project.shortDescription}
      </p>

      {project.technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-4">
        {project.repoUrl && (
          <ExternalLink href={project.repoUrl}>Code</ExternalLink>
        )}
        {project.demoUrl && (
          <ExternalLink href={project.demoUrl}>Demo</ExternalLink>
        )}
      </div>
    </div>
  );
}

export function Projects({ projects }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-6">
        <ShowMore limit={3}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </ShowMore>
      </div>
    </Section>
  );
}
