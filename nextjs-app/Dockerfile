FROM node:22
WORKDIR /the/workdir/path

COPY . .
RUN npm install
RUN npx next build
CMD [ "npm", "start" ]