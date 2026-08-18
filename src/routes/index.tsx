import { createFileRoute } from "@tanstack/react-router";

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
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b1f4d] via-[#0d2763] to-[#0b1f4d] px-4 py-8 sm:px-6 sm:py-12">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#15397a]/30 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Campaign image */}
        <div className="mx-auto mb-8 w-full max-w-4xl overflow-hidden rounded-2xl border-4 border-[#f7ff00] shadow-2xl shadow-black/40 sm:mb-10 sm:rounded-3xl sm:border-[6px]">
          <img
            src="/val-ceasa.jpg"
            alt="Val Ceasa - Deputado Estadual 25888"
            className="h-auto w-full"
          />
        </div>

        {/* Social buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://www.instagram.com/val.ceasa?igsh=dmhjMXV6dGprZWgx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] to-[#bc1888] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition-all hover:scale-105 hover:brightness-110 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1coa54L3eJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-white/80 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            <FacebookIcon className="h-5 w-5 sm:h-6 sm:w-6" />
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

