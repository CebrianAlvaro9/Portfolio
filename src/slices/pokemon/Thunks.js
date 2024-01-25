import { pokemonApi } from '../../api/pokeApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

import pokemonJSON from '../../api/pokemons.json';

const pokemons = pokemonJSON.filter(
    (value, index, self) => self.findIndex(obj => obj.name === value.name) === index
);

export const getPokemons = (page = 1, pageSize = 8, type = 0) => {


    return (dispatch, getState) => {

        dispatch(startLoadingPokemons());
        if (page < 0) {
            console.log("Página no válida");
            return;
        }
        const startIndex = (page - 1) * pageSize;
        const endIndex = pageSize*page;

        dispatch(setPokemons({ pokemons: pokemons.slice(0, endIndex), page: page + 1, type: type }));


    }






} 