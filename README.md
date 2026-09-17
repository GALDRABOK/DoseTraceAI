# DoseTrace AI

Local React + TypeScript + Tailwind prototype built from the uploaded DoseTrace specification. All 20 patients are fictional. No backend, API keys, or external patient data are used.

## Run

With Node.js 22+ and pnpm available:

```sh
pnpm install
pnpm dev
```

Open http://127.0.0.1:5173 and select **Explore demo → Enter Demo**.

On this computer, if Node is not on your PATH:

```sh
export PATH=/Users/ranveer/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
./node_modules/.bin/vite --host 127.0.0.1
```

## Demo journey

Overview → Review patient → Why this pattern? → Signals / Timeline → Clinical review → add a note and choose outcome → Save review → History.

Settings adjusts the review threshold immediately. Local storage retains reviews, profile and appearance preferences; session storage retains demo sign-in. Live AI Simulation presents the scripted 24% → 87% evidence sequence. The example review saved during verification is labeled “Demo verification”.

## Features

Landing and demo authentication; dashboard; searchable and sortable patient directory; dynamic patient profiles; medication refill history; five-signal fusion; explainable score contributions; uncertainty and alternative explanations; timeline filters and details; review checklist, notes, statuses and persisted history; analytics and cohort drill-down; AI insights; notifications; threshold settings; responsive sidebar; light/dark appearance; reduced-motion support; Live AI Simulation.

## Validation

```sh
pnpm build
pnpm test
```

TypeScript and production build pass. Four model tests cover scoring, evidence penalties, threshold eligibility, and saved review precedence. Browser verification covered login, review persistence, history, and live threshold changes.

## Prototype boundaries

The reasoning score is an illustrative rule-based score, not a calibrated probability or clinically validated model. The Live AI Simulation is scripted. Trend charts are labeled illustrative; cohort counts and medication comparisons derive from the local patient records. Demo authentication is not a security boundary. No diagnosis or medication changes are made automatically. Dates reflect the fictional September 2026 demo window.
