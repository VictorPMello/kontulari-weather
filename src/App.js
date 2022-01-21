import { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';
import api from './services/api';

import './styles/global.css';

function App() {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(forecast).length === 0) {
      api
        .get("/?location=Salvador")
        .then((forecast) => { setForecast(forecast.data) })
        .catch((error) => { console.error(error) })
        .finally(() => { setLoading(false) });
    }
  }, [forecast])

  const Weather = loading || Object.keys(forecast).length === 0 ? (<h1>Loading....</h1>) : (<WeatherCard forecast={forecast} />);

  return (
    <div className="App">
      <h1>Kontulari Weather</h1>
      <SearchBox setForecast = {setForecast} setLoading = {setLoading} />
      {Weather}
    </div>
  );
}

export default App;
