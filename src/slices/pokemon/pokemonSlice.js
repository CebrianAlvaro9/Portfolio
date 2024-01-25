import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        type: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            state.type = action.payload.type
        },
        setType: (state, action ) => {
            state.type = action.payload.type
        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, setType } = pokemonSlice.actions;