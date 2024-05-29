/* empty css                           */
import { A as AstroError, l as UnknownContentCollectionError, d as createComponent, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, r as renderTemplate, f as renderComponent, u as unescapeHTML, c as createAstro, m as maybeRenderHead, s as spreadAttributes, e as addAttribute } from '../astro_D9YdhADS.mjs';
import 'kleur/colors';
import { s as siteConfig, $ as $$BaseLayout } from './about_CEb8XiST.mjs';
import 'clsx';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_BcSh0FJs.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://mrodriguez-tech.vercel.app/", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/Inicia una nueva aventura.md": () => import('../Inicia una nueva aventura_DBljivRE.mjs'),"/src/content/posts/Instalacion JDK en Ubuntu.md": () => import('../Instalacion JDK en Ubuntu_Czn84t2j.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"instalacion-jdk-en-ubuntu":"/src/content/posts/Instalacion JDK en Ubuntu.md","inicia-una-nueva-aventura":"/src/content/posts/Inicia una nueva aventura.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/Inicia una nueva aventura.md": () => import('../Inicia una nueva aventura_DZ_RQUWQ.mjs'),"/src/content/posts/Instalacion JDK en Ubuntu.md": () => import('../Instalacion JDK en Ubuntu_De6yt20R.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro("https://mrodriguez-tech.vercel.app/");
const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/icons/ArrowRight.astro", void 0);

const $$Astro$1 = createAstro("https://mrodriguez-tech.vercel.app/");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time class="text-gray-400"${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("es-ES", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "2-digit"
  })} </time>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/FormattedDate.astro", void 0);

function slugify(input) {
  if (!input)
    return "";
  var slug = input.toLowerCase().trim();
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
  slug = slug.replace(/[\s-]+/g, "-");
  return slug;
}

const $$Astro = createAstro("https://mrodriguez-tech.vercel.app/");
const $$PostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post, headingLevel = "h2" } = Astro2.props;
  const { title, publishDate, excerpt } = post.data;
  const TitleTag = headingLevel;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-start gap-2 my-8"> <div class="grow"> ${renderComponent($$result, "TitleTag", TitleTag, { "class": "text-xs leading-tight font-medium sm:text-2xl" }, { "default": ($$result2) => renderTemplate`${title}` })} <div class="mt-1 text-sm leading-normal"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": publishDate })} </div> ${excerpt && renderTemplate`<div class="mt-3 text-sm leading-normal">${excerpt}</div>`} </div> <a${addAttribute(`/blog/${slugify(title)}/`, "href")} class="text-[#73ba30] hover:underline flex items-center">
Leer más ${renderComponent($$result, "ArrowRightIcon", $$ArrowRight, { "class": "fill-current w-4 h-4 ml-1" })} </a> </div>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/PostPreview.astro", void 0);

function sortItemsByDateDesc(itemA, itemB) {
  return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).sort(sortItemsByDateDesc);
  const pageTitle = "Publicaciones recientes";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": siteConfig.title, "description": siteConfig.description, "image": siteConfig.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-2sm text-gray-600 my-3">${pageTitle.toUpperCase()}</h1> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "class": "mb-10 sm:mb-12" })}`)} </main> ` })}`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/pages/index.astro", void 0);

const $$file = "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { getEntryBySlug as a, getCollection as g, index as i, sortItemsByDateDesc as s };
