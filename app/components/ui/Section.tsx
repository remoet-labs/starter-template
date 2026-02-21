interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <h2 className="text-2xl font-bold mb-8 tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
