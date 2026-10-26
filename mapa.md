# Mapa de Finca Sa Duaia

> Organigrama vivo del proyecto. Se actualiza solo al editar este archivo.
> Verlo: abrí mapa.html con Live Preview (clic derecho → Show Preview).
>
> Formato: lista anidada. Cada "- " es un nodo; 2 espacios de sangría = un
> nivel. Estado al final del texto: ✓ hecho · ⚙ en curso · ⚠ pendiente.
> Sección "## Flujos": cada línea "- A -> B -> C" dibuja un flujo con flechas.

- Finca Sa Duaia
  - Sitio web (landing) ✓
    - Landing principal index.html (11 secciones, toggle ES/EN, animaciones) ✓
    - Versión mobile (hero animado, menú hamburguesa, reseñas en grilla) ✓
    - Página Legal.html (aviso legal, privacidad, cookies) ✓
    - Reservas: botones a saduaia.com + WhatsApp (el iframe está bloqueado) ✓
    - Datos reales del footer (teléfono, email y redes son provisionales) ⚠
  - Contenido y assets ✓
    - Fotos: habitaciones, exteriores, restaurante ✓
    - Video del hero + imagen de portada ✓
    - Logos (crema, tinta, color) ✓
  - Build ✓
    - Fuente editable: src/app.jsx (nunca editar js/app.js directo) ✓
    - npm run build: vendor + JS transpilado + Tailwind compilado ✓
  - Deploy ✓
    - Producción en Railway (URL verificada, HTTP 200) ✓
    - Limpiar vercel.json (el deploy real es Railway, no Vercel) ⚠

## Flujos

- Publicar un cambio en la web
- Editar src/app.jsx ✓ -> npm run build ✓ -> Commit fuente + generados ✓ -> git push (Railway redeploya solo) ✓
