FROM oven/bun:1.2.4-alpine AS builder
WORKDIR /app
COPY bun.lock package.json ./
RUN bun i --frozen-lockfile
COPY . .
RUN bun build ./src/index.ts --outdir ./ --minify && ls | grep -v "index.js" | xargs rm -rf

FROM oven/bun:1.2.4-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/index.js /app
EXPOSE 5000
CMD ["bun", "run", "index.js"]