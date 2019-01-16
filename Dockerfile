FROM node:11-alpine as build

LABEL maintainer="ruben.vasconcelos3@mail.dcu.ie"

WORKDIR /app

COPY client/package.json client/package-lock.json ./
RUN npm install

COPY client/ .
RUN npm run build

FROM node:11-alpine

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY client/package.json client/package-lock.json ./
RUN npm install

COPY --chown=node:node server/ .
COPY --chown=node:node --from=build /app/dist ./dist

CMD ["npm", "start"]
