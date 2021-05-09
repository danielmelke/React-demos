import React, { useState, useEffect } from 'react';
import axios from 'axios';
import localforage from 'localforage';
import {setupCache} from 'axios-cache-adapter';
import Plot from 'react-plotly.js';

function Stock() {
    const [ jData, setJData ] = useState([]);

    var loaded = false;

    const cache = setupCache({
        maxAge: 60 * 60 * 1000 * 24,
        store: localforage,
        exclude: {
            query: false
        }
    });

    const axiosCall = axios.create({
        baseURL: "https://www.alphavantage.co/query",
        adapter: cache.adapter
    });

    useEffect(() => {
        axiosCall.get('', {
            params: {
                function: "TIME_SERIES_DAILY_ADJUSTED",
                symbol: "TSLA",
                apikey: "Y38RMBSUT5M7O1IZ"
            }
        })
        .then((response) => setJData(response.data))
        .catch((error) => {alert("Something went wrong :(");console.error(error);});
    });

    if(jData[1] !== undefined){
        loaded = true;
    }

    function unpack(rows, key) {
        if(loaded) {
            console.log(rows);
            return rows[1].map(function(row) {
                return row[key];
            });
        }
    }

    return (
        <div>
            <h1>Részvénypiac illusztráció demo</h1>
            <Plot
                data={[
                    {
                        x: unpack(jData, 'Time Series (Daily)'),
                        open: unpack(jData, '1. open'),
                        high: unpack(jData, '2. high'),
                        low: unpack(jData, '3. low'),
                        close: unpack(jData, '4. close'),
                        increasing: {line: {color: 'green'}},
                        decreasing: {line: {color: 'red'}},
                        type: 'candlestick',
                        xaxis: 'x',
                        yaxis: 'y'
                    },
                ]}
                layout={ {width: 720, height: 480, title: 'Tesla részvények az utolsó 100 napban'} }
            />
        </div>
    );
}

export default Stock;