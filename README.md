# Democritus Sec Team Academy

The learning site of **Democritus Sec Team**, the student cybersecurity and CTF team of Democritus University of Thrace.

The home page introduces the team and its sub-teams. Each sub-team has a short presentation, and teams with a guide get a placement quiz that sends you to the right point of their roadmap, depending on what you already know. Progress is kept in your browser. The site is in Greek.

**Live site:** https://kdiamantidis.github.io/blockchain-academy/

## What's inside

- **Home page**: who we are, the four sub-teams and first steps for new members.
- **Sub-teams**: Network Forensics, Web Security, Vulnerability Exploitation and Blockchain. A team without a guide yet shows "οδηγός σύντομα".
- **Per-team guide** (`/<team>/`): a roadmap, a placement quiz ("Από πού ξεκινάω;") of up to five questions, and one page per phase or chapter with checkboxes, self-check questions and common mistakes.
  - **Web Security**: seven chapters, written out on the site from the team's introductory guide.
  - **Blockchain**: seven phases that point to free external courses, plus team projects, a glossary and a "how we work" page.

Progress is stored only in `localStorage`. There is no backend, no login and no analytics.

## Run it locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321/blockchain-academy/
npm run build     # static output in dist/
npm run preview   # serve the build
npm run check     # type-check content and components
```

## Editing content

All content lives in a few files. You rarely need to touch components.

### Sub-teams

Every sub-team is an entry in [`src/lib/tracks.ts`](src/lib/tracks.ts): its `slug` (the URL), `name`, Discord `handle` and the `summary` paragraphs shown on the home page. A team gets its own guide once you add a `guide` object, which holds the hero text, the quiz questions, the safety note, the Discord channel and where the "finished" link goes.

The `guide.storageKey` is where progress is saved. Changing it resets everyone's progress for that team.

### Add a guide for a sub-team

1. Add a `guide` to the team in [`src/lib/tracks.ts`](src/lib/tracks.ts). Copying the Web Security one is the easiest start.
2. Create one Markdown file per phase or chapter in `src/content/tracks/<slug>/` (for example `chapter-1.md`), with `order` starting at 1 (Blockchain starts at 0).
3. Point the quiz answers to those orders: an option either leads to another question (`next: 'q2'`) or ends the quiz (`result: 3`).

Guides other than Blockchain are drawn as a straight chain, so no layout work is needed.

### Phases and chapters

Steps live in the frontmatter:

```yaml
steps:
  - id: p2-cyfrin-solidity          # unique, lowercase, never rename after publishing
    title: 'Cyfrin Updraft: Solidity Smart Contract Development'
    provider: Cyfrin Updraft
    url: https://updraft.cyfrin.io/courses/solidity
    required: true                  # true = Υποχρεωτικό, false = Προαιρετικό
    note: Short line on what you learn.
    duration: περίπου 5 ώρες        # only if the course states it
    sections: [Simple Storage, Fund Me]
    warning: Optional red warning.
    highlight: Optional blue note (links to team projects).
    hint: Optional spoiler, hidden behind "Τι μαθαίνεις".
```

When the guide is written on the site itself (Web Security), a step uses `anchor: '2.5'` instead of `url`, and links to the heading `2.5` in the Markdown body of the same file.

The step `id` is the key used to save progress. If you rename it, everyone loses the checkmark for that step.

Other frontmatter fields: `title`, `goal`, `prerequisites`, `parallel` (Blockchain only, for phases that run alongside another), `checks` (3–5 self-check questions), `pitfalls` and `terms` (glossary ids). The Markdown body is shown on the page.

### Blockchain extras

- **Add a phase**: copy an existing file in [`src/content/tracks/blockchain/`](src/content/tracks/blockchain/), give it the next `order`, and add it to the hand-placed graph in [`src/components/Graph.astro`](src/components/Graph.astro) (the `links` list and the grid areas).
- **Team projects**: [`src/data/projects.yaml`](src/data/projects.yaml). `status` is one of `Ιδέα`, `Σε σχεδιασμό`, `Σε εξέλιξη`, `Ολοκληρώθηκε`.
- **Glossary**: [`src/data/glossary.yaml`](src/data/glossary.yaml). The `id` becomes the anchor (`/blockchain/glossary/#id`) and is what phases list under `terms`.

The build validates every file against a schema ([`src/content.config.ts`](src/content.config.ts)), so a typo fails the build with a clear message instead of breaking the page.

### Old links

The site used to be the Blockchain guide alone. Old URLs such as `/roadmap/` or `/phases/2/` redirect to `/blockchain/...` (see [`astro.config.mjs`](astro.config.mjs)).

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repository settings, set **Pages → Source** to **GitHub Actions** once.

## Contributing

Found a broken link or a better free resource? Open a pull request (each phase page has an "edit" link at the bottom) or ask in `#chat` on Discord.
