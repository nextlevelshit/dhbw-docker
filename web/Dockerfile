FROM node:lts-slim as builder

WORKDIR /app

COPY ./package*.json ./

RUN npm i --no-audit --no-fund --progress=false --no-warnings --log-level=error
COPY ./ ./

ENV NODE_ENV="development"

EXPOSE 8080

CMD ["npm", "start"]