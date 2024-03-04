
import { Button, Modal } from 'flowbite-react';

import typeColors from '../../api/typeColors.json'
import typeDescriptions from '../../api/typeDescriptions.json'
// eslint-disable-next-line react/prop-types
export const DialogInfo = ({ pokemon, show, onClose }) => {
    const colors = typeColors;

    return (
        <Modal className='dark:bg-black ' show={ show } onClose={ onClose }>
            <Modal.Header className='dark:bg-neutral-800 flex'>
                <div className='flex'>
                    <svg className="mr-1 pt-1 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.6-8.5h0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>Poke-info</p>

                </div>

            </Modal.Header>
            <Modal.Body className=' dark:bg-neutral-800'>
                <div className="p-4 rounded shadow-md flex flex-col lg:flex-row">
                    <div className="mb-4 lg:mr-4 lg:flex-shrink-0">
                        <img
                            src={ pokemon.ThumbnailImage }
                            alt={ pokemon.ThumbnailAltText }
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <h2 className=" dark:text-white text-2xl font-bold mb-4">{ pokemon.name }</h2>
                        <p className=" dark:text-white italic  text-gray-700 mb-2"> '{ typeDescriptions[pokemon.type[0]] }' </p>

                        <p className="dark:text-white text-gray-700 mb-2">
                            <span className="font-semibold">Number:</span> #{ pokemon.number }
                        </p>
                        <p className="dark:text-white text-gray-700 mb-2">
                            <span className="font-semibold">Height:</span> { pokemon.height } inches
                        </p>
                        <p className="dark:text-white text-gray-700 mb-2">
                            <span className="font-semibold">Weight:</span> { pokemon.weight } lbs
                        </p>
                        <p className="dark:text-white text-gray-700 mb-2">
                            <span className="font-semibold">Abilities:</span> { pokemon.abilities.join(', ') }
                        </p>

                        <div className=" flex flex-wrap gap-2 mb-4">
                            <p className="dark:text-white font-semibold text-gray-700">Type:</p>
                            { pokemon.type.map((type, index) => (
                                <span key={ index } className={ `${colors[type]}  ring-zinc-100 px-3 py-1 rounded text-white` }>
                                    { type }
                                </span>
                            )) }
                        </div>

                        <div className=" flex flex-wrap gap-2 mb-4">
                            <p className=" dark:text-white font-semibold text-gray-700">Weaknesses:</p>
                            { pokemon.weakness.map((weakness, index) => (
                                <span key={ index } className={ `${colors[weakness.toLowerCase()]} px-3 py-1 rounded text-white` }>
                                    { weakness }
                                </span>
                            )) }
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='dark:bg-neutral-800 '>
                {/* <Button className='dark:bg-neutral-900 bg-zinc-500 ' onClick={ onClose }>
                    Capture
                </Button> */}
            </Modal.Footer>
        </Modal>
    );
};
