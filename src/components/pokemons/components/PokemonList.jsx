import { PokemonCards } from './PokemonCards'
import useNearScreen from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { getPokemonsData, getPokemonsScroll } from '../../slices/pokemon/Thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollToTop from "react-scroll-to-top";



export const PokemonList = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page, query,filter } = useSelector(state => state.pokemons);
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: isLoading ? null : externalRef, once: false })
    const [visible, setVisibe] = useState(false)
    const debouncedHandleNextPage = useCallback(debounce(
        () => dispatch(getPokemonsScroll(page)), 200
    ), [page])

    const debouncedHandleData = useCallback(debounce(
        () => dispatch(getPokemonsData(query, filter)), 50
    ), [query, filter])


    //this will load the data with the query in order to reuse the inifite scroll
    useEffect(() => {
        debouncedHandleData();
    }, [debouncedHandleData, query])


    useEffect(() => {
        //this will activate the infinite scroll
        if (isNearScreen) {
            debouncedHandleNextPage();
        }//this will set the inicial state in ordert to only show the first page
        if (query.length >= 0 && page == 1 ) {
            debouncedHandleNextPage();
        }
    }, [debouncedHandleNextPage, isNearScreen, query, page,visible]);

    return (
        <>
            { pokemons.length ?
                pokemons.map((pokemon) => (
                    <PokemonCards className='relative' key={ pokemon.name } pokemon={ pokemon } />
                ))
                :
                <h1 className='dark:text-white text-xl'>Sorry, no Pokémon match your search criteria.</h1>
            }
            <ScrollToTop smooth />
           


            <div id="visor" ref={ externalRef } />
        </>
    )
}
