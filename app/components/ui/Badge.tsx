interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-badge-bg text-badge-text">
      {label}
    </span>
  );
}
