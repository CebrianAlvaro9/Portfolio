import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';

import typeColors from '../../api/typeColors.json'
export const PokemonCards = ({ pokemon }) => {

    const colors = typeColors

    const { pokemons = [] } = useSelector(state => state.pokemons);
    return (
        <div className={ 'w-full p-2 h-full lg:w-1/4 md:w-1/2' }>
            <Card
                className="dark:text-white dark:bg-neutral-700 "
                imgAlt={ pokemon.ThumbnailImage }
                imgSrc={ pokemon.ThumbnailImage }
            >
                <div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        { pokemon.name }
                    </h5>
                    <p>#{ pokemon.number }</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        { pokemon.type.map((type, index) => (
                            <span key={ index } className={ `px-3 py-1 rounded ${colors[type]}` }>
                                { type }
                            </span>
                        )) }
                    </div>
                    <span className=''></span>
                </div>

                {/* <div className="flex items-center justify-between mt-4">
                    <a
                        href="#"
                        className="w-4/6 rounded-lg flex items-center justify-center bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 text-white px-5 py-2.5 text-center text-sm font-medium dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-400"
                    >
                        Capture
                        <img className='w-1/6 ml-4' src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokeball_icon_136305.png" alt="" />
                    </a>
                </div> */}

            </Card>
        </div>
    );
}
