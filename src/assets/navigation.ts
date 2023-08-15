import Routes from '@/utils/routes';

export default [
    {
        key: 'home',
        label: 'Home',
        href: Routes.Home,
        elements: [
            { key: 'lorem', label: 'Lorem', href: Routes.Home },
            { key: 'lorem-ipsum', label: 'Lorem Ipsum', href: Routes.Home },
            { key: 'ipsum', label: 'Ipsum', href: Routes.Home },
        ]
    },
    {
        key: 'service',
        label: 'Service',
        href: Routes.Service,
        elements: [
            { key: 'service', label: 'Service', href: Routes.Service },
            { key: 'service-details', label: 'Service Details', href: Routes.Service },
        ]
    },
    {
        key: 'about',
        label: 'About',
        href: Routes.About,
    },
    {
        key: 'pages',
        label: 'Pages',
        href: Routes.Pages,
        elements: [
            { key: 'blog-list', label: 'Blog List', href: Routes.Pages },
            { key: 'blog-details', label: 'Blog Details', href: Routes.Pages },
            { key: 'service', label: 'Service', href: Routes.Pages },
            { key: 'service-details', label: 'Service Details', href: Routes.Pages },
            { key: 'portfolio', label: 'Portfolio', href: Routes.Pages },
            { key: 'portfolio-details', label: 'Portfolio Details', href: Routes.Pages },
        ]
    },
    {
        key: 'blocks',
        label: 'Blocks',
        href: Routes.Blocks,
        elements: [
            { key: 'portfolio', label: 'Portfolio', href: Routes.Blocks },
            { key: 'team', label: 'Team', href: Routes.Blocks },
            { key: 'service', label: 'Service', href: Routes.Blocks }
        ]
    },
    {
        key: 'contact',
        label: 'Contact',
        href: Routes.Contact,
    }
]
