FROM node:21-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY bootstrap.sh .
RUN chmod +x bootstrap.sh

EXPOSE 3000

CMD ["./bootstrap.sh"]
