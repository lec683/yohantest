# Use an official Node.js runtime as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/whatsapp

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npx @puppeteer/browsers install chrome@stable
RUN npm i puppeteer # Downloads compatible Chrome during installation.
RUN npm i puppeteer-core # Alternatively, install as a library, without downloading Chrome
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
