# Tōkyō Ice Cream Map

A React-Redux single-page application using Google Maps and Foursquare APIs to display a map of Tōkyō, highlighting places to get ice cream. 

Built using the Create-React-App for the final project of Udacity's Front-End Web Developer Nanodegree. 

## How to run

**Dependencies:**
* [Node.js](https://nodejs.org/en/)

**Dev mode, no Service Worker/caching**

* Download or clone this repo
* Navigate to the repo's local directory and `npm install`, then `npm start` 
* In your favourite browswer, navigate to `http://localhost:3000`

**Production mode, with Service Worker/caching** 

* Download or clone this repo
* Navigate to this repo's local directory and `npm install`, then `npm run build`
* Install [serve](https://github.com/zeit/serve): `npm install -g serve`
* Serve the build dir: `serve -s build`
* In your favourite browser, navigate to `http://localhost:5000`
