import GitHubIcon from "@/components/icons/GitHub.astro";
import LinkedInIcon from "@/components/icons/LinkedIn.astro";
import MailIcon from "@/components/icons/Mail.astro";
import RssIcon from "@/components/icons/Rss.astro";

export type Image = {
    src: string;
    alt: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type SocialMedia = {
    name: string;
    url: string;
    icon: any;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image: Image;
    author: string;
    developer: string;
    headerNavLinks: Link[];
    socialLinks: SocialMedia[];
    url: string;
};

const site: string = "https://mrodriguez.tech";

const siteConfig: SiteConfig = {
    title: 'Mario Rodríguez - Desarrollador de Software',
    description: 'Explora mi sitio web para descubrir mis proyectos y mi blog personal, reflejando mi pasión y habilidades en el desarrollo de software.',
    image: {
        src: '/me.jpeg',
        alt: 'Mario Rodríguez - Photo'
    },
    author: "Mario Rodríguez",
    developer: "mrodriguezdev",
    headerNavLinks: [
        {
            text: 'Blog',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/proyectos'
        },
        {
            text: 'Sobre mí',
            href: '/sobre-mi'
        }
    ],
    socialLinks: [
        {
            name: 'RSS Feed',
            url: `${site}/rss.xml`,
            icon: RssIcon
        },
        {
            name: 'GitHub',
            url: 'https://github.com/mrodriguezdev',
            icon: GitHubIcon
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mario-rodríguez-guzmán/',
            icon: LinkedInIcon
        },
        {
            name: 'Mail',
            url: 'mailto:mario.rodriguez@mrodriguezdev.me',
            icon: MailIcon
        }
    ],
    url: site
};

export default siteConfig;