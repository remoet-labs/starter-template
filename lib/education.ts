const STUDY_LEVEL_LABELS: Record<string, string> = {
  HIGH_SCHOOL: "High School",
  ASSOCIATE: "Associate Degree",
  BACHELOR: "Bachelor's Degree",
  MASTER: "Master's Degree",
  DOCTORATE: "Doctorate",
  BOOTCAMP: "Bootcamp",
  OTHER: "Other",
};

export function formatStudyLevel(level: string | null): string | null {
  if (!level) return null;
  return STUDY_LEVEL_LABELS[level] || level;
}
