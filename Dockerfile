FROM node:16.14.2

RUN apt update \ 
  && npm i -g npm \
  && npm i -g nodemon pm2 \
  && apt install libaio1 -y

WORKDIR /usr/app