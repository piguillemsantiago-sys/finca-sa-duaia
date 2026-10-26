# Handoff — Finca Sa Duaia de Dalt

> Última actualización: 2026-10-26

## OBJETIVO PRINCIPAL

Landing de una sola página (ES/EN) para el agroturismo Finca Sa Duaia de Dalt
(Artà, Mallorca), en producción en Railway. Fase actual: ronda de feedback de
la clienta y, si la pide, un panel de administración para que edite el
contenido sola.

## ESTADO ACTUAL

- Producción: https://finca-sa-duaia-production.up.railway.app/ (Railway,
  redeploy automático con `git push` a `main`). Verificado 2026-10-26: la web
  da 200 y los archivos internos (memory.md, src/, package.json…) dan 404.
- Repo: https://github.com/piguillemsantiago-sys/finca-sa-duaia (`main`).
- Sitio: `index.html` (React UMD vendorizado + `js/app.js` compilado desde
  `src/app.jsx`), `Legal.html`, `assets/`. Hero + secciones numeradas I–IX en
  el orden real de render: Bienvenida, Reseñas, La Finca, Promesas, Estancias,
  Restaurante, Entorno, Detalles, Reservas (+ Intermezzo y marquesinas).
- Reservas: botones a https://www.saduaia.com/es/bookcore/ (el iframe está
  bloqueado) + WhatsApp.
- Santi le pasa el link a la clienta para que diga qué quiere cambiar.

## DECISIONES TÉCNICAS BLOQUEADAS

- Deploy en Railway vía `git push` (nunca `railway up`). Nada de Vercel
  (`vercel.json` eliminado).
- `server.js` sirve solo `index.html`, `Legal.html`, `assets/`, `css/` y `js/`
  (lista blanca). Un archivo público nuevo en la raíz hay que agregarlo ahí.
- Fuente editable: `src/app.jsx` → `npm run build:js` → `js/app.js`. Nunca
  editar `js/app.js` a mano. Commitear fuente + generados juntos.
- Tailwind compilado (`src/tailwind.css` → `css/site.css`). Las clases armadas
  por concatenación van en `safelist` de `tailwind.config.js`.
- Numeración de secciones = orden de render en `App` (`src/app.jsx` ~L2485).
  Si se reordena, renumerar los `eyebrow` en ES y EN.
- Datos de contacto y legales: no se tocan hasta que los pase la clienta
  (decisión de Santi, 2026-10-26).

## ARCHIVOS CLAVE MODIFICADOS (sesión 2026-10-26)

- `server.js` — lista blanca de archivos públicos. Antes
  `express.static(__dirname)` exponía todo el repo.
- `vercel.json` — eliminado.
- `README.md` — sección Deploy: Railway + qué publica `server.js`.
- `src/app.jsx` + `js/app.js` — eyebrows renumerados I–IX (ES/EN); en EN,
  Entorno decía "30 from the open sea" → 6.
- `mapa.md` — nodos de deploy + "Ronda de feedback de la clienta ⚙".
- `memory.md` — entrada 2026-10-26.
- `handoff.md` — creado.

## BUGS PENDIENTES

- Footer con datos provisionales (`src/app.jsx` ~L2182–2204): tel
  `+34 971 00 00 00`, WhatsApp `wa.me/34971000000`, Instagram/Facebook con
  `href="#"`, email `hola@saduaia.com` sin verificar. Dirección del footer
  "Camí Sa Duaia" ≠ la oficial "Carretera Cala Torta, km 8".
- WhatsApp del bloque Reservas (`+34 971 589 164`, ~L2135) no aparece en
  ninguna fuente. Datos oficiales (saduaia.com/es/contacto + ficha de
  mallorca.com): tel `+34 722 74 94 73`, `booking@saduaia.com`, Facebook
  https://www.facebook.com/Sa-Duaia-277550782850/, YouTube
  https://www.youtube.com/user/AgroturismoSaDuaia. No se encontró Instagram.
- `Legal.html`: placeholders [Razón social], [Insertar NIF/CIF], [Registro
  Mercantil], [registro turístico CAIB]; emails `hola@`/`privacidad@saduaia.com`
  sin verificar. La política de privacidad de saduaia.com nombra como
  responsable a Playas de Artá S.A., CIF A07122005 (Paseo del Mar nº2, 07687
  S'Illot): confirmar con la clienta antes de usarlo.
- i18n incompleto: en EN quedan en español las marquesinas (`App`,
  ~L2493–2525), el interior del bloque Reservas (~L2103–2150), "Idioma" y los
  créditos del footer. "Est. 1425 · Restored with respect" queda en inglés en ES.

## PRÓXIMO PASO CONCRETO

Recibir el feedback de la clienta y aplicarlo: editar `src/app.jsx` →
`npm run build` → commit → push → verificar en producción. En la misma ronda,
pedirle los datos reales de contacto y legales y reemplazar los provisionales.

## COSAS ABIERTAS / RIESGOS

- Panel de administración (lo pidió Santi): evaluado como complejidad media
  (~1 semana) si es contenido editable con diseño fijo. Supabase (tabla de
  contenido + Storage + Auth email/password), panel `/admin` vanilla con
  textos ES/EN lado a lado y reemplazo de fotos con compresión y recorte, y la
  web leyendo de Supabase con respaldo al contenido actual. "Cambiar todo"
  (page builder) = complejidad alta, no recomendado. Se decide después del
  feedback; cotizar con `/propuesta`.
- Hasta que se corrijan los datos, un huésped real que toque el WhatsApp de
  reservas o el del footer puede escribirle a un número equivocado.
- `node_modules` quedó instalado en local (`npm ci`); está en `.gitignore`.

## NO HACER

- No editar `js/app.js` ni `css/site.css` a mano.
- No volver a `express.static(__dirname)`: expone notas y fuentes.
- No inventar datos de contacto ni legales: vienen de la clienta (o de
  saduaia.com, con su confirmación).
- No usar `railway up` ni volver a Vercel.
- No embeber el motor de reservas en iframe (saduaia.com lo bloquea).

## INSTRUCCIONES PARA EL PRÓXIMO CHAT

Leé este handoff + CLAUDE.md (global + proyecto) + `memory.md` + `mapa.md` +
los archivos clave listados arriba. Continuar desde "Próximo paso concreto"
sin preguntas innecesarias.
