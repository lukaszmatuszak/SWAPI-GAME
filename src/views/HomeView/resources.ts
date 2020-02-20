export interface Resource {
    iconSrc: string;
    title: string;
    iconAlt: string;
    redirect: string;
}

export const RESOURCES: Resource[] = [
    {
        iconSrc: '/vader.svg',
        title: 'CHARACTERS',
        iconAlt: 'vader',
        redirect: 'characters',
    },
    {
        iconSrc: '/falcon.svg',
        title: 'STARSHIPS',
        iconAlt: 'falcon',
        redirect: 'starships',
    },
];
