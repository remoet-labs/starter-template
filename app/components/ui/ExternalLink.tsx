import { FiExternalLink } from "react-icons/fi";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
    >
      {children}
      <FiExternalLink size={12} aria-hidden="true" />
    </a>
  );
}
