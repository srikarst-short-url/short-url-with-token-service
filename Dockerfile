FROM node:18.16.0
 
USER 0
 
RUN mkdir -p /home/node/short-url-with-token-service
WORKDIR /home/node/short-url-with-token-service