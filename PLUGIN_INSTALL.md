# Cómo usar Design System Guardian sin que aparezca en la lista de Plugins

Cursor **no ofrece** un botón para instalar plugins desde una carpeta local. Los plugins que ves en **Settings → Plugins → Installed** vienen del Marketplace o de un flujo interno; por eso **Design System Guardian no sale en la lista** aunque esté en este proyecto.

Puedes usar el plugin de dos maneras:

---

## 1. Regla de token enforcement (ya activa en este proyecto)

La regla **token-enforcement** está copiada en `.cursor/rules/token-enforcement.mdc`. Cursor carga las reglas desde `.cursor/rules/`, así que **ya se aplica** cuando trabajas en esta carpeta. No hace falta que el plugin aparezca en la lista de Plugins.

---

## 2. Comando ds-audit y agente guardian-agent

- **Para ejecutar una auditoría**: en el chat de Cursor escribe algo como:
  - *"Ejecuta una auditoría del design system según el comando ds-audit"*
  - *"Genera el Design System Intelligence Report del workspace usando el guardian-agent"*
- Puedes abrir también el archivo `commands/ds-audit.md` o `agents/guardian-agent.md` y pedir que se siga esa instrucción.

El agente y el comando están definidos en este repo (`commands/ds-audit.md`, `agents/guardian-agent.md`). Aunque el plugin no figure en Plugins, el modelo puede leer esos archivos y aplicar el mismo flujo (scoring, template, prioridades, etc.).

---

## 3. Publicar en el Marketplace (opcional)

Si quieres que el plugin **aparezca en la lista** como Create Plugin o Figma:

1. Sube el código a un repositorio público (por ejemplo GitHub).
2. Revisa la [documentación de Cursor para publicar plugins](https://cursor.com/docs/plugins) y el proceso de envío al Marketplace.
3. Una vez publicado e instalado desde el Marketplace, Design System Guardian aparecerá en **Installed** y podrás usar `/ds-audit` como comando nativo.

---

## Resumen

| Qué quieres hacer | Cómo |
|-------------------|------|
| Que te avise de colores/dimensiones hardcodeados | Ya está: la regla en `.cursor/rules/` se aplica en este proyecto. |
| Ejecutar una auditoría completa | Pide en el chat que se ejecute el ds-audit / guardian-agent y referencia los archivos del plugin si hace falta. |
| Ver el plugin en Settings → Plugins | De momento solo es posible tras publicarlo en el Marketplace e instalarlo desde ahí. |
