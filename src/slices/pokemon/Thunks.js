import { pokemonApi } from '../../api/pokeApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';



export const getPokemons = ( page = 0, back=0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        if (page < 0) {
            // Hacer algo en caso de página no válida, como no realizar ninguna solicitud
            console.log("Página no válida");
            return;
        }
        page = page-back*2
        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=8&offset=${ page * 8 }`);

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}