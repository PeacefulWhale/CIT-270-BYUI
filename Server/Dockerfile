FROM node:latest

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN ["chmod", "+x", "start.sh"]

# I don't think I need this stuff anymore...
# Redis Stuff
# RUN apt-get update && apt-get install -y software-properties-common
# RUN apt-add-repository -r ppa:armagetronad-dev/ppa
# RUN apt-get update -q
# RUN apt-get install -y redis-server

EXPOSE 443

ENTRYPOINT [ "./start.sh" ]
