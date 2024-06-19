FROM node:alpine

WORKDIR /app
COPY . .
RUN npm install -g npm@10.5.2
RUN npm install

CMD ["npm", "run", "build"]
