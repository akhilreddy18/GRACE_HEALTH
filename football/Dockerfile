FROM node:14

WORKDIR /football

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start