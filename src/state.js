const listeners = [];

export function onStateChange(fn) {
  listeners.push(fn);
}

function notify() {
  listeners.forEach((fn) => fn());
}

function reactive(obj) {
  return new Proxy(obj, { // Intercepts object changes so we can trigger UI updates automatically
    set(target, key, value) {
      target[key] = value;
      notify();
      return true;
    },
  });
}

export const state = {
  running: false,
  phase: 'IDLE',
  time: 0,
  day: 1,
  target: null,
  resources: reactive({ o2: 0, bf: 0, co2: 0, al: 0, ti: 0 }),
  storage: { o2: 1000, bf: 500, co2: 1000 },
  prices: reactive({ o2: 50, bf: 100, al: 150, ti: 500 }),
  _revenue: 0,
  get revenue() { return this._revenue; },
  set revenue(value) {
    this._revenue = value;
    notify();
  },
  weights: { a: 0.45, b: 0.35, g: 0.2 },
  tleMode: 'Fallback',
  dockAvailable: false,
  justDocked: false,
  co2_pending: 0,
  marketTick: 0,
  eventsBoost: 0,
};