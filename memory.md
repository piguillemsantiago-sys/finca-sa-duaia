# Memoria de finca-sa-duaia

> Bitácora día a día del proyecto. Entradas nuevas arriba.

## 2026-06-17

- URL de producción (deploy en Railway): https://finca-sa-duaia-production.up.railway.app/
  - Verificada: HTTP 200, sirve index.html.
  - Nota: el repo tiene un `vercel.json`, pero el deploy real está en Railway. Limpiar el config de Vercel para evitar confusión.
- Cambié la distancia al mar de "30 minutos" a "6 minutos" en toda la web (badge del hero, texto de bienvenida, sección "El lugar", marquesinas y meta description). No se tocaron los 8 min de Artà ni los 20 de Cala Torta. Commit `97e4a56`.
- Cambié el título de bienvenida de "Bienvenido a Sa Duaia." a "Bienvenido a Finca Sa Duaia de Dalt" (ES e EN). Commit `8db99f3`.
- Recordatorio de flujo: el sitio se compila de `src/app.jsx` → `js/app.js` con `npm run build:js`. Siempre editar la fuente y reconstruir antes de commitear.
- Pendiente: limpiar `vercel.json` (deploy es Railway, no Vercel).
