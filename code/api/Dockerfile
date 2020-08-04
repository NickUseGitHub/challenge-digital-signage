FROM node:12.16.3-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build-ts

EXPOSE 3001

CMD [ "yarn", "start" ]