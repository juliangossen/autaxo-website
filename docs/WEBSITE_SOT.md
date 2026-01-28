# Autaxo Website – Source of Truth (High Performance SEO/GEO/LLMO)
Stand: 2026-01-28

## 1) Zielbild
**Ziel:** Eine extrem schnelle, wartungsarme Marketing-Website, die
- organisch über Google gefunden wird (SEO),
- in AI-Search/AI-Answers erscheint (GEO),
- von LLMs zuverlässig “verstanden” wird (LLMO).

**Nicht-Ziele:** Kein schweres CMS-Frontend, kein JS-lastiges SPA, keine Plugin-Hölle.

## 2) Leitprinzipien (Performance-first)
- Static-first (SSG), “Islands” nur wenn zwingend.
- Kein unnötiges Third-Party-JS (Tracking nur consent-gated).
- Strikte Content-Struktur (saubere Überschriften, Entitäten, interne Verlinkung).
- Single Source of Truth: Repo-Dateien / Sanity (falls aktiv).

## 3) Tech-Stack (zu verifizieren)
**Fakten (aus Repo):**
- Astro (Version prüfen)
- Tailwind (Version prüfen)
- Deployment: Cloudflare Pages via GitHub

**Annahmen (bis Repo-Check):**
- Astro v5, Tailwind v4
- Blog via MDX
- Icons via astro-icon
- Content: Sanity bereits eingerichtet

## 4) SEO-Basics (Pflicht)
- Canonical, Title/Description pro Seite
- OG/Twitter Cards
- Sitemap Index + robots.txt Verweis
  - Astro erzeugt `sitemap-index.xml` + `sitemap-0.xml` beim Build (SSG). (Quelle: Astro Docs)
- Structured Data (JSON-LD): Organization + SoftwareApplication + WebSite (mindestens)

## 5) GEO/LLMO (Pflicht)
- `/llms.txt` im Root veröffentlichen (Markdown, standardisierte Struktur). (Quelle: llmstxt.org / Answer.AI)
- Optional: Ableitungen wie `llms-ctx.txt` / `llms-ctx-full.txt` sind Tool-Artefakte, aber nützlich (z. B. Claude/IDE), nicht zwingend Standard.

## 6) Robots / Crawling (Entscheidung nötig)
OpenAI unterscheidet:
- OAI-SearchBot (Search)
- GPTBot (Training)
Entscheiden: Allow/Disallow pro Bot.

## 7) Informationsarchitektur (zu verifizieren)
- Hauptseiten: Home, Preise, Kontakt
- Feature-Hub: /funktionen + Detailseiten
- Ressourcen: Blog, FAQ, Training, Downloads, Whitepaper
- Legal: Impressum, Datenschutz, AGB

## 8) Betrieb/Deployment
- GitHub → Cloudflare Pages Build
- Env Vars (falls Sanity aktiv): projectId/dataset/token (read-only)
- Monitoring: Lighthouse / CWV regelmäßig

## 9) Offene Punkte (Kill-Criteria)
- Wenn Sanity nicht innerhalb von 1–2 Sprints echten Mehrwert bringt (Editor-Workflow + strukturierte Entitäten), dann: entweder konsequent integrieren oder konsequent streichen.
