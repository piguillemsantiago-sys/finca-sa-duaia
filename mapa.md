# Mapa de Finca Sa Duaia

> Organigrama vivo del proyecto. Se actualiza solo al editar este archivo.
> Verlo: abrí mapa.html con Live Preview (clic derecho → Show Preview).
>
> Formato: lista anidada. Cada "- " es un nodo; 2 espacios de sangría = un
> nivel. Estado al final del texto: ✓ hecho · ⚙ en curso · ⚠ pendiente.
> Sección "## Flujos": cada línea "- A -> B -> C" dibuja un flujo con flechas.

- Finca Sa Duaia
  - Sitio web (landing) ✓
    - Rediseño minimalista (rama rediseno-minimalista, sin publicar) ⚙
      - Portada: video + título + Reservar ✓
      - La finca: texto de la clienta + galería de fotos propias ✓
      - Alojamientos: 11 unidades en 5 grupos (ficha de Booking de Sa Duaia de Dalt) ✓
      - Galería de interiores con las fotos retocadas ✓
      - Villas destacadas: Ca na Moli y Ca na Lluny ✓
      - Restaurante Sa Duaia (a 1,5 km) ✓
      - Entorno: distancias + hoja de ruta ✓
      - Reseñas (3 citas + nota de Google) ✓
      - Reservar: formulario al motor de saduaia.com (es de la finca vecina) ⚠
      - Pop-up de descuento configurable (apagado hasta tener código) ✓
      - ES/EN completo ✓
    - Página Legal.html (aviso legal, privacidad, cookies) ✓
    - Datos reales del footer (teléfono, email y redes son provisionales) ⚠
    - WhatsApp de reservas sin confirmar ⚠
  - Contenido y assets ✓
    - Material de la clienta 2026-11-19 (fotos + docx) ✓
    - Fotos del WeTransfer (40 RAW) retocadas: luz, verticales y notas del cliente ✓
    - Cortina de 04256 sin arreglar: repetir la foto ⚠
    - Qué unidad es Estrella, Nido y Pajar ⚠
    - Tomas de dron sin texto para la portada ⚠
    - Video del hero + imagen de portada ✓
    - Logos (crema, tinta, color) ✓
  - Build ✓
    - Fuente editable: src/app.jsx (nunca editar js/app.js directo) ✓
    - npm run build: vendor + JS transpilado + Tailwind compilado ✓
  - Deploy ✓
    - Producción en Railway (URL verificada, HTTP 200) ✓
    - vercel.json eliminado (el deploy es Railway) ✓
    - Servidor publica solo el sitio (no fuentes ni notas internas) ✓
  - Cliente
    - Ronda de feedback de la clienta ✓
    - Aprobación del rediseño antes de publicar ⚙

## Flujos

- Publicar un cambio en la web
- Editar src/app.jsx ✓ -> npm run build ✓ -> Commit fuente + generados ✓ -> git push (Railway redeploya solo) ✓
- Reserva de un huésped
- Botón Reservar ✓ -> Formulario (fechas, adultos, código) ✓ -> Sistema de reservas de Sa Duaia de Dalt ⚠
- Activar un descuento
- Código cargado en el motor de saduaia.com -> PROMO en src/app.jsx (active, code, until, textos) -> npm run build -> push
- Retoque de fotos
- RAW del cliente ✓ -> JPEG embebido derecho ✓ -> Revelado (blancos, luz, verticales) ✓ -> Arreglos de cada nota ✓ -> fotos-retocadas/ + versiones web ✓
