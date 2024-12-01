# Use a stable Node.js LTS version (consider updating to Node.js 16 or later)
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install .

# Copy the rest of the application code into the container
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Specify the command to run your app
CMD [ "npm", "run", "prod" ]
