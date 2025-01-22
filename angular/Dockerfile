FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
RUN adduser -D myuser
USER myuser
COPY --from=build --chown=myuser:myuser  /app/dist/angular .
EXPOSE 4000
CMD ["node", "server/server.mjs"]


