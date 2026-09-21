FROM node:20-alpine

RUN apk update

RUN apk add iputils

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]
