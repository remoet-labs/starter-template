import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { UserProfile } from "@/lib/types";
import { SocialIcon } from "./ui/SocialIcon";
import { ThemeToggle } from "./ThemeToggle";

interface HeroProps {
  profile: UserProfile;
  email: string;
}

const socialLinks = [
  { key: "githubUrl" as const, label: "GitHub", icon: FaGithub },
  { key: "linkedinUrl" as const, label: "LinkedIn", icon: FaLinkedin },
  { key: "twitterUrl" as const, label: "Twitter", icon: FaTwitter },
  { key: "youtubeUrl" as const, label: "YouTube", icon: FaYoutube },
  { key: "facebookUrl" as const, label: "Facebook", icon: FaFacebook },
  { key: "url" as const, label: "Website", icon: FaGlobe },
] as const;

export function Hero({ profile, email }: HeroProps) {
  const name = profile.name?.value;
  const summary = profile.summary?.value;
  const location = profile.location?.value;
  const avatarUrl = profile.avatarUrl?.value;

  return (
    <section className="pt-12 pb-12">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-6">
        {avatarUrl && (
          <Image
            src={avatarUrl}
            alt={name || "Profile"}
            width={96}
            height={96}
            className="rounded-full object-cover shrink-0"
            priority
          />
        )}
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {name || email}
          </h1>

          {location && (
            <p className="mt-3 text-muted flex items-center gap-1.5">
              <FaMapMarkerAlt size={14} />
              {location}
            </p>
          )}

          {summary && (
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
              {summary}
            </p>
          )}

          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map(({ key, label, icon }) => {
              const field = profile[key];
              if (!field?.value) return null;
              return (
                <SocialIcon
                  key={key}
                  href={field.value}
                  label={label}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
