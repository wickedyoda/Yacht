# Build Vue.js frontend
FROM node:20 AS build-stage

ARG VUE_APP_VERSION
ENV VUE_APP_VERSION=${VUE_APP_VERSION}

WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install --verbose
COPY ./frontend/ ./
RUN npm run build --verbose

# Deploy stage running only Node
FROM node:20-slim AS deploy-stage
WORKDIR /app
COPY --from=build-stage /app/dist ./dist
COPY ./backend-js/package*.json ./backend-js/
WORKDIR /app/backend-js
RUN npm install --production --verbose
ENV THEME=Default
ENV PORT=5000
EXPOSE 5000
CMD ["node", "server.js"]
