import axios from 'axios';


export const pokemonApi = axios.create({
    baseURL: 'https://www.pokemon.com/es/api/pokedex/'
});