FROM node:14

WORKDIR /index

COPY package*.json ./

COPY .babelrc ./

RUN npm install

COPY . .

CMD ["node", "start"] 