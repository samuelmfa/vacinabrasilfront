FROM node:12.21.0-slim as node
WORKDIR /app
COPY package.json /app/
#RUN npm i npm@latest -g
RUN npm i
COPY ./ /app/
ARG env=prod
RUN npm run build

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13
COPY --from=node /app/dist/app-vacina /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
