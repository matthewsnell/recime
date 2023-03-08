FROM node:16
COPY package.json ./
RUN npm install
COPY . . 
RUN node factory.js
EXPOSE 3000
CMD ["node", "app.js"]