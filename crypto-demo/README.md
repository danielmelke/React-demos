# Crypto-demo
## Soon to be published at GitHub Pages
### English version
This simple application displays the top cryptocurrencies by their total market cap. The prices could be set to US dollar '$', Euro '€', or Hungarian Forint 'Ft'.\
Used packages:
+ React Js - base of everything
+ Bootstrap - for quick and simple styling
+ Axios - for a better API call handler
+ localforage - for a browser based cache mechanism

The API used here is made by [CoinGecko](https://www.coingecko.com/en/api), providing a free API for developers to use, with limited calls. That is why I looked for browser based cache technology.\
Localforage stores the API data, that has been required and collected, in the cache, so even after refreshing the page, the site will not make another API call.
