# Use the official Node.js 14 image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the npm dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the PORT environment variable, only difference from client Dockerfile
ENV PORT=8080

# Expose the application port
EXPOSE $PORT

# Start the application
CMD ["npm", "start"]