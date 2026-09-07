import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, Share2 } from "lucide-react";
import {
  FloatingWhatsApp,
  SiteFooter,
  SiteNav,
  useReveal,
} from "@/components/site-layout";
import { ARTICLES, getArticleBySlug } from "./blog";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({ meta: [{ title: "Vanguard AI Insights — Software House" }] }),
  component: ArticlePage,
});

function ArticlePage() {
  useReveal();
  const { slug } = Route.useParams();
  const article = getArticleBySlug(slug);
  if (!article) throw notFound();
  const related = ARTICLES.filter(
    (candidate) =>
      candidate.category === article.category &&
      candidate.slug !== article.slug,
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#07111f] pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div
            className="tech-field pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
            <Link
              to="/blog"
              className="reveal inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[color:var(--cyan-glow)]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to insights
            </Link>
            <div className="reveal mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--cyan-glow)]">
              <span>{article.category}</span>
              <span className="text-white/20">/</span>
              <span className="text-muted-foreground">{article.date}</span>
              <span className="text-muted-foreground">
                {article.readTime} read
              </span>
            </div>
            <h1 className="reveal mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="reveal mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              {article.excerpt}
            </p>
          </div>
        </section>

        <article className="relative py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
            <div>
              <div className="reveal overflow-hidden border border-white/[0.08] bg-[oklch(0.19_0.038_265)]">
                <img
                  src={article.image}
                  alt=""
                  className="h-[240px] w-full object-cover sm:h-[380px]"
                />
              </div>
              <div className="prose-vanguardai mt-12">
                {article.sections.map((section, index) => (
                  <div
                    key={section}
                    className="reveal mb-10"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {index > 0 && (
                      <h2>
                        {
                          [
                            "Start with the operating model",
                            "Build for change, not just the demo",
                            "Measure the system like a product",
                            "The advantage is dependable execution",
                          ][index - 1]
                        }
                      </h2>
                    )}
                    <p>{section}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-5 lg:pt-[380px]">
              <div className="reveal border border-[color:var(--cyan-glow)]/20 bg-[color:var(--cyan-glow)]/[0.05] p-6">
                <p className="eyebrow">Key takeaways</p>
                <ul className="mt-5 space-y-4">
                  {article.takeaways.map((takeaway) => (
                    <li
                      key={takeaway}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--cyan-glow)]" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal border border-white/[0.08] bg-white/[0.03] p-6">
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <Clock className="h-4 w-4 text-[color:var(--cyan-glow)]" />{" "}
                  {article.readTime} read
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard?.writeText(window.location.href)
                  }
                  className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Share2 className="h-4 w-4" /> Copy article link
                </button>
              </div>
            </aside>
          </div>
        </article>

        <section className="border-t border-white/[0.07] bg-white/[0.02] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Keep reading</p>
                <h2 className="mt-3 font-display text-3xl font-bold">
                  More from {article.category}.
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden items-center gap-2 text-sm font-semibold text-[color:var(--cyan-glow)] sm:flex"
              >
                All insights <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/blog/$slug"
                  params={{ slug: item.slug }}
                  className="group border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-5 transition-all hover:-translate-y-1 hover:border-[color:var(--cyan-glow)]/40"
                >
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-36 w-full object-cover opacity-80 transition group-hover:opacity-100"
                  />
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug group-hover:text-[color:var(--cyan-glow)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.readTime} read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
