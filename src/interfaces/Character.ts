import { CommonResult } from './CommonResult';

export interface Character extends CommonResult {
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    species: string[];
    vehicles: string[];
    starships: string[];
}
