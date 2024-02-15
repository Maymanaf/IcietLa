# Base image
FROM node:20-bookworm
# Use Base Image playwright:bionic
FROM mcr.microsoft.com/playwright:v1.41.1-jammy
USER root
RUN mkdir /tests
COPY . /tests
WORKDIR /tests
# Copy package.json and package-lock.json
COPY package*.json ./
# Install Playwright dependancies
RUN npm install
# # # Install dependencies.
RUN npx @playwright/test install
# # # Run Tests
#RUN npx playwright test --reporter=list
RUN npx playwright install-deps
RUN npx playwright test