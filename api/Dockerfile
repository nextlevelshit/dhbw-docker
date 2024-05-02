FROM node:lts-alpine as builder

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY ./package*.json ./

RUN npm i --no-audit --no-fund --progress=false --no-warnings --log-level=error
COPY ./ ./

COPY ./docker-entrypoint.sh ./
RUN chmod +x /app/docker-entrypoint.sh

USER node

EXPOSE 8080

ENTRYPOINT ["/app/docker-entrypoint.sh"]

