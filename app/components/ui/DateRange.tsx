interface DateRangeProps {
  startDate: string | null;
  endDate: string | null;
  isCurrent?: boolean;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
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
