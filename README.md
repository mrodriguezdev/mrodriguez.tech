# mrodriguez.tech

Este repositorio contiene el código fuente del sitio web [**mrodriguez.tech**](https://mrodriguez.tech).  
Es un blog personal creado con [**Astro**](https://astro.build/), [**Tailwind CSS**](https://tailwindcss.com/) y contenido en **Markdown** para compartir conocimientos sobre desarrollo de software.

El sitio está hosteado en [**Vercel**](https://vercel.com/).

## Versiones del proyecto

Este proyecto ha evolucionado por versiones como parte de mi aprendizaje:

- **v1.0.0** → Astro + **CSS puro**
- **v2.0.0** → Astro + **Tailwind CSS**

Las versiones estables pueden consultarse mediante **Git tags** en el repositorio.

## Configuración

### Requisitos previos

- Tener [Node.js](https://nodejs.org/) (versión 16 o superior) instalado.

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/mrodriguezdev/mrodriguez.tech.git
   cd mrodriguez.tech
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```
El sitio estará disponible en http://localhost:4321

## Estilos y Tailwind CSS

Este proyecto utiliza **Tailwind CSS** como sistema principal de estilos.

- La configuración de Tailwind se encuentra en: `tailwind.config.mjs`
- Los estilos globales y capas personalizadas están en: `src/styles/main.css`

En `main.css` se definen:
- Directivas base de Tailwind (`@tailwind base`, `components`, `utilities`)
- Estilos globales en `@layer base` (por ejemplo `html`, `body`, `hr`)
- Clases reutilizables en `@layer components` (por ejemplo `.wrapper`, `.referencias`)

## Despliegue

1. Genera el sitio para producción:

   ```bash
   npm run build
   ```

2. Sirve los archivos estáticos generados o despliega en tu servidor favorito, como Vercel.

## Estructura del proyecto

- **`public/`**: Archivos estáticos accesibles directamente.
- **`src/components/`**: Componentes reutilizables del sitio (como navegación, encabezados, pie de página, etc.).
- **`src/content/`**: Archivos Markdown para las publicaciones y contenido del blog.
- **`src/layouts/`**: Plantillas y diseños utilizados en las páginas y publicaciones.
- **`src/pages/`**: Páginas principales del sitio web.
- **`src/styles/`**: Estilos globales (Tailwind layers y utilidades personalizadas).

## Licencia

Este proyecto es open source y puede ser utilizado como referencia personal o educativa.