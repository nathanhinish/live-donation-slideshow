FROM node:boron
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

ENV DANGEROUSLY_DISABLE_HOST_CHECK="true"
CMD ["yarn", "start"]