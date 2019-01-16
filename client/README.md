# vue-robot-tutorial
A simple Vue.js app

## Setup using docker
```
docker run -it --rm \
  --name vrt-client \
  --workdir /app \
  -v "$(pwd)":/app \
  --network vrt \
  -e API_URL='http://vrt-server:8081' \
  -p 8080:8080 node:11-alpine sh
```

The run comman will start a dev container with a shell so you can run the following commands inside that container.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
