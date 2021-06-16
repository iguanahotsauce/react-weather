import PropTypes from 'prop-types'
import ForecastDay from './ForecastDay'

const Forecast = ({ forecast }) => {
    return (
        <div className='forecast'>
            {forecast.map((forecastDay) => <ForecastDay key={forecastDay.dt} day={forecastDay} />)}
        </div>
    )
}

Forecast.propTypes = {
    forecast: PropTypes.array
}

export default Forecast
