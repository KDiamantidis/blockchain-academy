type StepRef = { id: string; r: 0 | 1 };
type PhaseRef = { order: number; steps: StepRef[] };
type State = { done: Record<string, true>; start?: number };

const KEY = document.getElementById('phase-data')?.dataset.key ?? 'dst-progress';
const EVENT = 'progress:change';

let memory: State = { done: {} };
let persistent = true;

function read(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { done: {} };
    const parsed = JSON.parse(raw);
    return { done: parsed.done ?? {}, start: parsed.start };
  } catch {
    persistent = false;
    return memory;
  }
}

function write(state: State) {
  memory = state;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    persistent = false;
  }
  document.dispatchEvent(new CustomEvent(EVENT));
}

export function isPersistent(): boolean {
  try {
    const probe = '__dst_probe__';
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
  } catch {
    persistent = false;
  }
  return persistent;
}

export function getState(): State {
  return persistent ? read() : memory;
}

export function setDone(id: string, done: boolean) {
  const state = getState();
  if (done) state.done[id] = true;
  else delete state.done[id];
  write(state);
}

export function setStart(order: number) {
  write({ ...getState(), start: order });
}

export function resetProgress() {
  write({ done: {} });
}

export function onChange(cb: () => void) {
  document.addEventListener(EVENT, cb);
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) cb();
  });
}

export function phaseData(): PhaseRef[] {
  const el = document.getElementById('phase-data');
  if (!el?.textContent) return [];
  return JSON.parse(el.textContent);
}

export function stats(steps: StepRef[], state = getState()) {
  const req = steps.filter((s) => s.r);
  const reqDone = req.filter((s) => state.done[s.id]).length;
  const allDone = steps.filter((s) => state.done[s.id]).length;
  return {
    req: req.length,
    reqDone,
    all: steps.length,
    allDone,
    complete: req.length > 0 && reqDone === req.length,
  };
}

/** The phase to highlight: the first one, from the placement result onward, with required steps left. */
export function currentPhase(phases = phaseData(), state = getState()): number | null {
  const from = state.start ?? 0;
  const next = phases.find((p) => p.order >= from && !stats(p.steps, state).complete);
  return next ? next.order : null;
}

export function hasAnyProgress(state = getState()): boolean {
  return Object.keys(state.done).length > 0 || state.start !== undefined;
}
