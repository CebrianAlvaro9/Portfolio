import { Carousel } from 'flowbite-react';

export const CarrouselPokemon = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 xl:w-12/12">
    <Carousel slideInterval={5000}>
      <img src="https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2015/11/26/CF444504-29E2-4906-BAF6-490E09C1C98E/98.jpg?crop=899,506,x0,y37&width=1900&height=1069&optimize=high&format=webply" alt="..." />
    </Carousel>
  </div>
  )
}
