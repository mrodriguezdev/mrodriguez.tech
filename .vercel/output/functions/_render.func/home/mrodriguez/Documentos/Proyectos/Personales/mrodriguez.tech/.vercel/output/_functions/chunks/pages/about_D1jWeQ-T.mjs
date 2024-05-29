/* empty css                           */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_Bp5FequK.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './__Cv5pDtnf.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Me - Mario Rodr\xEDguez", "description": "I am software engineer, currently working at Asesor\xEDa y Servicios T\xE9cnicos, S.A. de C.V." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main><h1>Hello from About page!</h1></main> ` })}`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/pages/about.astro", void 0);

const $$file = "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
