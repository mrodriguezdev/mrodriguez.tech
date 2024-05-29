import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D9YdhADS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ha pasado mucho tiempo desde que pensé en empezar un blog personal, pero finalmente he decidido dar el salto. Hasta ahora, he estado enfocado en otros proyectos, pero recientemente tuve algunas ideas para cosas sobre las que quería escribir. Así que aquí estamos, iniciando esta nueva aventura.</p>\n<p>A diferencia de cualquier otro proyecto anterior, este blog será un espacio para compartir mis experiencias y conocimientos en tecnología. Quiero que sea un lugar donde pueda documentar procesos, como la instalación de software o la configuración de sistemas, que posteriormente me servirán para recordar y quizás también puedan ayudar a otros.</p>\n<p>Para construir el sitio, he decidido usar Astro, un generador de sitios estáticos que me permite tener más control sobre cómo funcionan las cosas. Además, me da la flexibilidad para personalizarlo según mis necesidades y gustos.</p>\n<p>Así que bienvenidos a este nuevo espacio. Estén atentos para más publicaciones sobre mis aventuras en el mundo de la tecnología, los proyectos en los que trabajo y todo lo relacionado con la ingeniería de software. ¡Adelante!</p>";

				const frontmatter = {"title":"Inicia una nueva aventura","excerpt":"Ha pasado mucho tiempo desde que pensé en empezar un blog personal, pero finalmente he decidido dar el salto. Hasta ahora, he estado enfocado en otros proyectos, pero recientemente tuve algunas ideas para cosas sobre las que quería escribir. Así que aquí estamos, iniciando esta nueva aventura.","publishDate":"2024-05-28T00:00:00.000Z","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"El logotipo completo de Astro."},"tags":["NuevoComienzo","PrimeraEntrada"]};
				const file = "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/content/posts/Inicia una nueva aventura.md";
				const url = undefined;
				function rawContent() {
					return "\nHa pasado mucho tiempo desde que pensé en empezar un blog personal, pero finalmente he decidido dar el salto. Hasta ahora, he estado enfocado en otros proyectos, pero recientemente tuve algunas ideas para cosas sobre las que quería escribir. Así que aquí estamos, iniciando esta nueva aventura.\n\nA diferencia de cualquier otro proyecto anterior, este blog será un espacio para compartir mis experiencias y conocimientos en tecnología. Quiero que sea un lugar donde pueda documentar procesos, como la instalación de software o la configuración de sistemas, que posteriormente me servirán para recordar y quizás también puedan ayudar a otros.\n\nPara construir el sitio, he decidido usar Astro, un generador de sitios estáticos que me permite tener más control sobre cómo funcionan las cosas. Además, me da la flexibilidad para personalizarlo según mis necesidades y gustos.\n\nAsí que bienvenidos a este nuevo espacio. Estén atentos para más publicaciones sobre mis aventuras en el mundo de la tecnología, los proyectos en los que trabajo y todo lo relacionado con la ingeniería de software. ¡Adelante!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
