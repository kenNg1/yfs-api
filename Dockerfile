FROM node:7.7.2-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet
RUN npm install react-scripts@0.9.5 -g
RUN npm install -g sequelize-cli

COPY . .
