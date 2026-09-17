# DoseTrace AI

### Detect the pattern. Don't assume the patient.

🌐 **[Open the Live Demo](https://galdrabok.github.io/DoseTraceAI/)**

DoseTrace AI is a healthcare hackathon prototype for **The Vanishing Dose** problem: identifying patterns that may suggest medication-adherence disruption between prescription and follow-up.

It combines indirect healthcare signals, explains the evidence, and keeps the clinician in control.

## Try It

Visit **https://galdrabok.github.io/DoseTraceAI/** and select **Explore demo → Enter Demo**.

No account, password, or API key is required.

## The Problem

Clinicians can see a prescription and a treatment outcome, but often have limited visibility into what happens between visits.

An occasional missed or delayed dose can be difficult to distinguish from other causes of changing symptoms. DoseTrace explores how multiple observations can help identify patterns that deserve clinical attention.

## How It Works

DoseTrace brings together five signal sources:

- Pharmacy refill records
- Prescription history
- Symptoms and vitals
- Wearable activity
- Follow-up observations

The demo reasoning model compares observations with patient-specific baselines, checks repeated deviations, and evaluates signal agreement. Missing data, conflicting signals, and alternative explanations reduce confidence.

The output is **“Possible adherence disruption”**, with evidence for a clinician to review.

## Features

- Dashboard with patient summaries and a priority review queue
- Twenty fictional patients with search, filters, and sorting
- Dynamic patient profiles and baseline comparisons
- Interactive signal fusion and step-by-step reasoning
- Confidence explanations and alternative causes
- Medication refill history and filtered patient timelines
- Clinical review checklists, notes, and status changes
- Saved review history
- Population analytics and cohort exploration
- Notifications and adjustable review thresholds
- Live AI Simulation
- Responsive navigation and light/dark appearance

## Suggested Demo Flow

1. Enter the demo and open **Patients**.
2. Search for **DT-1042** and open the patient profile.
3. Compare the observed refill interval, symptoms, and activity with the baseline.
4. Select **Why this pattern?** to inspect the reasoning.
5. Explore **Signals**, **Timeline**, and alternative explanations.
6. Open **Clinical review**, add a note, choose an outcome, and save.
7. View the saved decision in **History**.
8. Run **Live AI Simulation** from the sidebar.

To start fresh, use **Settings → Reset demo data**.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide icons
- Recharts
- GitHub Pages

The prototype runs entirely in the browser using local mock data. It does not require a backend.

## Run Locally

Requires Node.js 22 or later.

```sh
git clone https://github.com/GALDRABOK/DoseTraceAI.git
cd DoseTraceAI
npm install
npm run dev
