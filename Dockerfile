
# Use Base Image playwright:bionic
FROM mcr.microsoft.com/playwright:v1.41.1-jammy
# Switch to root user
USER root
# Create a directory for tests
RUN mkdir /tests
# Set the working directory to /tests
WORKDIR /tests
# Copy package.json and package-lock.json
COPY package*.json ./
# Install Playwright dependancies
RUN npm install
# Install Playwright browsers and dependencies
RUN npx playwright install --with-deps
# # # Run Tests
CMD ["npx", "playwright", "test"]