


import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

export const SidebarPokemon =()=> {
  return (
    <Sidebar className='w-full ' aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items className=''>
        <Sidebar.ItemGroup>
          <Sidebar.Item  icon={HiChartPie}>
            All
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
