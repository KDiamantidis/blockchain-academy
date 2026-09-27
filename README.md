# Blockchain Academy

A self-study path from zero to smart contract security, made by the Blockchain team of **Democritus Sec Team**, the student cybersecurity and CTF team of Democritus University of Thrace.

The site does not teach the material itself. It guides you through free external courses in the right order, explains why each step matters, and keeps track of your progress in your browser. The site is in Greek.

**Live site:** https://kdiamantidis.github.io/blockchain-academy/

## What's inside

- **Roadmap**: seven phases, from setting up your tools to breaking smart contracts (Ethernaut, Damn Vulnerable DeFi).
- **Placement quiz** ("Από πού ξεκινάω;"): up to four questions that send you to the right phase.
- **Phase pages**: steps with required/optional labels, self-check questions, common mistakes and related glossary terms.
- **Team projects**, **glossary** and **how we work** pages.

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

### Add or edit a resource in a phase

Each phase is one Markdown file in [`src/content/phases/`](src/content/phases/) (`phase-0.md` … `phase-6.md`). Steps live in the frontmatter:

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

The step `id` is the key used to save progress. If you rename it, everyone loses the checkmark for that step.

Other frontmatter fields: `title`, `goal`, `prerequisites`, `parallel` (for phases that can run alongside another), `checks` (3–5 self-check questions), `pitfalls` and `terms` (glossary ids). The Markdown body below the frontmatter is shown above the steps, and is useful for setup notes or rules.

### Add a phase

Copy an existing phase file, give it the next `order`, and add it to the graph layout in [`src/components/Graph.astro`](src/components/Graph.astro) (the `links` list and the grid areas). A block's hash is derived from its order, and its `prevHash` from its parent phase.

### Add a team project

Add an entry to [`src/data/projects.yaml`](src/data/projects.yaml). `status` is one of `Ιδέα`, `Σε σχεδιασμό`, `Σε εξέλιξη`, `Ολοκληρώθηκε`.

### Add a glossary term

Add an entry to [`src/data/glossary.yaml`](src/data/glossary.yaml). The `id` becomes the anchor (`/glossary/#id`) and is what phases list under `terms`.

The build validates every file against a schema ([`src/content.config.ts`](src/content.config.ts)), so a typo fails the build with a clear message instead of breaking the page.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repository settings, set **Pages → Source** to **GitHub Actions** once.

## Contributing

Found a broken link or a better free resource? Open a pull request (each phase page has an "edit" link at the bottom) or ask in `#block-chain` on Discord.
