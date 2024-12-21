# mrodriguez.tech

Este repositorio contiene el código fuente del sitio web **mrodriguez.tech**. Es un blog personal creado con [**Astro**](https://astro.build/) y contenido en **Markdown** para compartir conocimientos sobre desarrollo de software. El sitio está hosteado en [Vercel](https://vercel.com/).

## Configuración

### Requisitos previos

- Tener [Node.js](https://nodejs.org/) (versión 16 o superior) instalado.

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/mrodriguezdev/mrodriguez.tech.git
   cd mrodriguez.tech
   ```

2. Instala las dependencias

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
    npm run dev
   ```
   El sitio estará disponible en http://localhost:4321.


### Despliegue

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
- **`src/styles/`**: Estilos personalizados y definiciones CSS.
