export function Footer() {
  return (
    <footer className="py-12 border-t border-border mt-8">
      <p className="text-center text-sm text-muted">
        Created with{" "}
        <a
          href="https://remoet.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          remoet.dev
        </a>
        {" · "}
        <a
          href="/llms.txt"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          llms.txt
        </a>
      </p>
    </footer>
  );
}
