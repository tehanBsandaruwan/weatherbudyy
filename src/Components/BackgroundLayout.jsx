import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'

import Clear from '../assets/images/background.jpg'


const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  // useEffect(() => {
  //   if (weather.conditions) {
  //     let imageString = weather.conditions
  //     if (imageString.toLowerCase().includes('background')) {
  //       setImage(Clear)
    
  //     }
  //   }
  // }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout