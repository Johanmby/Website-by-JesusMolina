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

## Notas importantes 
A la hora de subir un cambio, tener en cuenta lo siguiente y hacer los siguientes pasos:

- A la hora de ver el proyecto se notara una carpeta llamada dist creada, bueno esta carpeta ¡NO SE TOCA!
ya que aqui basicamente se almacena unos archivos que permiten que github interprete como pagina web el framework 
y no haya ningun problema a la hora de ejecutarlo en nuestros navegadores

Pasos para hacer un commit:
- Revisar que tengas el autosave en tu IDE
- npm run build 
- npm run deploy
- Git init
- Git add .
- Git commit -m "" -a
- Git push

listo, subiste cambios con exitos!
