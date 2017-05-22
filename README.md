# Coding Exercise

Write an application that gives you the weather forecast for USA States.

Sample endpoint:

https://developer.yahoo.com/weather/

https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys


### Entry point for Webpack is:

```
scripts/site.js
```

In order to run the application:

First install node modules

```
$ npm install
```

Then using 2 terminals, run the following:

```
$ npm run watch
$ nodemon server
```

By default, this will start up on

```
http://localhost:3010
```
