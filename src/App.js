import { useState, useEffect } from 'react'
import Header from './components/Header'
import Forecast from './components/Forecast'
import config from './config'

const App = () => {
    const [forecast, setForecast] = useState([])

    useEffect(() => {
      const getTasks = async () => {
        const weatherForecast = await fetchForecast()
        setForecast(weatherForecast)
      }
  
      getTasks()
    }, [])

    

    const fetchForecast = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Vancouver,WA,US&units=imperial&cnt=5&appid=${config.key}`)
        const data = await res.json()

        return data
    }

    return (
        <div className="container">
            <Header title='5 Day Forecast' />
            {forecast && <Forecast forecast={forecast.list} />}
        </div>
    );
}

export default App;
  