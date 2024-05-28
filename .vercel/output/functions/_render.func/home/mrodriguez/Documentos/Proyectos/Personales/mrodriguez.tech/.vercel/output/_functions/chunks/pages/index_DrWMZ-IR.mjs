/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, f as renderComponent } from '../astro_DepveNR5.mjs';
import 'kleur/colors';
import { g as getCollection, s as siteConfig, $ as $$BaseLayout } from './__Dfhzbs7s.mjs';
import 'clsx';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$ArrowRigth = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArrowRigth;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/icons/ArrowRigth.astro", void 0);

function slugify(input) {
  if (!input)
    return "";
  var slug = input.toLowerCase().trim();
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
  slug = slug.replace(/[\s-]+/g, "-");
  return slug;
}

const $$Astro = createAstro("http://localhost:4321");
const $$PostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post, class: className, headingLevel = "h2" } = Astro2.props;
  const { title, publishDate, updatedDate, excerpt } = post.data;
  const TitleTag = headingLevel;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(["flex justify-between items-start gap-8 group", className], "class:list")}${addAttribute(`/blog/${slugify(title)}/`, "href")}> <div class="grow"> ${renderComponent($$result, "TitleTag", TitleTag, { "class": "text-xl leading-tight font-serif font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1 sm:text-2xl" }, { "default": ($$result2) => renderTemplate`${title}` })} <div class="mt-1 text-sm leading-normal"> <!-- <FormattedDate date={publishDate} /> --> <!--             {
                updatedDate && (
                    <>
                        {" "}
                        <span>
                            (Updated on <FormattedDate date={updatedDate} />)
                        </span>
                    </>
                )
            } --> </div> ${excerpt && renderTemplate`<div class="mt-3 text-sm leading-normal">${excerpt}</div>`} </div> <div class="hidden font-serif italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
Read more ${renderComponent($$result, "ArrowRigthIcon", $$ArrowRigth, { "class": "fill-current w-4 h-4" })} </div> </a>`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/components/PostPreview.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": siteConfig.title, "description": siteConfig.description, "image": siteConfig.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-2sm text-gray-600 my-3">Recent Posts</h1> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "class": "mb-10 sm:mb-12" })}`)} </main> ` })}`;
}, "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/pages/index.astro", void 0);

const $$file = "/home/mrodriguez/Documentos/Proyectos/Personales/mrodriguez.tech/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
