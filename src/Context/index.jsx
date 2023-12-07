import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'




const StateContext = createContext()
// 6.927079   79.861244
export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Colombo')
    const [longitude, setLongitude] = useState(79.861244)  
    const [latitude, setLatitude] = useState(6.927079)  
    const [thisLocation, setLocation] = useState('');
    const  [conditions,setConditions]=useState({});

    // fetch api
    const fetchWeather = async () => {
        const apiKey = 'b475d5ec83af2bba5294ca0e0c935b69'; // Replace with your OpenWeather API key
        // const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=b475d5ec83af2bba5294ca0e0c935b69`
    
        const options = {
            method: 'GET',
            url: apiUrl,
            params: {
                // q: place,
                // appid: apiKey,
                units: 'metric', // or 'imperial' for Fahrenheit
            },
        };
    
        try {
            const response = await axios.request(options);
            console.log(response.data);
    
            const thisData = response.data;
            setLocation(thisData.lat+','+thisData.lon);
            setValues(thisData); // OpenWeather API returns a single set of data
            setWeather(thisData.current);
            setConditions(thisData.current.weather[0])

            console.log(thisData)
        } catch (e) {
            console.error(e);
            // if the API throws an error.
            alert('Error fetching weather data');
        }
    };
    

    useEffect(() => {
        fetchWeather()
    }, [latitude,longitude])

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place,
            conditions,
            setLatitude,
            setLongitude

        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)