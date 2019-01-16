# vue-robot-tutorial
A simple Vue.js tutorial app from PluralSight

## Dev Instructions

1. `docker network create vrt`, If you don't want to use docker you can skip this and install node and npm
1. cd into client and follow instruction in client/README.md to start the client
1. cd into server and follow instruction in server/README.md to start the server

# Production Deploys
1. In here must use Docker or go home.
1. Build prod image: `docker build -t vrt-prod .` note we're using the server (in our case "Express") to serve the app.
1. Run: `docker run -it --rm -p 8081:8081 vrt-prod`
