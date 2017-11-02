# Use an official Node runtime as a parent image
FROM node:boron

# Create app directory
WORKDIR /usr/src/client

# Install app dependencies
COPY package.json .

# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3030
EXPOSE 8080
EXPOSE 80
CMD [ "npm", "start" ]
