function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function formatDateRange(
  start: string | null,
  end: string | null,
  isCurrent?: boolean
): string {
  if (!start) return "";
  const from = formatDate(start);
  const to = isCurrent ? "Present" : end ? formatDate(end) : "Present";
  return `${from} - ${to}`;
}
