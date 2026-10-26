# Memoria de finca-sa-duaia

> Bitácora día a día del proyecto. Entradas nuevas arriba.

## 2026-10-26

- Retomado el proyecto para pasarle el link de producción a la clienta y juntar su feedback.
- `server.js` publicaba toda la carpeta del repo (memory.md, CLAUDE.md, src/, node_modules). Ahora solo sirve index.html, Legal.html, assets/, css/ y js/. Verificado en producción: la web da 200 y lo interno 404. Commit `82e9b88`.
- Borrado `vercel.json` (el deploy es Railway); README actualizado.
- Numeración de secciones de I a IX según el orden real (reseñas estaba segunda como "VIII"). En inglés, Entorno todavía decía 30 min al mar → 6. Commit `f1b46fc`.
- Decisión: los datos de contacto y legales quedan como están hasta que los pase la clienta. Ojo: el WhatsApp de reservas (+34 971 589 164) no aparece en ninguna fuente; el teléfono de saduaia.com es +34 722 74 94 73. Legal.html tiene huecos [NIF], razón social y registro turístico.
- Evaluado un panel de administración para la clienta: complejidad media (~1 semana) si es contenido editable con diseño fijo. Se decide después de su feedback.
- Pendiente: feedback de la clienta; en inglés quedan textos en español (franjas animadas y bloque de reservas).

## 2026-06-17

- URL de producción (deploy en Railway): https://finca-sa-duaia-production.up.railway.app/
  - Verificada: HTTP 200, sirve index.html.
  - Nota: el repo tiene un `vercel.json`, pero el deploy real está en Railway. Limpiar el config de Vercel para evitar confusión.
- Cambié la distancia al mar de "30 minutos" a "6 minutos" en toda la web (badge del hero, texto de bienvenida, sección "El lugar", marquesinas y meta description). No se tocaron los 8 min de Artà ni los 20 de Cala Torta. Commit `97e4a56`.
- Cambié el título de bienvenida de "Bienvenido a Sa Duaia." a "Bienvenido a Finca Sa Duaia de Dalt" (ES e EN). Commit `8db99f3`.
- Recordatorio de flujo: el sitio se compila de `src/app.jsx` → `js/app.js` con `npm run build:js`. Siempre editar la fuente y reconstruir antes de commitear.
- Pendiente: limpiar `vercel.json` (deploy es Railway, no Vercel).
