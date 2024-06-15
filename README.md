# React handson

Getting handson with React. The main idea is to learn optimizations while builidng SPAs. [Source](https://martinfowler.com/articles/data-fetch-spa.html)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Build tools

1. Formatting check: `npm run fmt`
2. Formatting Fix: `npm run fmt-fix`
3. Lint check: `npm run lint`
4. Lint Fix: `npm run fix`

## Optimizations

1. Request Waterfalls and Fetch-On-Render -> Fetch then render.
   Both UserBrief and Friends are presentational components that react to the passed data. This way we could develop these component separately (adding styles for different states, for example). These presentational components normally are easy to test and modify as we have separate the data fetching and rendering.
2.
