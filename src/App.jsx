import { Outlet } from "react-router-dom"
import { Navbar1 } from "./components/Navbar1"
import {  Flowbite } from 'flowbite-react';



export const App = () => {
    return (
        <Flowbite>
             <div   >
            <Navbar1/>
            <Outlet/>
            </div>
      </Flowbite>
           
     
    )
}