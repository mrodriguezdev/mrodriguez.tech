/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, s as spreadAttributes, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_D9YdhADS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$5 = createAstro("https://mrodriguez-tech.vercel.app/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$HeaderImage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img class="size-32 rounded-full" src="https://avatars.githubusercontent.com/u/111102840?s=400&u=ec6898787ab685188564ea6b5aa90a940c401b3f&v=4" alt="Mario Rpdríguez Photo">`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/HeaderImage.astro", void 0);

const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> <h1 class="text-3xl font-medium text-justify"> <a class="text-gray-400" href="https://www.mrodriguezdev.me/" target="_blank">Mario Rodríguez</a> </h1> <h2 class="text-xl text-gray-600">Software Engineer</h2> </div>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/SiteTitle.astro", void 0);

const $$Astro$4 = createAstro("https://mrodriguez-tech.vercel.app/");
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/icons/GitHub.astro", void 0);

const $$Astro$3 = createAstro("https://mrodriguez-tech.vercel.app/");
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$2 = createAstro("https://mrodriguez-tech.vercel.app/");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/icons/Mail.astro", void 0);

const siteConfig = {
  title: "Mario Rodríguez - Desarrollador de Software",
  description: "Explora mi sitio web para descubrir mis proyectos y mi blog personal, reflejando mi pasión y habilidades en el desarrollo de software.",
  image: {
    src: "./public/me.jpeg",
    alt: "Mario Rodríguez - Photo"
  },
  headerNavLinks: [
    {
      text: "Blog",
      href: "/"
    },
    {
      text: "Projects",
      href: "/projects"
    },
    {
      text: "About",
      href: "/about"
    }
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/mrodriguezdev",
      icon: $$GitHub
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mario-rodríguez-guzmán/",
      icon: $$LinkedIn
    },
    {
      name: "Mail",
      url: "mailto:mario.rodriguez@mrodriguezdev.me",
      icon: $$Mail
    }
  ]
};

const $$Social = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-end py-2"> <ul class="flex gap-x-2"> ${siteConfig.socialLinks?.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")} target="_blank"${addAttribute(item.name, "title")}> ${renderComponent($$result, "item.icon", item.icon, { "color": "#73ba30" })} </a> </li>`)} </ul> </nav>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/Social.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="py-2" data-astro-cid-pux6a34n> <ul class="flex gap-x-4" data-astro-cid-pux6a34n> ${siteConfig.headerNavLinks?.map((item) => renderTemplate`<li data-astro-cid-pux6a34n> <a${addAttribute(item.href, "href")} class="hover:underline" data-astro-cid-pux6a34n> ${item.text} </a> </li>`)} </ul> </nav> `;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex flex-col pt-6"> <div class="flex items-center gap-5"> ${renderComponent($$result, "HeaderImage", $$HeaderImage, {})} ${renderComponent($$result, "SiteTitle", $$SiteTitle, {})} </div> <div class="grid grid-cols-1 divide-y divide-gray-700"> ${renderComponent($$result, "Social", $$Social, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </header>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const creationYear = 2024;
  return renderTemplate`${maybeRenderHead()}<footer class="text-center" data-astro-cid-sz7xmlte> <span class="text-sm text-zinc-800/90 dark:text-zinc-200/90" data-astro-cid-sz7xmlte>
&copy; ${creationYear} - ${currentYear} <a href="https://mrodriguezdev.me/" class="text-sm hover:underline" data-astro-cid-sz7xmlte>mrodriguezdev</a>
| Todos los derechos reservados
</span> </footer> `;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://mrodriguez-tech.vercel.app/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const title = [Astro2.props.title, siteConfig.title].filter(Boolean).join(" | ");
  const image = [Astro2.props.image?.src, siteConfig.image?.src].filter(Boolean).join(" | ");
  return renderTemplate`<meta charset="utf-8"><meta name="description"${addAttribute(siteConfig.description, "content")}><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/jpeg"${addAttribute(image, "href")}><title>${title}</title><meta name="generator"${addAttribute(Astro2.generator, "content")}>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://mrodriguez-tech.vercel.app/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { showHeader = true, ...head } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...head })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <div class="flex flex-col min-h-screen px-4 md:px-8"> <main class="grow w-full max-w-3xl mx-auto"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </div>  </body> </html>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/layouts/BaseLayout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Me - Mario Rodr\xEDguez", "description": "I am software engineer, currently working at Asesor\xEDa y Servicios T\xE9cnicos, S.A. de C.V." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main><h1>Hello from About page!</h1></main> ` })}`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/pages/about.astro", void 0);

const $$file = "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, about as a, siteConfig as s };
