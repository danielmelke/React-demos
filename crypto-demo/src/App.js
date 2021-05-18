import './App.css';
import {useEffect, useState} from 'react';
import Coin from './Coin';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import localforage from 'localforage';

const cache = setupCache({
  maxAge: 60 * 60 * 1000,
  store: localforage,
  exclude: {
      query: false
  }
});

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/markets",
  adapter: cache.adapter
});

function App() {
  const [coinData, setCoinData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('huf');

  useEffect(() => {
    axiosInstance.get('', {
      params: {
        vs_currency: selectedOption,
        order: 'market_cap_desc',
        per_page: '30',
        page: '1',
        sparkline: 'false'
      }
    })
    .then(response => {
      setCoinData(response.data);
    })
    .catch(err => {alert("Something went wrong :(");console.error(err);});
  }, [selectedOption]);

  const options = [
    {value: 'huf',
    label: 'Forint'},
    {value: 'eur',
    label: 'Euro'},
    {value: 'usd',
    label: 'US Dollar'}
  ];
  
  const Dropdown = (options) => {
    return (
        <div className="form-group col-md-6 offset-md-3 my-5">
          <h3 className="text-center">Select stock currency: </h3>
          <select className="form-control bg-dark text-light custom-select custom-select-lg"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {options.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
    );
  }
  
  return (
    <div className="container-fill">
      <h1 className="text-center my-3">Top 30 crypto-currencies</h1>
      <h3 className="text-center my-3">by current market cap value</h3>
      {Dropdown(options)}
      <div className="row justify-content-around">
        {
          coinData.map(coin => {
            return (
              <Coin data={coin} lang={selectedOption} key={coin.id}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
