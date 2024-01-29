import { Button, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { DarkThemeToggle } from 'flowbite-react';
export const Navbar1 = () => {
  return (
    <Navbar className='dark:bg-neutral-800 bg-neutral-300 h-30 ' fluid rounded>
      <Navbar.Brand href="">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" className="mr-3 h-6 sm:h-9" alt="Alvaro Cebrian" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portfolio</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <DarkThemeToggle />
        {/* <Button>Get started</Button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=''>
        <NavLink
       
          className= {({ isActive }) =>
             isActive ? "text-green-500 text-xl " : "dark:text-white text-xl "
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            isActive ? "text-green-500 text-xl " : "dark:text-white text-xl "
          }
          to="/pokemons"
        >
          Pokemons
        </NavLink>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
