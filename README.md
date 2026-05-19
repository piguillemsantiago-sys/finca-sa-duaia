# Finca Sa Duaia de Dalt — Landing page

Web de una sola página para el agroturismo **Finca Sa Duaia de Dalt** (Artà, Mallorca).
Implementada a partir del diseño exportado desde Claude Design.

## Qué es

- `index.html` — landing principal (11 secciones, toggle ES/EN, animaciones de scroll).
- `Legal.html` — aviso legal, privacidad y cookies.
- `assets/` — imágenes y vídeo del hero.
- `css/site.css` — Tailwind compilado + estilos propios (generado).
- `js/app.js` — componente React transpilado (generado).
- `js/vendor/` — React y ReactDOM de producción, servidos localmente (generado).

El diseño es un componente React. El navegador **no** transpila nada ni descarga
Tailwind en runtime: todo se compila antes del deploy.

## Fuentes editables

- `src/app.jsx` — código del componente React. Editar acá.
- `src/tailwind.css` — entrada de Tailwind + CSS de animaciones.
- `tailwind.config.js` — tokens de color/tipografía y `safelist`.

## Build

```bash
npm install
npm run build
```

`npm run build` hace tres cosas:

1. `build:vendor` — copia React/ReactDOM de producción a `js/vendor/`.
2. `build:js` — transpila `src/app.jsx` → `js/app.js`.
3. `build:css` — compila `src/tailwind.css` → `css/site.css`.

Durante el desarrollo: `npm run watch:js` y `npm run watch:css` en paralelo.

> Si se editan clases de Tailwind construidas dinámicamente en `app.jsx`
> (concatenación de strings), añadirlas a `safelist` en `tailwind.config.js`.

## Deploy

El sitio es estático. Subir a Vercel/Railway sirviendo la raíz del proyecto.
Ejecutar `npm run build` y commitear los archivos generados, o dejar que la
plataforma corra `npm run build` en el deploy.

## Notas heredadas del diseño

- El motor de reservas de saduaia.com bloquea el embed por iframe, así que la
  sección de reservas usa botones a la web oficial + WhatsApp (decisión del chat).
- Teléfono, email y redes del footer son provisionales — reemplazar por los reales.
