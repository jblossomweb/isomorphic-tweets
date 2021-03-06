# isomorphic-tweets
Self-learn React. Use it to build an isomorphic Javascript application involving websockets.

## Credit:
Manually forked from:
https://github.com/scotch-io/react-tweets

as part of Scotch tutorial:
https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js

And customized as follows (work in progress):
- .env instead of config hardcodes (done)
- Jade instead of Handlebars (to do)
- fa icon instead of deprecated svg spinner (to do)

## Real Time Twitter Stream with Node and React

Code repository for the tutorial by @kenwheeler: [Build A Real-Time Twitter Stream with Node and React.js](http://scotch.io/tutorials/javascript/build-a-real-time-twitter-stream-with-node-and-react-js)

## Requirements

- node and npm

## How to Use

1. Clone the repo: `git clone git@github.com:jblossomweb/isomorphic-tweets`
2. Go into folder: `cd isomorphic-tweets`
3. Install dependencies: `npm install`
4. Create local MongoDB database called **react-tweets** (configured in `server.js`)
5. Replace credentials for Twitter API (configured in `config.js`)
6. Start the app: `node server.js`
7. View in browser at: `http://localhost:8080`
8. Tweet away!
