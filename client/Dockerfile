FROM node:14-alpine

LABEL author="cjfrance <linijini@gmail.com>"

WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set/assign port as an environment variable
ENV PORT=3000

# Expose port 3000 for the application to listen on
EXPOSE $PORT

# Start the application
CMD [ "npm", "start" ]