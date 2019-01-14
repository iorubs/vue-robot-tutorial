# vue-robot-tutorial
A simple Vue.js tutorial app from PluralSight

## Setup using docker
```
docker build -t vrt .

docker run -it --rm \
  -v "$(pwd)":/home/node/app \
  -p 8080:8080 vrt sh
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
