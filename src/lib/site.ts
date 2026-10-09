import { createHash } from 'node:crypto';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { GuidedTrack } from './tracks';

export type Phase = CollectionEntry<'phases'>;

export const TEAM_NAME = 'Democritus Sec Team';
export const REPO_URL = 'https://github.com/KDiamantidis/blockchain-academy';

export function href(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

export function linkTo(target: string): string {
  return /^https?:\/\//.test(target) ? target : href(target);
}

export function trackOf(phase: Phase): string {
  return phase.id.split('/')[0];
}

export async function getPhases(track: string): Promise<Phase[]> {
  const phases = await getCollection('phases', (p) => trackOf(p) === track);
  return phases.sort((a, b) => a.data.order - b.data.order);
}

export function phaseHref(track: string, order: number): string {
  return href(`${track}/phases/${order}/`);
}

export function addr(track: GuidedTrack, order: number): string {
  return `${track.guide.addrPrefix}${order}`;
}

/** Parallel phases hang off the phase they run alongside; the others follow the previous main-line phase. */
export function parentOf(phase: Phase, phases: Phase[]): Phase | undefined {
  const target = phase.data.parallel
    ? phase.data.parallel.with
    : Math.max(-1, ...phases.filter((p) => !p.data.parallel && p.data.order < phase.data.order).map((p) => p.data.order));
  return phases.find((p) => p.data.order === target);
}

// Derived from the order, not the content, so a block keeps its hash when its text is edited.
export function blockHash(order: number): string {
  return `0x${createHash('sha256').update(`democritus-sec-team/blockchain/phase-${order}`).digest('hex')}`;
}

export const GENESIS_HASH = `0x${'0'.repeat(64)}`;

export function shortHash(hash: string): string {
  return `${hash.slice(0, 6)}…${hash.slice(-4)}`;
}

export function plural(n: number, one: string, many: string): string {
  return n === 1 ? one : many;
}

export function stepsPayload(phase: Phase) {
  return phase.data.steps.map((s) => ({ id: s.id, r: s.required ? 1 : 0 }));
}
