# Tōkyō Ice Cream Map

A React-Redux single-page application using Google Maps and Foursquare APIs to display a map of Tōkyō, highlighting places to get ice cream. 

Built using the Create-React-App for the final project of Udacity's Front-End Web Developer Nanodegree. 

## How to run

**Dependencies:**
* [Node.js](https://nodejs.org/en/)

**Dev mode,no Service Worker/caching**

* Download or clone this repo
* Navigate to the repo's local directory and run `npm start` 
* Navigate to `http://localhost:3000` in your browser

**Production mode, with Service Worker/caching** 

* Run `npm build`
* Spin up a web server
  * Python 2.x: `python -m SimpleHTTPServer 8080`
  * Python 3.x: `-m http.server 8080`
  * Node serve:
    * `npm install -g serve`
    * `serve -s`

Using either Python option, navigate to http://localhost:8000 in your browser. Using Node serve, the appropriate address is http://localhost:5000 
