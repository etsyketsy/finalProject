FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY /frontend/package.json /usr/src/app/package.json
RUN npm install --silent
COPY /frontend /usr/src/app
RUN npm run build
