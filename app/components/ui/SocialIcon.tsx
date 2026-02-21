import { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  label: string;
  icon: IconType;
}

export function SocialIcon({ href, label, icon: Icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted hover:text-foreground transition-colors"
    >
      <Icon size={20} />
    </a>
  );
}
