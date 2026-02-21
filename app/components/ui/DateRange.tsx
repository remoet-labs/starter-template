import { formatDate } from "@/lib/dates";

interface DateRangeProps {
  startDate: string | null;
  endDate: string | null;
  isCurrent?: boolean;
}

export function DateRange({ startDate, endDate, isCurrent }: DateRangeProps) {
  if (!startDate) return null;

  return (
    <span className="text-sm text-muted">
      {formatDate(startDate)} &mdash;{" "}
      {isCurrent ? "Present" : endDate ? formatDate(endDate) : "Present"}
    </span>
  );
}
