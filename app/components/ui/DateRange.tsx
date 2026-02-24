import { formatDateRange as format } from "@/lib/dates";

interface DateRangeProps {
  startDate: string | null;
  endDate: string | null;
  isCurrent?: boolean;
}

export function DateRange({ startDate, endDate, isCurrent }: DateRangeProps) {
  const range = format(startDate, endDate, isCurrent);
  if (!range) return null;

  return <span className="text-sm text-muted">{range}</span>;
}
