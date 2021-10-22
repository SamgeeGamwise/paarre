# To run locally

1. Clone this repository

2. `npm install`

3. `npm run serve`

# Code Overview

## Technologies

- [Typescript](https://www.typescriptlang.org/) - Add strong typing to JavaScript

- [Vue.js 3](https://v3.vuejs.org/) - JavaScript Framework for web application

- [Vuex](https://vuex.vuejs.org/) - State Management for Vue

- [Vue Router](https://router.vuejs.org/) - Router for Vue to create a Single Page Applications

- [SCSS](https://sass-lang.com/documentation/syntax) - CSS pre-processor to ensure my sanity

## Application Structure

- `main.ts` - Creates app and mounts

- `App/` - Contains the application layout

- `models/` - Contains application models

- `router/` - Contains the Vue Router configuration

- `store/` - This folder contains the route definitions for our API

  - `actions.ts` - Vuex Actions to asynchronously trigger a mutation

  - `getters.ts/` - Vuex Getters for retrieving store data

  - `mutations.ts` - Vuex Mutations for modifying store data

  - `state.ts/` - Vuex State to defines the store

- `styles/` - Contains global .scss files

- `views/` - Contains application views, .ts files, and .scss files

## Backend

[Project Backend Repository](https://github.com/Xoelos/paarre-backend)
