import type { Metadata } from "next";
import { fetchPortfolioData } from "@/lib/api";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPortfolioData();

  if (!data) {
    return {
      title: "Portfolio — Powered by remoet.dev",
      description:
        "A developer portfolio built with Next.js and the remoet.dev API.",
    };
  }

  const name = data.profile.name?.value || "Developer";
  const summary =
    data.profile.summary?.value ||
    `${name}'s developer portfolio — experience, projects, and more.`;
  const avatarUrl = data.profile.avatarUrl?.value;
  const siteUrl = data.profile.url?.value;

  const title = `${name} — Portfolio`;

  return {
    title,
    description: summary,
    ...(siteUrl && {
      alternates: { canonical: siteUrl },
    }),
    openGraph: {
      title,
      description: summary,
      type: "profile",
      ...(avatarUrl && {
        images: [{ url: avatarUrl, width: 400, height: 400, alt: name }],
      }),
      ...(siteUrl && { url: siteUrl }),
    },
    twitter: {
      card: avatarUrl ? "summary_large_image" : "summary",
      title,
      description: summary,
      ...(avatarUrl && { images: [avatarUrl] }),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function SetupPrompt() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4">Almost there</h1>
        <p className="text-muted mb-6 leading-relaxed">
          Add your remoet.dev API key to{" "}
          <code className="font-mono text-sm bg-card px-1.5 py-0.5 rounded">
            .env.local
          </code>{" "}
          to see your portfolio.
        </p>
        <pre className="text-left bg-card border border-border rounded-lg p-4 text-sm font-mono">
          REMOET_API_KEY=your_key_here
        </pre>
        <p className="text-sm text-muted mt-4">
          Get your key at{" "}
          <a
            href="https://remoet.dev/profile/api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover"
          >
            remoet.dev/profile/api
          </a>
        </p>
      </div>
    </div>
  );
}

export default async function Home() {
  const data = await fetchPortfolioData();

  if (!data) {
    return (
      <>
        <main className="max-w-3xl mx-auto px-6">
          <SetupPrompt />
        </main>
        <div className="max-w-3xl mx-auto px-6">
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <main className="max-w-3xl mx-auto px-6">
        <Hero profile={data.profile} email={data.email} />
        <Experience jobs={data.jobs} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
      </main>
      <div className="max-w-3xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
}
