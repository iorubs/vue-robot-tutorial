# vue-robot-tutorial server
A simple API

## Setup using docker
```
docker run -it --rm \
  --name vrt-server \
  --workdir /app \
  -v "$(pwd)":/app \
  --network vrt \
  -p 8081:8081 node:11-alpine sh
```

The run comman will start a dev container with a shell so you can run the following commands inside that container.

## Project setup
```
npm install
```

### Run server
```
npm start
```
