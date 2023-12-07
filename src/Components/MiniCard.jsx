/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import '../index.css';

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()
  useEffect(() => {
    setIcon('/src/assets/weatherIcons/'+iconString+'.svg');
    console.log(new Date(time),temp,iconString)
  }, [iconString]);


  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
      {new Date(time * 1000).toLocaleDateString('en', { weekday: 'long' })}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
   
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard