/* eslint-disable */

import { Starship } from '../../interfaces/Starship';
import { Character } from '../../interfaces/Character';

export const contestantsStarshipMock: Starship[] = [
    {
        name: 'Executor',
        model: 'Executor-class star dreadnought',
        manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
        cost_in_credits: '1143350000',
        length: '19000',
        max_atmosphering_speed: 'n/a',
        crew: '279144',
        passengers: '38000',
        cargo_capacity: '250000000',
        consumables: '6 years',
        hyperdrive_rating: '2.0',
        MGLT: '40',
        starship_class: 'Star dreadnought',
        pilots: [],
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/3/',
        ],
        created: '2014-12-15T12:31:42.547000Z',
        edited: '2017-04-19T10:56:06.685592Z',
        url: 'https://swapi.co/api/starships/15/',
    },
    {
        name: 'Sentinel-class landing craft',
        model: 'Sentinel-class landing craft',
        manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
        cost_in_credits: '240000',
        length: '38',
        max_atmosphering_speed: '1000',
        crew: '5',
        passengers: '75',
        cargo_capacity: '180000',
        consumables: '1 month',
        hyperdrive_rating: '1.0',
        MGLT: '70',
        starship_class: 'landing craft',
        pilots: [],
        films: ['https://swapi.co/api/films/1/'],
        created: '2014-12-10T15:48:00.586000Z',
        edited: '2014-12-22T17:35:44.431407Z',
        url: 'https://swapi.co/api/starships/5/',
    },
    {
        name: 'Death Star',
        model: 'DS-1 Orbital Battle Station',
        manufacturer:
            'Imperial Department of Military Research, Sienar Fleet Systems',
        cost_in_credits: '1000000000000',
        length: '120000',
        max_atmosphering_speed: 'n/a',
        crew: '342953',
        passengers: '843342',
        cargo_capacity: '1000000000000',
        consumables: '3 years',
        hyperdrive_rating: '4.0',
        MGLT: '10',
        starship_class: 'Deep Space Mobile Battlestation',
        pilots: [],
        films: ['https://swapi.co/api/films/1/'],
        created: '2014-12-10T16:36:50.509000Z',
        edited: '2014-12-22T17:35:44.452589Z',
        url: 'https://swapi.co/api/starships/9/',
    },
];

export const contestantsCharactersMock: Character[] = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/',
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: [
            'https://swapi.co/api/vehicles/14/',
            'https://swapi.co/api/vehicles/30/',
        ],
        starships: [
            'https://swapi.co/api/starships/12/',
            'https://swapi.co/api/starships/22/',
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.co/api/people/1/',
    },
    {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/4/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
        ],
        species: ['https://swapi.co/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:10:51.357000Z',
        edited: '2014-12-20T21:17:50.309000Z',
        url: 'https://swapi.co/api/people/2/',
    },
    {
        name: 'R2-D2',
        height: '96',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, blue',
        eye_color: 'red',
        birth_year: '33BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.co/api/planets/8/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/4/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/',
        ],
        species: ['https://swapi.co/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:11:50.376000Z',
        edited: '2014-12-20T21:17:50.311000Z',
        url: 'https://swapi.co/api/people/3/',
    },
];