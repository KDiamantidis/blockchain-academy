import {
  currentPhase,
  getState,
  hasAnyProgress,
  isPersistent,
  onChange,
  phaseData,
  setDone,
  stats,
} from './progress';

function renderBlocks() {
  const state = getState();
  const phases = phaseData();
  const current = currentPhase(phases, state);
  let reqTotal = 0;
  let reqDone = 0;

  for (const p of phases) {
    const s = stats(p.steps, state);
    reqTotal += s.req;
    reqDone += s.reqDone;

    document.querySelectorAll<HTMLElement>(`[data-phase="${p.order}"]`).forEach((el) => {
      el.dataset.state = s.complete ? 'done' : s.allDone > 0 ? 'active' : 'todo';
      el.toggleAttribute('data-current', current === p.order);
      el.style.setProperty('--p', String(s.req ? s.reqDone / s.req : 0));
      el.querySelectorAll<HTMLElement>('[data-count-req]').forEach((n) => (n.textContent = `${s.reqDone}/${s.req}`));
      el.querySelectorAll<HTMLElement>('[data-count-all]').forEach((n) => (n.textContent = `${s.allDone}/${s.all}`));
      el.querySelectorAll<HTMLElement>('[data-cell]').forEach((c) => {
        c.toggleAttribute('data-done', Boolean(state.done[c.dataset.cell!]));
      });
    });

    document.querySelectorAll<HTMLElement>(`[data-edge-from="${p.order}"]`).forEach((edge) => {
      edge.toggleAttribute('data-taken', s.complete);
    });
  }

  const pct = reqTotal ? Math.round((reqDone / reqTotal) * 100) : 0;
  document.querySelectorAll<HTMLElement>('[data-overall]').forEach((el) => {
    el.style.setProperty('--p', String(reqTotal ? reqDone / reqTotal : 0));
    el.querySelectorAll('[data-overall-pct]').forEach((n) => (n.textContent = `${pct}%`));
    el.querySelectorAll('[data-overall-count]').forEach((n) => (n.textContent = `${reqDone}/${reqTotal}`));
    el.querySelector('[role="progressbar"]')?.setAttribute('aria-valuenow', String(pct));
  });

  document.querySelectorAll<HTMLAnchorElement>('[data-resume]').forEach((a) => {
    if (!hasAnyProgress(state)) return;
    const label = a.querySelector('[data-resume-label]');
    if (current === null) {
      a.href = a.dataset.projectsHref!;
      if (label) label.textContent = 'Δες τα ομαδικά projects';
    } else {
      a.href = a.dataset.phaseBase!.replace('__N__', String(current));
      if (label) label.textContent = `Συνέχισε στη Φάση ${current}`;
    }
  });

  document.querySelectorAll<HTMLInputElement>('input[data-step]').forEach((input) => {
    input.checked = Boolean(state.done[input.dataset.step!]);
    input.closest('[data-step-row]')?.toggleAttribute('data-done', input.checked);
  });

  renderResume();
}

function renderResume() {
  const box = document.querySelector<HTMLElement>('[data-next-step]');
  if (!box) return;
  const rows = Array.from(document.querySelectorAll<HTMLElement>('[data-step-row]'));
  const started = rows.some((r) => r.hasAttribute('data-done'));
  const next =
    rows.find((r) => r.dataset.required && !r.hasAttribute('data-done')) ??
    rows.find((r) => !r.hasAttribute('data-done'));
  box.hidden = !started || !next;
  if (!next) return;
  box.querySelector<HTMLAnchorElement>('[data-next-step-link]')!.href = `#${next.id}`;
  box.querySelector('[data-next-step-label]')!.textContent = `Συνέχισε από το βήμα ${next.dataset.stepNum}`;
}

function bindCheckboxes() {
  document.querySelectorAll<HTMLInputElement>('input[data-step]').forEach((input) => {
    input.addEventListener('change', () => setDone(input.dataset.step!, input.checked));
  });
}

function showStorageNotice() {
  if (isPersistent()) return;
  document.querySelectorAll<HTMLElement>('[data-storage-note]').forEach((el) => (el.hidden = false));
}

bindCheckboxes();
renderBlocks();
showStorageNotice();
onChange(renderBlocks);
// Blocks render in their "todo" state first; enable edge/cell transitions only after hydration so saved progress doesn't animate on every page load.
requestAnimationFrame(() => document.documentElement.classList.add('is-hydrated'));
