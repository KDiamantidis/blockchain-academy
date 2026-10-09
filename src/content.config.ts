import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const step = z.object({
  // Progress is stored in the browser under this id, so renaming it resets that step for everyone.
  id: z.string().regex(/^[a-z0-9-]+$/, 'step id: lowercase letters, digits and dashes only'),
  title: z.string(),
  provider: z.string().optional(),
  url: z.url().optional(),
  // Section number of a heading in the phase's own text (e.g. "2.5"); the step links to that heading.
  anchor: z.string().optional(),
  required: z.boolean(),
  note: z.string().optional(),
  duration: z.string().optional(),
  sections: z.array(z.string()).optional(),
  sectionsLabel: z.string().default('Ενότητες'),
  // Rendered behind a disclosure so CTF levels are not spoiled.
  hint: z.string().optional(),
  // The words "Ομαδικά Projects" in the text become the link to the projects page.
  highlight: z.string().includes('Ομαδικά Projects', 'highlight: must mention "Ομαδικά Projects"').optional(),
  // Consecutive steps with the same group are shown under one sub-heading.
  group: z.string().optional(),
  warning: z.string().optional(),
});

const phases = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/tracks' }),
  schema: z.object({
    order: z.number().int().min(0),
    title: z.string(),
    goal: z.string(),
    prerequisites: z.string(),
    parallel: z.object({ with: z.number().int(), note: z.string() }).optional(),
    steps: z.array(step).min(1),
    checks: z.array(z.string()).min(3).max(5),
    pitfalls: z.array(z.string()).default([]),
    terms: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    name: z.string(),
    status: z.enum(['Ιδέα', 'Σε σχεδιασμό', 'Σε εξέλιξη', 'Ολοκληρώθηκε']),
    description: z.string(),
    phases: z.array(z.number().int().min(0).max(6)),
    link: z.url().optional(),
    linkLabel: z.string().optional(),
  }),
});

const glossary = defineCollection({
  loader: file('src/data/glossary.yaml'),
  schema: z.object({
    term: z.string(),
    definition: z.string(),
    phase: z.number().int().min(0).max(6).optional(),
  }),
});

export const collections = { phases, projects, glossary };
