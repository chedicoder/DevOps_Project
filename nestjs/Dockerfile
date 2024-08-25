FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
# définir le user et le groupe des fichiers copiés dans l'image Docker <user>:<group>
COPY  . .
RUN npm run build

FROM node:22-alpine
RUN adduser -D myuser
USER myuser
WORKDIR /app
COPY --from=build --chown=myuser:myuser /app/package*.json ./
COPY --from=build --chown=myuser:myuser /app/node_modules ./node_modules
COPY --from=build --chown=myuser:myuser /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]