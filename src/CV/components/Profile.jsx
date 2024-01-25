import React from 'react'
import { Card } from 'flowbite-react';
export const Profile = () => {
  return (
<div role="status" class=" m-2 rounded bg-neutral-100 dark:bg-neutral-700 p-6  x space-y-8  md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
   <div class=" overflow-hidden rounded-full flex items-center justify-center w-full  bg-gray-300  sm:w-40 dark:bg-gray-700">
        <img  src="https://media.licdn.com/dms/image/D4D03AQHMTWU7Owx2IA/profile-displayphoto-shrink_800_800/0/1681715122389?e=1711584000&v=beta&t=LNi6ZFKvpShrjFkqqxy0DuIx4pusb2sn-AFZXqyxSkg" alt="" />
    </div>
    <div class="w-full ">
        <h1 class="text-3xl font-bold mb-4 dark:text-white">Hello! I am Alvaro Cebrian, a Front-End Developer</h1>
        <p class="text-gray-600 dark:text-gray-400">Welcome to my portfolio, where I demonstrate my expertise in building dynamic web applications using React. I utilize Redux Toolkit in each mini application, adhering to the best practices to ensure clean and maintainable code. Feel free to explore and discover the projects that showcase my skills.</p>
    </div> 
</div>
  )
}
