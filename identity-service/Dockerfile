# use the official node.js 18 image with alpine linux as base image

FROM node:18-alpine

# working directory inside container
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["node", "src/server.js"]