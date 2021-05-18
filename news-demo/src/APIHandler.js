import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';
import localForage from 'localforage';
import {setupCache} from 'axios-cache-adapter';

export const APIHandler = createContext();

const cache = setupCache({
    maxAge: 60 * 60 * 1000,
    store: localForage,
    exclude: {
        query: false
    }
});

const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines",
    adapter: cache.adapter
});

export const APIHandlerProvider = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance.get('', {
            params: {
                country: 'hu',
                category: 'technology',
                apiKey: "e55d92c0a1a44d3bb990de41af33ef21"
            }
        })
        .then((response) => setData(response.data))
        .catch((error) => {console.error(error);alert("Something went wrong :(")});
    }, []);

    return (
        <APIHandler.Provider value={{data}}>
            {props.children}
        </APIHandler.Provider>
    );
}