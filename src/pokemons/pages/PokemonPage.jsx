
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
        <div></div>

      </div>
      {/* <div className="">
        <CarrouselPokemon />
      </div> */}
      <div className="box-border w-full p-4 flex flex-col items-center justify-center">

        <SearchInput />
        <h1 className='mt-4 dark:text-white text-xl  w-full flex justify-center'>Total results: { pokemonsSroll.length } </h1>
        <div className="flex flex-wrap justify-center mt-4 w-full">
          <PokemonList />
        </div>
      </div>


    </div>

  )
}

