// Router.jsx

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { App } from "../App";
import { PokemonPage } from "../pokemons/pages/PokemonPage";
import { CVPage } from "../CV/pages/CVPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    path: '/pokemons',
                    element: <PokemonPage />
                },
                {
                    path: '/',
                    element: <CVPage />
                },
                {
                    path: '*',
                    element: <Navigate to={'/'} replace={true} />
                }
            ]
          },
          
    ],
)

export const Router = () => {
  return <RouterProvider router={ router } />
}