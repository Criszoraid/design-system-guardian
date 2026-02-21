# Cómo publicar Design System Guardian en el Marketplace de Cursor

## 1. Dejar el plugin listo para envío

### Checklist (tu plugin ya cumple)

- [x] `.cursor-plugin/plugin.json` existe y tiene `name` en kebab-case
- [x] Metadata: `description`, `version`, `author`, `license`, `keywords`
- [x] Rutas relativas: `commands/`, `agents/`, `rules/`
- [x] Componentes con frontmatter: commands, agents, rules
- [x] `README.md` con propósito, instalación y componentes
- [x] `LICENSE` (MIT)
- [x] `CHANGELOG.md` (opcional pero recomendado)

### Antes de publicar: autor

Si quieres que figure tu nombre como autor, edita `.cursor-plugin/plugin.json`:

```json
"author": {
  "name": "Tu nombre o organización",
  "email": "tu@email.com"
}
```

---

## 2. Subir el código a GitHub

1. Crea un repositorio **público** en GitHub (ej: `design-system-guardian`).
2. Sube este proyecto (sin necesidad de incluir `.cursor/` en el repo si prefieres; el plugin son ` .cursor-plugin/`, `commands/`, `agents/`, `rules/`, `README.md`, `LICENSE`, `CHANGELOG.md`).
3. Anota la URL del repo, por ejemplo: `https://github.com/TU_USUARIO/design-system-guardian`

La **raíz del repositorio** debe ser la carpeta que contiene `.cursor-plugin/plugin.json` (en tu caso, la raíz del repo = raíz del plugin).

---

## 3. Solicitar ser plugin publisher y publicar

1. Abre en el navegador: **[cursor.com/marketplace/publish](https://cursor.com/marketplace/publish)**
2. Inicia sesión con tu cuenta de Cursor cuando te lo pida.
3. Sigue el formulario de **“Apply to submit”** o **“Submit a plugin”** (el texto puede variar).
4. Cuando pidan datos del plugin, ten a mano:
   - **Nombre**: `design-system-guardian`
   - **Repositorio**: la URL de GitHub del paso 2
   - **Descripción**: la que está en `plugin.json` o en el README
   - **Categoría**: Developer Tools (ya está en `plugin.json`)

Si el formulario pide una **ruta dentro del repo** (por ejemplo `source` o “Plugin path”), en un repo que solo tiene este plugin suele ser la raíz: `/` o `.`

---

## 4. Después del envío

- Cursor puede revisar el plugin antes de listarlo en el Marketplace.
- Si te piden cambios (manifest, README, etc.), ajusta el repo y vuelve a enviar o actualiza según indiquen.
- Cuando lo aprueben, el plugin aparecerá en [cursor.com/marketplace](https://cursor.com/marketplace) y los usuarios podrán instalarlo con `/add-plugin design-system-guardian`.

---

## 5. Referencias

- **Portal de publicación**: [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish)
- **Marketplace**: [cursor.com/marketplace](https://cursor.com/marketplace)
- **Documentación de plugins**: [cursor.com/docs/plugins](https://cursor.com/docs/plugins)
- **Repositorio oficial de plugins (ejemplo de estructura)**: [github.com/cursor/plugins](https://github.com/cursor/plugins)

---

## Resumen rápido

1. (Opcional) Cambiar `author` en `.cursor-plugin/plugin.json`.
2. Crear repo público en GitHub y subir este proyecto.
3. Ir a **cursor.com/marketplace/publish** → Iniciar sesión → Completar solicitud con la URL del repo y los datos del plugin.
4. Esperar revisión y aprobación; luego el plugin estará disponible con `/add-plugin design-system-guardian`.
