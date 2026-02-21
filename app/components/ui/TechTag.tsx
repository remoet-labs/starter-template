interface TechTagProps {
  name: string;
}

export function TechTag({ name }: TechTagProps) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-mono rounded bg-tag-bg text-tag-text">
      {name}
    </span>
  );
}
