# Stage 1
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=build /app/dist/employee_management_application/browser /usr/share/nginx/html
EXPOSE 80