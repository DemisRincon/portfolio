FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .
COPY ./next.config.ts /next.config.ts

EXPOSE 3000

CMD ["npm", "run", "dev"]