import { PokemonCards } from './PokemonCards'
import useNearScreen from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { getPokemonsData, getPokemonsScroll } from '../../slices/pokemon/Thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef } from 'react';


export const PokemonList = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page, query } = useSelector(state => state.pokemons);
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: isLoading ? null : externalRef, once: false })

    const debouncedHandleNextPage = useCallback(debounce(
        () => dispatch(getPokemonsScroll(page)), 200
    ), [page])

    const debouncedHandleData = useCallback(debounce(
        () => dispatch(getPokemonsData(query)), 50
    ), [query])


    //this will load the data with the query in order to reuse the inifite scroll
    useEffect(() => {
        debouncedHandleData();
    }, [debouncedHandleData, query])


    useEffect(() => {
        //this will activate the infinite scroll
        if (isNearScreen) {
            debouncedHandleNextPage();
            console.log(query)
        }//this will set the inicial state in ordert to only show the first page
        if (query.length >= 0 && page == 1) {
            console.log('dentrooo');
            debouncedHandleNextPage();
        }
    }, [debouncedHandleNextPage, isNearScreen, query, page]);

    return (
        <>
            { pokemons.length ?
                pokemons.map((pokemon) => (
                    <PokemonCards key={ pokemon.name } pokemon={ pokemon } />
                ))
                :
                <h1 className='dark:text-white text-xl'>Sorry, no Pokémon match your search criteria.</h1>


            }

            <div id="visor" ref={ externalRef } />
        </>
    )
}
