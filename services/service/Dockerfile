FROM node:lts-alpine

RUN mkdir /app
COPY . /app
RUN chmod 755 /app/crontab.txt
RUN /usr/bin/crontab /app/crontab.txt
WORKDIR /app

# Install the dependenciess
ENV MONGODB_URI="mongodb://home-assignment-db:27017/testdb"
RUN yarn install
RUN yarn build

EXPOSE 4200