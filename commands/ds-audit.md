---
name: ds-audit
description: Analyze the current workspace for design tokens and/or source code. Generate a Design System Intelligence Report including subscores (Structure, Color, Code), overall score (0–100), prioritized issues (High/Medium/Low), and actionable recommendations.
---

# ds-audit

Analyze the workspace for design system health and produce a structured intelligence report. The report **must** follow the strict formatting requirements below.

## What it does

- Scans the workspace for **design tokens** (e.g. CSS variables, theme files, token JSON/JS) and/or **source code** (components, styles).
- Detects context: tokens only, code only, or both.
- Produces a **Design System Intelligence Report** using the scoring model and template defined in **guardian-agent** (subscores, overall score, prioritized issues, recommendations).

## Report formatting (required)

1. **Template compliance**: The report **must strictly follow the template defined in guardian-agent**. Use the exact section headings, separators, and order; do not add or remove sections.

2. **Numeric scores**: The report **must include numeric values for all scores**. Every subscore (STRUCTURE, COLOR, CODE) and the OVERALL SCORE must be a number 0–100. Do not leave scores blank or use placeholders.

3. **Inapplicable categories**: If a category does not apply (e.g. no tokens → Structure/Color not analyzed), **still show the category** with **"N/A"** for that subscore. **Redistribute weight proportionally** when computing the overall score: overall = mean of only the *applicable* subscores; the inapplicable line still appears as `STRUCTURE: N/A` (or `COLOR: N/A`, `CODE: N/A`) so the template remains complete. Document briefly in the report or in agent logic that overall was computed from the applicable dimensions only.

4. **Tone**: The report **must be concise, professional, and diagnostic**. Use clear, factual language. Avoid conversational or casual phrasing. State findings and recommendations directly; do not add filler or commentary.

## Usage

Run when a full audit is requested. No external API is required; analysis runs locally on the workspace. The guardian-agent performs the analysis and applies the scoring model; output must conform to the above formatting rules.

## Output shape

- Report in the **exact** structure specified in guardian-agent.
- Numeric scores for all applicable categories; N/A for inapplicable ones with proportional overall scoring.
- Prioritized issues (High / Medium / Low) and numbered recommendations.
- Concise, professional, diagnostic tone throughout.
