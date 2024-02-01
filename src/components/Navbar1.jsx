import { Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { DarkThemeToggle } from 'flowbite-react';
export const Navbar1 = () => {
  return (

    <div className=" flex items-center justify-center sm:my-4 ">
      <Navbar className='dark:bg-neutral-800 bg-zinc-100 p-2 w-full sm:w-1/2 sm:rounded-full' fluid rounded>
        <Navbar.Brand href="">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" className="mr-3 h-6 sm:h-9 rounded-full" alt="Alvaro Cebrian" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portfolio</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle className=' dark:hover:bg-neutral-700 dark:focus:ring-neutral-700 dark:text-white dark:border-neutral-600' />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='px-4 sm:m-0 '>
          <NavLink
            className={ ({ isActive, }) =>
              isActive ? "text-green-400 text-xl" : "dark:text-white text-xl "
            }
            to="/"
          >
            <p className=' p-2 m-4 sm:m-0 rounded hover:bg-zinc-100 focus:ring-4 focus:outline-none focus:ring-gray-100  dark:hover:bg-neutral-700 dark:focus:ring-neutral-700 dark:border-neutral-600  '>
              Home
            </p>
          </NavLink>
          <NavLink

            className={ ({ isActive }) =>
              isActive ? "text-green-400 text-xl" : "dark:text-white text-xl "
            }
            to="/pokemons"
          >
            <p className='  p-2 m-4 sm:m-0 rounded hover:bg-zinc-100 focus:ring-4 focus:outline-none focus:ring-gray-100  dark:hover:bg-neutral-700 dark:focus:ring-neutral-700  dark:border-neutral-600 '>
              Pokemons
            </p>

          </NavLink>

        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}
