# Jesús Molina — Piano (React + Vite)

Migración del sitio original (`index.html` + `script.js` + `styles.css`) a una
estructura de componentes en React, manteniendo el mismo diseño, clases CSS y
comportamiento visual/interactivo.

## En caso de tener errores por dependencias

```bash
npm install
```

## Correr el proyecto
```bash
npm run dev       # desarrollo, http://localhost:5173
npm run preview   # sirve el build de producción
```

## En caso de modificar el vite.js 
```bash
[1] Guardar los cambios en su IDE en caso de no tener el autosave
[2] Ejecutar los comandos npm run build y npm run deploy en ese orden
[3] Realizar commit 
```
## Estructura

```
src/
  components/   Un componente por sección (Hero, Method, Courses, ...)
  hooks/        Toda la lógica que antes vivía en script.js, un hook por
                comportamiento (loader, cursor, scroll reveal, canvas del
                piano, tilt de tarjetas, toggle de precios, etc.)
  data/         Contenido repetitivo (cursos, planes, testimonios, timeline,
                links del nav) como arrays, para no repetir JSX
  styles/       styles.css original dividido en un archivo por sección
  index.css     Importa todos los archivos de styles/ en orden
```

## Notas de la migración

- Las clases CSS son idénticas a las del proyecto original — el CSS no se
  reescribió, solo se dividió en archivos más pequeños y manejables.
- Toda la interactividad (loader animado, cursor personalizado, scroll
  reveal, contador animado, canvas del piano en el hero, tilt de las
  tarjetas de cursos, nube de testimonios, toggle mensual/anual) se portó
  a hooks de React.
- El teclado de piano interactivo (sonido con Web Audio) que estaba en
  `script.js` no se migró porque el HTML que me pasaste ya no tenía el
  markup correspondiente (`#pianoKeys` / `#piano`) — es decir, ese código
  ya estaba "muerto" en el proyecto original. Si lo quieres de vuelta, se
  puede reconstruir como un componente + hook nuevo sin problema.
- Las imágenes se movieron a `public/images/`.
