# Design System Guardian

Audit the structural integrity, color consistency, and implementation coherence of a Design System from tokens to code. The plugin generates a **scored intelligence report** with prioritized, actionable recommendations. No external API required.

## Installation

```bash
/add-plugin design-system-guardian
```

Or install from the Cursor plugin marketplace (when published).

## Components

### Commands

| Command     | Description |
|:------------|:------------|
| `ds-audit`  | Analyze the workspace for design tokens and/or source code. Produces a Design System Intelligence Report with subscores (Structure, Color, Code), overall score (0–100), prioritized issues (High/Medium/Low), and actionable recommendations. |

### Agents

| Agent             | Description |
|:------------------|:------------|
| `guardian-agent`  | Core analysis engine. Detects context (tokens, code, or both), normalizes color formats, evaluates structural consistency, finds duplicates and scale gaps, identifies hardcoded values, and produces the structured report. |

### Rules

| Rule                | Description |
|:--------------------|:------------|
| `token-enforcement` | Light real-time detection of hardcoded colors, inline styles, and repeated dimension values. Warns and suggests token/variable usage; does not block. |

## Typical flow

1. Use **`/ds-audit`** to run a full audit of the current workspace.
2. The **guardian-agent** performs analysis and returns a report with overall score, subscores, prioritized issues, and recommendations.
3. **token-enforcement** runs automatically while you edit: it warns on hardcoded colors, inline styles, and repeated dimensions and suggests tokens where appropriate.

## Output expectations

- Clear structured report
- Overall score (0–100)
- Subscores (Structure, Color, Code)
- Prioritized issues (High / Medium / Low)
- Actionable recommendations
- No external API dependency

## License

MIT
