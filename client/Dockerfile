FROM oven/bun:1.2.4-alpine AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}
COPY . .
RUN bun run build

FROM nginx:1.27.4-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]