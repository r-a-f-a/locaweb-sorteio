# estágio de compilação
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN rm -rf dist
RUN rm -rf node_modules
# COPY package*.json ./
RUN npm install
RUN npm run build

# estágio de produção
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
# COPY nginx.conf /etc/nginx/sites-available/vue_project
# COPY nginx.conf /etc/nginx/sites-enabled/vue_project
# RUN ln -s /etc/nginx/sites-available/vue_project /etc/nginx/sites-enabled/vue_project

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]