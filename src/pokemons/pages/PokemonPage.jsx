
import '../styles/pokemons.css'
// import { SidebarPokemon } from '../components/SidebarPokemon'
import { CarrouselPokemon } from '../components/CarrouselPokemon'
import { SearchInput } from '../components/SearchInput'

import { PokemonList } from '../components/PokemonList';
import { useSelector } from 'react-redux';


export const PokemonPage = () => {
  const { pokemonsSroll = [] } = useSelector(state => state.pokemons);

  return (

    <div className='container mx-auto border-box'>
      <div className='flex items-center justify-between    mb-2 p-1'>
        <div></div>
        <div className='mt-2  inline-flex  space-x-2'>
          <h1 className='dark:text-white font-mono text-6xl font-semibold'>Pokedex</h1>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" alt="" />
        </div>
        <div className=' w-10 '>
          <svg className=" mt-4 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 4c0-.6.4-1 1-1h1.5c.5 0 .9.3 1 .8L7.9 6H19a1 1 0 0 1 1 1.2l-1.3 6a1 1 0 0 1-1 .8h-8l.2 1H17a3 3 0 1 1-2.8 2h-2.4a3 3 0 1 1-4-1.8L5.7 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      {/* <div className="">
        <CarrouselPokemon />
      </div> */}
      <div className="box-border w-full p-4 flex flex-col items-center justify-center">

        <SearchInput />
        <h1 className='mt-4 dark:text-white text-xl  w-full flex justify-center'>Total results: { pokemonsSroll.length } </h1>
        <div className="flex flex-wrap justify-center mt-4 w-3/4">
          <PokemonList />
        </div>
      </div>


    </div>

  )
}

