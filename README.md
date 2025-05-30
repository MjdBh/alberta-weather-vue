# Alberta Weather Vue App

This is a Vue.js conversion of the original Alberta Weather React app. The application displays weather information for cities in Alberta, Canada. It has been migrated from Webpack to Vite for improved performance and developer experience.

## Project Setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Preview the production build
```
npm run preview
```

## Features

- Displays weather data for major Alberta cities
- Real-time updates of current time
- Ability to refresh individual city data
- Ability to refresh all cities at once

## Implementation Details

The application uses Vue 3 with TypeScript and Composition API. It maintains the same functionality and look and feel as the original React version but leverages Vue's reactive system and component structure.

## Vite Configuration

This project uses Vite instead of Webpack for faster development and build times. Key benefits:

- Instant server start
- Lightning-fast hot module replacement (HMR)
- Optimized builds
- Less configuration needed