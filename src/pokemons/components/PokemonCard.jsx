import { Button, Card } from 'flowbite-react';
import { getPokemons } from '../../slices/pokemon/Thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const PokemonCard = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);

    

    useEffect(() => {
        dispatch(getPokemons());
    }, [])
    return (


        <>
            {
                pokemons.map((pokemon, index) => (
                    <div className="w-full p-2 lg:w-1/4 md:w-1/2 mb-4 lg:mb-0">
                        <Card key={pokemon.url}
                            className="max-w-sm h-full dark:text-white dark:bg-neutral-700"
                            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                            imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${page * 8 - (7 - index)}.svg`}
                        >
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {pokemon.name}
                                </h5>
                            </a>

                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{index + 8 * page}$</span>
                                <a
                                 
                                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Add to cart
                                </a>
                            </div>
                        </Card>
                    </div>
                ))
            }
             <Button className='mr-4'
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page-1))}
            >
                Back
            </Button>

            <p className='dark:text-white mr-4 mt-2'>Page: {page}</p>
            <Button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Next
            </Button>


        </>


    );
}
