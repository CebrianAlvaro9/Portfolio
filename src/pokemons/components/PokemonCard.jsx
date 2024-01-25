import { Button, Card } from 'flowbite-react';
import { getPokemons } from '../../slices/pokemon/Thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './pokemoncard.css'
export const PokemonCard = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page, type } = useSelector(state => state.pokemons);



    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight ) {
            dispatch(getPokemons(page + 1));
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (




        <><div className='flex flex-wrap justify-center' >
            {
                pokemons.map((pokemon, index) => (
                    <div key={pokemon.ThumbnailAltText} className="w-full p-2 lg:w-1/4 md:w-1/2 ">
                        <Card
                            className=" dark:text-white dark:bg-neutral-700"
                            imgAlt={pokemon.ThumbnailImage}
                            imgSrc={pokemon.ThumbnailImage}
                        >
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {pokemon.name}
                                </h5>
                            </a>

                            <div className="flex items-center justify-between">

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
        </div>
            <Button className='mr-4'
                disabled={page === 1}
                onClick={() => dispatch(getPokemons(page+ 1))}
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
