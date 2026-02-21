import { UserJob } from "@/lib/types";
import { Section } from "./ui/Section";
import { ShowMore } from "./ui/ShowMore";
import { DateRange } from "./ui/DateRange";
import { TechTag } from "./ui/TechTag";
import { Badge } from "./ui/Badge";
import { ExternalLink } from "./ui/ExternalLink";

interface ExperienceProps {
  jobs: UserJob[];
}

function JobItem({ job }: { job: UserJob }) {
  return (
    <div className="border-l-2 border-border pl-6 relative">
      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-border" />

      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <h3 className="font-semibold text-lg">{job.title}</h3>
        <div className="flex items-center gap-2">
          {job.isCurrent && <Badge label="Current" />}
          {job.isRemote && <Badge label="Remote" />}
        </div>
      </div>

      <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        {job.companyUrl ? (
          <ExternalLink href={job.companyUrl}>
            {job.companyName}
          </ExternalLink>
        ) : (
          <span className="text-sm text-muted">{job.companyName}</span>
        )}
        <span className="hidden sm:inline text-muted">·</span>
        <DateRange
          startDate={job.startDate}
          endDate={job.endDate}
          isCurrent={job.isCurrent}
        />
      </div>

      {job.description && (
        <p className="mt-3 text-sm text-muted leading-relaxed">
          {job.description}
        </p>
      )}

      {job.technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {job.technologies.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Experience({ jobs }: ExperienceProps) {
  if (!jobs || jobs.length === 0) return null;

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        <ShowMore limit={3}>
          {jobs.map((job, i) => (
            <JobItem key={i} job={job} />
          ))}
        </ShowMore>
      </div>
    </Section>
  );
}
