FROM node:16-alpine

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]