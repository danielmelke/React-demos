import { useState, useEffect } from 'react';
import './App.css';
import Weather from './Components/Weather';
import axios from 'axios';
import localforage from 'localforage';
import { setupCache } from 'axios-cache-adapter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const cache = setupCache({
  maxAge: 60 * 60 * 1000,
  store: localforage,
  exclude: {
      query: false
  }
});

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/onecall",
  adapter: cache.adapter
});

const apiKey = '86ff7abe9eae9d2260427a808a5a3931';

function App() {
  const [ data, setData ] = useState([]);
  const [ coord, setCoord ] = useState([ 47.5, 19.04]);
  const [ city, setCity ] = useState('Budapest');
    
  useEffect(()=>{
      axiosInstance.get('', {
          params: {
              lat: coord[0],
              lon: coord[1],
              exclude: 'minutely,hourly,alerts',
              lang: 'hu',
              appid: apiKey
          }
      })
      .then(response => setData(response.data))
      .catch(error => {console.error(error);alert("Valami hiba történt :(")});
  }, [coord]);

  const cities = [
    {value: [ '47.5', '19.14' ], label: "Budapest"},
    {value: [ '47.53', '21.63' ], label: "Debrecen"},
    {value: [ '48.1', '20.78' ], label: "Miskolc"},
    {value: [ '46.25', '20.15' ], label: "Szeged"},
    {value: [ '46.08', '18.23' ], label: "Pécs"},
    {value: [ '47.68', '17.64' ], label: "Győr"},
    {value: [ '47.96', '21.72' ], label: "Nyíregyháza"},
    {value: [ '46.91', '19.69' ], label: "Kecskemét"},
    {value: [ '47.19', '18.41' ], label: "Székesfehérvár"},
    {value: [ '47.23', '16.62' ], label: "Szombathely"},
    {value: [ '46.45', '16.99' ], label: "Nagykanizsa"}
  ];

  const Dropdown = (cities) => {
    return (
      <div className="form-group col-md-6 offset-md-3 my-5 px-1">
        <h3 className="text-center">Város kiválasztása: </h3>
        <select className="form-control bg-dark text-light custom-select custom-select-lg"
          value={city}
          onChange={e => handleChange(e)}>
          {cities.map(c => (
            <option key={c.label} value={c.label}>{c.label}</option>
          ))}
        </select>
      </div>
    );
  }

  const handleChange = (e) => {
    let c = e.target.value;
    cities.forEach(obj => {
      if (c === obj['label']) {
        setCity(obj['label']);
        setCoord(obj['value']);
      }
    });
  }

  return (
    <div>
      <h1 className="display-4 text-center my-3">Időjárás alkalmazás</h1>
      {Dropdown(cities)}
      {(data.current !== undefined)?<Weather data={data} city={city} />:""}
    </div>
  );
}

export default App;
