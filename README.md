# Design System Guardian

Audit the structural integrity, color consistency, and implementation coherence of a Design System from tokens to code. The plugin generates a **scored intelligence report** with prioritized, actionable recommendations. No external API required.

## Installation

```bash
/add-plugin design-system-guardian
```

Or install from the Cursor plugin marketplace (when published).

**Logo (for marketplace submission):** The plugin logo is `logo_guardian.svg` in the repo root. Direct URL: `https://raw.githubusercontent.com/Criszoraid/design-system-guardian/refs/heads/main/logo_guardian.svg`

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

## Testing locally

Cursor does not list local plugins in **Settings → Plugins** until they are installed from the marketplace. You can still test the plugin in this repo in two ways.

This repo includes a **`fixtures/`** folder with sample design tokens (`tokens/theme.css`) and a small component with hardcoded values (`app/Button.jsx`) so you can run the audit here and see real findings (missing scale step, hardcoded colors, inline styles).

### 1. Run the audit (ds-audit)

Open this folder as the workspace and, in the Cursor chat, ask the AI to run the audit using the plugin instructions, for example:

- *"Ejecuta una auditoría del design system siguiendo el comando ds-audit de este proyecto"*
- *"Lee `commands/ds-audit.md` y `agents/guardian-agent.md` y genera el Design System Intelligence Report del workspace"*

The model will follow the scoring model, template, and priorities defined in those files and return the report.

### 2. Enable the rule (token-enforcement)

To get the **token-enforcement** rule applied while you edit (warnings on hardcoded colors, inline styles, repeated dimensions), load it as a project rule:

1. Create the folder: `mkdir -p .cursor/rules`
2. Copy the rule: `cp rules/token-enforcement.mdc .cursor/rules/`
3. Reload the window (Cmd+Shift+P → "Reload Window") if needed.

Cursor loads rules from `.cursor/rules/`, so the rule will apply in this workspace. You can remove `.cursor/rules/` later if you prefer not to commit it.

### 3. Install from GitHub (optional)

If the repo is public on GitHub, you can try installing it as a plugin from the repo URL (if your Cursor version supports it):

```bash
/add-plugin https://github.com/Criszoraid/design-system-guardian
```

If the plugin appears in **Plugins**, you can use `/ds-audit` and the rule will come from the installed plugin.

## License

MIT
