import GitHubIcon from "../components/icons/GitHub.astro";
import LinkedInIcon from "../components/icons/LinkedIn.astro";
import MailIcon from "../components/icons/Mail.astro";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Social = {
    name: string;
    url: string;
    icon: any;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    socialLinks?: Social[];
};

const siteConfig: SiteConfig = {
    title: 'Mario Rodríguez - Desarrollador de Software',
    description: 'Explora mi sitio web para descubrir mis proyectos y mi blog personal, reflejando mi pasión y habilidades en el desarrollo de software.',
    image: {
        src: './public/me.jpeg',
        alt: 'Mario Rodríguez - Photo'
    },
    headerNavLinks: [
        {
            text: 'Blog',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/mrodriguez.tech/projects'
        },
        {
            text: 'About',
            href: '/mrodriguez.tech/about'
        }
    ],
    socialLinks: [
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
    ]
};

export default siteConfig;