
import { getPokemons } from '../../slices/pokemon/Thunks';

import { Sidebar } from 'flowbite-react';
import {  HiChartPie } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { setPokemons, setType } from '../../slices/pokemon/pokemonSlice';

export const SidebarPokemon =()=> {
  const dispatch = useDispatch();


  return (
    <Sidebar className='w-full h-8/12 p-2' aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items className=''>
        <Sidebar.ItemGroup >
          <Sidebar.Item onClick={() => dispatch(getPokemons()) }className='dark:bg-black'  icon={HiChartPie}>
            All
          </Sidebar.Item>
          <Sidebar.Item onClick={() => dispatch(getPokemons(1,0,3))} className='dark:bg-black' icon={HiChartPie}>
            type 3
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
