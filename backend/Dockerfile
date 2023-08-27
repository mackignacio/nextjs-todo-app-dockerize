FROM node:lts-alpine

WORKDIR /app

RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install -d tslib @types/node

COPY package*.json ./

RUN npm install

COPY .env ./.env

COPY . .

EXPOSE 5000

CMD [ "npx", "ts-node", "app.ts" ]