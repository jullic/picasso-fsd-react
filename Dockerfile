FROM node:20.11.1 as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./deploy/nginx/app.conf /etc/nginx/sites-enabled/
COPY ./deploy/nginx/nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
