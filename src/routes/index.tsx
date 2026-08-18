import { createFileRoute } from "@tanstack/react-router";
import valCeasa from "@/assets/val-ceasa.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Val Ceasa 25888 | Deputado Estadual" },
      {
        name: "description",
        content:
          "Val Ceasa, o Amigo do Povo. Deputado Estadual 25888. Siga nas redes sociais.",
      },
      {
        property: "og:title",
        content: "Val Ceasa 25888 | Deputado Estadual",
      },
      {
        property: "og:description",
        content:
          "Val Ceasa, o Amigo do Povo. Deputado Estadual 25888. Siga nas redes sociais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12 sm:py-16">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-2xl">
          <img
            src={valCeasa.url}
            alt="Val Ceasa - Deputado Estadual 25888"
            className="h-auto w-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.instagram.com/val.ceasa?igsh=dmhjMXV6dGprZWgx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1coa54L3eJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <FacebookIcon className="h-5 w-5" />
            Facebook
          </a>
        </div>
      </div>
    </main>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
