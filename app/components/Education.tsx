import { UserEducation } from "@/lib/types";
import { Section } from "./ui/Section";
import { ShowMore } from "./ui/ShowMore";
import { DateRange } from "./ui/DateRange";
import { Badge } from "./ui/Badge";
import { ExternalLink } from "./ui/ExternalLink";

interface EducationProps {
  education: UserEducation[];
}

const STUDY_LEVEL_LABELS: Record<string, string> = {
  HIGH_SCHOOL: "High School",
  ASSOCIATE: "Associate Degree",
  BACHELOR: "Bachelor's Degree",
  MASTER: "Master's Degree",
  DOCTORATE: "Doctorate",
  BOOTCAMP: "Bootcamp",
  OTHER: "Other",
};

function EducationItem({ edu }: { edu: UserEducation }) {
  return (
    <div className="border-l-2 border-border pl-6 relative">
      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-border" />

      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <h3 className="font-semibold text-lg">
          {edu.institutionUrl ? (
            <ExternalLink href={edu.institutionUrl}>
              {edu.institution}
            </ExternalLink>
          ) : (
            edu.institution
          )}
        </h3>
        {edu.isCurrent && <Badge label="Current" />}
      </div>

      <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        {(edu.studyLevel || edu.fieldOfStudy) && (
          <span className="text-sm text-muted">
            {[
              edu.studyLevel
                ? STUDY_LEVEL_LABELS[edu.studyLevel] || edu.studyLevel
                : null,
              edu.fieldOfStudy,
            ]
              .filter(Boolean)
              .join(" in ")}
          </span>
        )}
        {(edu.studyLevel || edu.fieldOfStudy) &&
          edu.startDate && (
            <span className="hidden sm:inline text-muted">·</span>
          )}
        <DateRange
          startDate={edu.startDate}
          endDate={edu.endDate}
          isCurrent={edu.isCurrent}
        />
      </div>

      {edu.description && (
        <p className="mt-3 text-sm text-muted leading-relaxed">
          {edu.description}
        </p>
      )}
    </div>
  );
}

export function Education({ education }: EducationProps) {
  if (!education || education.length === 0) return null;

  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        <ShowMore limit={3}>
          {education.map((edu, i) => (
            <EducationItem key={i} edu={edu} />
          ))}
        </ShowMore>
      </div>
    </Section>
  );
}
