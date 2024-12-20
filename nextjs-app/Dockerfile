FROM node:22
WORKDIR /the/workdir/path

COPY . .
RUN npm i next@latest
RUN npx next build
CMD [ "npm", "start" ]