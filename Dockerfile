# Stage 1: Build React/Vite Application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy source files
COPY . .

# Build production assets
RUN npm run build

# Stage 2: Serve with Lightweight Production Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
