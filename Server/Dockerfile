# Note, this dockerfile is not yet functional... I have to get redis working on it...

FROM node:carbon

RUN mkdir /Server/

WORKDIR /Server/

# Copy Files
COPY ./package.json /Server/
COPY ./package-lock.json /Server/
COPY ./html /Server/html/
COPY ./main.js /Server/

RUN npm install

## These commands don't work yet... I'll figure it out later I guess.

## RUN apt-get update && apt-get install -y software-properties-common
## 
## RUN add-apt-repository ppa:redislabs/redis
## 
## RUN apt-get update
## 
## RUN apt-get install redis-server

EXPOSE 3333

ENTRYPOINT [ "node main.js | tee -ia logs.txt" ]
