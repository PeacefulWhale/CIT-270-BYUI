# Note, this dockerfile is not yet functional... I have to get redis working on it...

FROM node:latest

RUN mkdir /Server/

WORKDIR /Server/

# Copy Files
COPY ./package.json /Server/
COPY ./package-lock.json /Server/
COPY ./html /Server/html/
COPY ./main.js /Server/
COPY ./docker_start.sh /Server/
RUN ["chmod", "+x", "/Server/docker_start.sh"]

RUN npm install

# The commands now work!

RUN apt-get update && apt-get install -y software-properties-common

RUN apt-add-repository -r ppa:armagetronad-dev/ppa

RUN apt-get update -q

RUN apt-get install -y redis-server

EXPOSE 3333

ENTRYPOINT [ "/Server/docker_start.sh" ]
