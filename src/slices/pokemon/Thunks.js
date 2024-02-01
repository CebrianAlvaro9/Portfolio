import {
  setPokemonData,
  setPokemons,
  startLoadingPokemons,
} from "./pokemonSlice";

import pokemonJSON from "../../api/pokemons.json";

const pokemons = pokemonJSON.filter(
  (value, index, self) =>
    self.findIndex((obj) => obj.name === value.name) === index
);

//hacer el filter por encima y que solo recoja este aqui
//splitear en dos una sera la que recoja la info con el filter y seateara el array de pokemons
// la otra se encargara simplemente de hacer scroll infinito sobre esos pokemons

export const getPokemonsData = (query = "") => {
  let pokemonsFiltered = pokemons;

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    pokemonsFiltered = pokemonsFiltered.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    dispatch(setPokemons({ pokemonsSroll: pokemonsFiltered }));
  };
};

export const getPokemonsScroll = (page = 1, pageSize = 8) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    if (page < 0) {
      console.log("Página no válida");
      return;
    }
    const currentState = getState();
    const { pokemonsSroll } = currentState.pokemons;
    const endIndex = pageSize * page;

    if (
      (pokemonsSroll.length <= 8 && page > 1) ||
      (pokemonsSroll.length > 8 && pokemonsSroll.length / 8 < page)
    ) {
      return;
    }
    dispatch(
      setPokemonData({
        pokemons: pokemonsSroll.slice(0, endIndex),
        page: page + 1,
      })
    );
  };
};
