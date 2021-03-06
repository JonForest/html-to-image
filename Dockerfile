FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/public
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install forever -g

# Bundle app source
COPY . /usr/src/app

# Port used by app
EXPOSE 8080

CMD [ "forever", "app.js"]