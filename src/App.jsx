import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard,Login } from './Components'


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace, conditions,setLatitude,setLongitude } = useStateContext()
  const [lon, setLon] = useState('');
  const [lat, setLat] = useState(''); // Add this line
  const [displayCount, setDisplayCount] = useState(3);
  
  console.log(values)

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, I'm using a basic check for demo purposes
    setLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  

  const submitLocation = () => {
    // Check if both latitude and longitude are provided
    if (lat && lon) {
      if(lat>90 || lat<-90 || lon>180 || lon<-180){
        alert("Invalid Values.Please Recheck");
        return
      }
      console.log(`Searching by location: Latitude - ${lat}, Longitude - ${lon}`);
      setLatitude(lat);
      setLongitude(lon);
    } else {
      console.error('Please enter both latitude and longitude');
    }
  };

  const handleMoreClick = () => {
    setDisplayCount((prevCount) => prevCount + 4); // Increase the count by 4 for the next set of cards
  };

  const handleSeeLessClick = () => {
    setDisplayCount((prevCount) => Math.max(3, prevCount - 4)); // Decrease the count by 4, but not below 3
  };

  const handleLogout = () => {
   
    setLoggedIn(false);
    
  };

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
     
        
          {/* <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' /> */}
          {/* <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sumit the form
              submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} /> */}
          
        
  <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex justify-between items-start p-2 mx-auto mt-5'>
    <input
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          submitLocation();
        }
      }}
      type='text'
      placeholder='Latitude'
      className='focus:outline-none w-[5rem] text-[#212121] text-lg'
      value={lat}
      onChange={(e) => setLat(e.target.value)}
    />
    <input
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          submitLocation();
        }
      }}
      type='text'
      placeholder='Longitude'
      className='focus:outline-none w-[5rem] text-[#212121] text-lg'
      value={lon}
      onChange={(e) => setLon(e.target.value)}
    />
  </div>




      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wind_speed}
          humidity={weather.humidity}
          temperature={weather.temp}
          // heatIndex={weather.heatindex}
          iconString={conditions.icon}
          conditions={conditions.description}
        />

        {/* <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            values.daily?.slice(1,4).map(curr => {
              return (
                <MiniCard
                  key={curr.dt}
                  time={curr.dt}
                  temp={curr.temp.day}
                  iconString={curr.weather[0].icon}
                />
              )
            })
          }
        </div> */}
        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
        {values.daily?.slice(1, displayCount+1).map((curr) => (
          <MiniCard key={curr.dt} time={curr.dt} temp={curr.temp.day} iconString={curr.weather[0].icon} />
        ))}

        {displayCount < values.daily?.length && (
        <button onClick={handleMoreClick} className='bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 mt-4 rounded-md hover:opacity-80 transition duration-300'>
          See More...
        </button>
      )}

      {displayCount > 3 && (
        <button onClick={handleSeeLessClick} className='bg-gradient-to-r from-red-500 to-pink-500 text-white p-2 mt-4 rounded-md hover:opacity-80 transition duration-300'>
          See Less
        </button>
      )}
      </div>
      </main>
      <button
        onClick={handleLogout}
        className='bg-red-500 text-white p-2 mt-4 absolute bottom-4 right-4'
      >
        Log Out
      </button>
    </div>
  )
}

export default App
