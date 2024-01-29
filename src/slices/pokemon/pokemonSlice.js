import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    type: 0,
    query: "",
    pokemons: [],
    pokemonsSroll: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemonData: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
      state.type = action.payload.type;
    },
    setPokemons: (state, action) => {
      state.pokemonsSroll = action.payload.pokemonsSroll;
    },
    setType: (state, action) => {
      state.type = action.payload.type;
    },
    setQuery: (state, action) => {
      state.query = action.payload.query;
      state.page = action.payload.page;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, setQuery, setPokemonData } =
  pokemonSlice.actions;
