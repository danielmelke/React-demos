# News-demo
## Soon to be published at GitHub Pages
### English version
This simple application displays the top technology news published in Hungary, in hungarian language.\
Used packages:
+ React Js - base of everything
+ Bootstrap - for quick and simple styling
+ Axios - for a better API call handler
+ localforage - for a browser based cache mechanism

The API used here is made by [NewsAPI](https://newsapi.org/). After signing up, the user gets their own unique API key, which they will need to place in their API calls. The free plan offers limited usage, so I used localforage here as well to not let the number of calls reach a limit in a given time.\
Localforage stores the API data, that has been required and collected, in the cache, so even after refreshing the page, the site will not make another API call.
