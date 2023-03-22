FROM node:latest AS builder

WORKDIR '/app'

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD ["npm","run","build"]

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
CMD ["nginx", "-g", "daemon off;"]