import { Carousel } from 'flowbite-react';

export const CarrouselPokemon = () => {
  return (
    <div className="h-40 sm:h-40 sm:p-0 hidden sm:block xl:h-40 2xl:h-62 w-12/12 2xl:px-8">
      <Carousel slideInterval={ 5000 }>
        <img src="https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2015/11/26/CF444504-29E2-4906-BAF6-490E09C1C98E/98.jpg?crop=899,506,x0,y37&width=1900&height=1069&optimize=high&format=webply" alt="..." />
      </Carousel>
    </div>
  )
}
