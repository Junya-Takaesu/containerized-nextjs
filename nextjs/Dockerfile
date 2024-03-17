FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

WORKDIR /nextjs

COPY . .

RUN npm install && npm run build

CMD ["npm", "start"]