# -----------------------------------------------------------------------------
# Node Slim
# -----------------------------------------------------------------------------
FROM node:9.8.0
# -----------------------------------------------------------------------------
MAINTAINER Rafael Rodrigues <rrodrigues@allin.com.br>
# -----------------------------------------------------------------------------
ADD ./package.json /tmp/package.json
RUN npm i npm@latest -g
RUN npm --version
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN rm -rf ./node_modules
RUN cp -a /tmp/node_modules /usr/src/app
#RUN rm -rf ./dist
RUN npm run build
RUN ls -lha /usr/src/app
RUN rm -rf ./build
RUN rm -rf ./test
RUN rm -rf ./src
ENV PORT=80
EXPOSE 80
CMD [ "npm", "start" ]
