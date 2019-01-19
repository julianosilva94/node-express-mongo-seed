FROM node:alpine

WORKDIR /usr/api

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]