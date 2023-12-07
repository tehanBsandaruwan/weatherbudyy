/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import '../index.css';


const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,

  iconString,
  conditions,
}) => {
  
  const { time } = useDate();
  const [icon,setIcon] = useState('')

  useEffect(() => {
    setIcon('/src/assets/weatherIcons/'+iconString+'.svg');
  }, [iconString]);

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" width={'36%'}/>
        <p className='text-5xl font-bold-pacifico italic flex justify-center items-center' >{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
       
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-blue-400'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
      <div className='w-full p-2 mt-2 flex justify-between items-center'>
        {/* <p className='font-semibold-montserrat text-lg'><center><></>Have a Great Day!</center></p> */}
        
      </div>
      <hr className='bg-slate-600' />
      
    </div>
  );
};

export default WeatherCard;
