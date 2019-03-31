FROM quay.io/ivanvanderbyl/docker-nightmare:latest

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/public
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn
RUN yarn add global forever

# Bundle app source
COPY . /usr/src/app

# Port used by app
EXPOSE 8080

CMD "forever app.js"
