# Fixtures para probar la auditoría

Esta carpeta contiene **datos de ejemplo** para poder ejecutar **ds-audit** en este mismo repositorio:

- **`tokens/theme.css`** – Variables CSS (primitivos y semánticos) y escala de spacing (con un hueco en la escala a propósito).
- **`app/Button.jsx`** – Componente con colores y dimensiones hardcodeados en `style={{ ... }}`.

Al pedir en el chat que se ejecute la auditoría del workspace, el guardian-agent analizará estos archivos y generará el Design System Intelligence Report (subscores, prioridades, recomendaciones).

Puedes borrar o ignorar `fixtures/` si solo usas el plugin en otros proyectos.
