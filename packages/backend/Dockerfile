# Use the official Node.js 16 image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Prisma globally
RUN npm install -g @prisma/cli

# Copy the rest of the application code
COPY . .

# Build the Prisma client
RUN npx prisma generate

# Expose the port your app runs on
EXPOSE 3001

# Command to run your application
CMD ["npm", "start"]
