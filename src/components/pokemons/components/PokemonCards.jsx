import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';

import typeColors from '../../api/typeColors.json'
import { DialogInfo } from './DialogInfo';
import { useState } from 'react';

export const PokemonCards = ({ pokemon }) => {
    const colors = typeColors;
    const { pokemons = [] } = useSelector(state => state.pokemons);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={ 'w-full p-2 h-full  xl:w-1/5 md:w-1/3 lg:w-1/4' }>
            <Card
                className="dark:text-white dark:bg-neutral-700 transition ease-in-out hover:ring hover:ring-zinc-400 hover:-translate-y-1 hover:scale-110"
                imgAlt={ pokemon.ThumbnailImage }
                imgSrc={ pokemon.ThumbnailImage }
                onClick={ () => setOpenModal(true) }
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
                    <span className=""></span>
                </div>
            </Card>
            <DialogInfo pokemon={ pokemon } show={ openModal } onClose={ () => setOpenModal(false) } />
        </div>
    );
};