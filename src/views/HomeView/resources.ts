export interface Resource {
    iconSrc: string;
    title: string;
    iconAlt: string;
    redirect: string;
}

export const RESOURCES: Resource[] = [
    {
        iconSrc: '/vader.svg',
        title: 'Characters',
        iconAlt: 'vader',
        redirect: 'characters',
    },
    {
        iconSrc: '/falcon.svg',
        title: 'Starships',
        iconAlt: 'falcon',
        redirect: 'starships',
    },
];
