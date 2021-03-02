FROM node:lts

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

ENV NODE_ENV=production

RUN npm ci

COPY src ./src


ENV PORT 8080
EXPOSE 8080

CMD ["node","src/server.js"]
