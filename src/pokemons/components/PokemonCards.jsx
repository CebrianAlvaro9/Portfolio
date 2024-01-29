import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';


export const PokemonCards = ({ pokemon }) => {

    const { pokemons = [] } = useSelector(state => state.pokemons);
    return (
        <>
            <div className={`w-full p-2 ${pokemons.length > 2 ? 'lg:w-1/4 md:w-1/2' : ''}`}>
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
        </>


    );
}
